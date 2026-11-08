import { error } from '@sveltejs/kit';
import { findItem, itemCard, listCourses, loadCourse, renderMarkdown } from '$lib/server/content.js';

export function entries() {
	return listCourses().flatMap((c) =>
		c.subjects.flatMap((s) => s.modules.map((m) => ({ course: c.id, subject: s.id, module: m.id })))
	);
}

export function load({ params }) {
	const course = loadCourse(params.course);
	const { subject, module: m } = findItem(course, params.subject, params.module);
	if (!m) error(404, 'Fant ikke modulen');
	const r = renderMarkdown(m.body);
	const cats = m.categories ?? [];
	const items = m.items.map(itemCard);
	const groups =
		m.type === 'catalog'
			? [
					...cats.map((c) => ({ id: c.id, title: c.title, items: items.filter((i) => i.category === c.id) })),
					{ id: '_annet', title: 'Annet', items: items.filter((i) => !cats.some((c) => c.id === i.category)) }
				].filter((g) => g.items.length)
			: [];
	return {
		subject: { title: subject.title, href: subject.href },
		module: {
			id: m.id,
			title: m.title,
			summary: m.summary ?? '',
			type: m.type,
			html: r.html,
			toc: r.toc
		},
		items,
		groups
	};
}
