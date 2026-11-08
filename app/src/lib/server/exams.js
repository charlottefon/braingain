// Past-exam question bank: content/<course>/eksamen/<exam-id>.yaml
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { CONTENT_DIR, renderMarkdown, lenient } from './content.js';

export const QUESTION_TYPES = ['single', 'multi', 'numeric', 'fill', 'text'];
const TERM_ORDER = { vår: 0, høst: 1 };

const inline = (md) =>
	md == null
		? ''
		: renderMarkdown(String(md))
				.html.trim()
				.replace(/^<p>([\s\S]*)<\/p>$/, '$1');
const block = (md) => (md == null || md === '' ? '' : renderMarkdown(String(md)).html);

export function examDir(courseId) {
	return path.join(CONTENT_DIR, courseId, 'eksamen');
}

/** Raw exam files (unrendered), sorted newest first. */
export function loadExamsRaw(courseId) {
	const dir = examDir(courseId);
	if (!fs.existsSync(dir)) return [];
	return fs
		.readdirSync(dir)
		.filter((f) => f.endsWith('.yaml'))
		.map((f) => {
			let data;
			try {
				data = YAML.parse(fs.readFileSync(path.join(dir, f), 'utf8')) ?? {};
			} catch (e) {
				if (!lenient.errors) throw new Error(`Invalid YAML in ${f}: ${e.message.split('\n')[0]}`);
				lenient.errors.push(`Invalid YAML in eksamen/${f}: ${e.message.split('\n')[0]}`);
				return null;
			}
			return { ...data, id: f.replace(/\.yaml$/, ''), file: path.join(dir, f), questions: data.questions ?? [] };
		})
		.filter(Boolean)
		.sort((a, b) => b.year - a.year || (TERM_ORDER[b.term] ?? 0) - (TERM_ORDER[a.term] ?? 0));
}

const cache = new Map();

/** Rendered exams + flat question list with ids `<exam>-<n>`. */
export function loadExams(courseId) {
	if (cache.has(courseId) && process.env.NODE_ENV === 'production') return cache.get(courseId);
	const exams = loadExamsRaw(courseId).map((e) => ({
		id: e.id,
		title: e.title,
		year: e.year,
		term: e.term,
		source: e.source ?? null,
		note: e.note ?? null,
		href: `/${courseId}/eksamen/${e.id}`,
		questions: e.questions.map((q) => renderQuestion(courseId, e, q))
	}));
	const result = { exams, questions: exams.flatMap((e) => e.questions) };
	cache.set(courseId, result);
	return result;
}

function renderQuestion(courseId, exam, q) {
	return {
		id: `${exam.id}-${q.n}`,
		n: q.n,
		exam: { id: exam.id, title: exam.title, href: `/${courseId}/eksamen/${exam.id}` },
		subject: q.subject ?? null,
		topics: q.topics ?? [],
		type: q.type,
		points: q.points ?? null,
		stem: block(q.stem),
		figure: q.figure ? inline(q.figure) : null,
		options: (q.options ?? []).map(inline),
		answer: Array.isArray(q.answer) ? q.answer : q.answer != null ? [q.answer] : [],
		parts: (q.parts ?? []).map((p) => ({ prompt: inline(p.prompt), answer: inline(p.answer) })),
		model: block(q.model),
		modelSource: q.modelSource ?? null,
		explanation: block(q.explanation)
	};
}

/** Questions tagged with a given item path ("subject/module/item") or module path prefix. */
export function questionsFor(courseId, pathPrefix) {
	return loadExams(courseId).questions.filter((q) =>
		q.topics.some((t) => t === pathPrefix || t.startsWith(pathPrefix + '/'))
	);
}

/** path ("subject/module[/item]") → { title, href } for every module and item. */
export function topicIndex(course) {
	const idx = {};
	for (const s of course.subjects)
		for (const m of s.modules) {
			idx[`${s.id}/${m.id}`] = { title: m.title, href: m.href };
			for (const i of m.items) idx[i.path] = { title: i.title, href: i.href };
		}
	return idx;
}

export function topicsSubset(index, questions) {
	const out = {};
	for (const q of questions) for (const t of q.topics) if (index[t]) out[t] = index[t];
	return out;
}
