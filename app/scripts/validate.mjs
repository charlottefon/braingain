// Validates content against CONTENT_GUIDE.md.
// Usage: node scripts/validate.mjs [filter]   (filter = substring of item path, e.g. "organisk-kjemi")
import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';
import 'katex/contrib/mhchem';
import { listCourses, renderMarkdown, SOURCE_ROOT, lenient } from '../src/lib/server/content.js';
import { loadExamsRaw, topicIndex, QUESTION_TYPES } from '../src/lib/server/exams.js';

let SmilesParser = null;
try {
	const mod = await import('smiles-drawer');
	const SD = mod.default ?? mod;
	SmilesParser = SD.Parser ?? SD.default?.Parser ?? null;
} catch {
	/* smiles parsing unavailable in node – skipped */
}

const filter = process.argv[2] ?? '';
lenient.errors = [];
const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

function checkBody(where, body, course, routes, template) {
	const r = renderMarkdown(body);
	for (const w of r.warnings) err(where, w);
	for (const m of r.math) {
		try {
			katex.renderToString(m, { throwOnError: true, strict: false });
		} catch (e) {
			err(where, `KaTeX: ${e.message.split('\n')[0]}  ←  ${m.slice(0, 80)}`);
		}
	}
	if (SmilesParser)
		for (const s of r.smiles) {
			try {
				SmilesParser.parse(s);
			} catch (e) {
				err(where, `Invalid SMILES "${s}": ${e.message ?? e}`);
			}
		}
	for (const l of r.links) {
		if (/^https?:/.test(l) || l.startsWith('#')) continue;
		const p = l.split('#')[0].replace(/\/$/, '');
		if (!routes.has(p)) err(where, `Broken link ${l}`);
	}
	if (/<\/?[a-z][a-z0-9]*[\s>]/i.test(body.replace(/```[\s\S]*?```/g, '').replace(/\$[^$]*\$/g, '')))
		warn(where, 'Looks like raw HTML');
	if (/akutt\s*medisin(?!sk)|akutt syke pasient/i.test(body)) warn(where, 'Mentions akuttmedisin (out of scope)');
	const h2 = r.headings.filter((h) => h.depth === 2).map((h) => h.text);
	if (r.headings.some((h) => h.depth === 1)) err(where, 'Uses H1 – start at ##');
	if (template) {
		let pos = -1;
		for (const t of template) {
			const i = h2.findIndex((h) => h.toLowerCase() === t.toLowerCase());
			if (i === -1) err(where, `Missing template heading "## ${t}"`);
			else if (i < pos) err(where, `Template heading "## ${t}" out of order`);
			else pos = i;
		}
	}
	return r;
}

for (const course of listCourses()) {
	const routes = new Set([`/${course.id}`, `/${course.id}/sok`, `/${course.id}/eksamen`]);
	for (const e of loadExamsRaw(course.id)) routes.add(`/${course.id}/eksamen/${e.id}`);
	for (const s of course.subjects) {
		routes.add(s.href);
		for (const m of s.modules) {
			routes.add(m.href);
			for (const i of m.items) routes.add(i.href);
		}
	}
	const paths = new Set([...routes].map((r) => r.replace(`/${course.id}/`, '')));

	for (const s of course.subjects) {
		if (!s.title || !s.summary) err(s.file, 'Subject needs title and summary');
		if (s.href.includes(filter) && !s.body.trim()) warn(s.href, 'Subject body is empty');
		if (s.href.includes(filter)) checkBody(s.href, s.body, course, routes);
		for (const m of s.modules) {
			if (!['guide', 'catalog', 'page'].includes(m.type)) err(m.href, `Bad module type ${m.type}`);
			if (m.href.includes(filter)) {
				checkBody(m.href, m.body, course, routes);
				if (m.type === 'page' && m.items.length) err(m.href, 'Page modules must not have item files');
				if (m.type === 'page' && !m.body.trim()) warn(m.href, 'Page module has no body yet');
				if (m.type !== 'page' && !m.items.length) warn(m.href, 'Module has no items yet');
			}
			const cats = new Set((m.categories ?? []).map((c) => c.id));
			for (const i of m.items) {
				const w = i.href;
				if (!w.includes(filter)) continue;
				if (!i.summary) err(w, 'Missing summary');
				if (!Array.isArray(i.sources) || !i.sources.length) err(w, 'Missing sources');
				for (const src of i.sources ?? []) {
					const f = typeof src === 'string' ? src : src.file;
					if (!f || !fs.existsSync(path.join(SOURCE_ROOT, f))) err(w, `Source not found: ${f}`);
				}
				if (m.type === 'catalog' && !cats.has(i.category)) err(w, `Unknown category "${i.category}"`);
				if (m.type === 'guide' && typeof i.order !== 'number') err(w, 'Guide chapters need numeric order');
				for (const rel of i.related ?? []) if (!paths.has(rel)) err(w, `Unknown related "${rel}"`);
				checkBody(w, i.body, course, routes, m.type === 'catalog' ? m.template : null);
				if (!/##\s+Test deg selv/i.test(i.body)) warn(w, 'No "## Test deg selv" section');
			}
		}
	}
	// ---- exam bank
	const tindex = topicIndex(course);
	const subjectIds = new Set(course.subjects.map((x) => x.id));
	for (const e of loadExamsRaw(course.id)) {
		if (filter && !`eksamen/${e.id}`.includes(filter)) continue;
		const w0 = `eksamen/${e.id}`;
		if (!e.title || !e.year || !e.term) err(w0, 'Exam needs title, year, term');
		if (e.source && !fs.existsSync(path.join(SOURCE_ROOT, e.source))) err(w0, `Source not found: ${e.source}`);
		const seen = new Set();
		for (const q of e.questions) {
			const w = `${w0}#${q.n}`;
			if (seen.has(q.n)) err(w, 'Duplicate question number');
			seen.add(q.n);
			if (!QUESTION_TYPES.includes(q.type)) err(w, `Bad type ${q.type}`);
			if (!subjectIds.has(q.subject)) err(w, `Unknown subject ${q.subject}`);
			if (!q.stem) err(w, 'Missing stem');
			if (!Array.isArray(q.topics) || !q.topics.length) warn(w, 'No topics');
			for (const t of q.topics ?? []) if (!tindex[t]) err(w, `Unknown topic ${t}`);
			const ans = Array.isArray(q.answer) ? q.answer : q.answer != null ? [q.answer] : [];
			if (q.type === 'single' || q.type === 'multi') {
				if (!Array.isArray(q.options) || q.options.length < 2) err(w, 'Choice question needs options');
				if (!ans.length) err(w, 'Missing answer');
				if (q.type === 'single' && ans.length !== 1) err(w, 'Single choice needs exactly one answer');
				for (const a of ans) if (!Number.isInteger(a) || a < 0 || a >= (q.options?.length ?? 0)) err(w, `Answer index out of range: ${a}`);
			}
			if (q.type === 'numeric' && !ans.length) err(w, 'Numeric needs answer');
			if (q.type === 'fill' && !(q.parts?.length)) err(w, 'Fill needs parts');
			if (q.type === 'text' && !q.model) warn(w, 'Text question without model answer');
			for (const md of [q.stem, q.model, q.explanation, q.figure, ...(q.options ?? []), ...(q.parts ?? []).flatMap((p) => [p.prompt, p.answer])])
				if (md != null) checkBody(w, String(md), course, routes);
		}
	}
	const items = course.subjects.flatMap((s) => s.modules.flatMap((m) => m.items)).length;
	console.log(`${course.id}: ${course.subjects.length} subjects, ${items} items`);
}

for (const e of lenient.errors) errors.push(e);
for (const w of warnings) console.log('WARN  ' + w);
for (const e of errors) console.log('ERROR ' + e);
console.log(`\n${errors.length} errors, ${warnings.length} warnings`);
if (!SmilesParser) console.log('(SMILES syntax not checked – parser unavailable)');
process.exit(errors.length ? 1 : 0);
