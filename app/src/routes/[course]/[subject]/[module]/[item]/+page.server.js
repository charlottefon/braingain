import { error } from '@sveltejs/kit';
import { findItem, listCourses, loadCourse, renderMarkdown } from '$lib/server/content.js';
import { questionsFor, topicIndex, topicsSubset } from '$lib/server/exams.js';

export function entries() {
	return listCourses().flatMap((c) =>
		c.subjects.flatMap((s) =>
			s.modules.flatMap((m) => m.items.map((i) => ({ course: c.id, subject: s.id, module: m.id, item: i.id })))
		)
	);
}

const prettySource = (f) =>
	f
		.split('/')
		.pop()
		.replace(/--(page-|quiz-|assignment-)?\d+(?=\.\w+$)/, '')
		.replace(/\.(html)$/, '')
		.replace(/-/g, ' ');

export function load({ params }) {
	const course = loadCourse(params.course);
	const { subject, module: m, item } = findItem(course, params.subject, params.module, params.item);
	if (!item) error(404, 'Fant ikke siden');
	const r = renderMarkdown(item.body);
	const all = course.subjects.flatMap((s) => s.modules.flatMap((mm) => mm.items));
	const related = (item.related ?? [])
		.map((p) => all.find((x) => x.path === p))
		.filter(Boolean)
		.map((x) => ({ title: x.title, href: x.href, summary: x.summary ?? '' }));
	// Siblings: guide → whole module in order, catalog → same category.
	const siblings = m.type === 'catalog' ? m.items.filter((x) => x.category === item.category) : m.items;
	const idx = siblings.findIndex((x) => x.id === item.id);
	const link = (x) => (x ? { title: x.title, href: x.href } : null);
	const questions = questionsFor(course.id, item.path);
	const category = (m.categories ?? []).find((c) => c.id === item.category);
	return {
		subject: { title: subject.title, href: subject.href },
		module: { title: m.title, href: m.href, type: m.type },
		item: {
			title: item.title,
			summary: item.summary ?? '',
			category: category?.title ?? null,
			tags: item.tags ?? [],
			fields: item.fields ?? null,
			html: r.html,
			toc: r.toc.filter((h) => h.depth === 2),
			sources: (item.sources ?? []).map((s) => {
				const file = typeof s === 'string' ? s : s.file;
				return { name: prettySource(file), file, pages: s.pages ?? null, note: s.note ?? null };
			})
		},
		related,
		questions,
		topicTitles: topicsSubset(topicIndex(course), questions),
		siblings: siblings.map((x) => ({ title: x.title, href: x.href, current: x.id === item.id })),
		prev: link(siblings[idx - 1]),
		next: link(siblings[idx + 1])
	};
}
