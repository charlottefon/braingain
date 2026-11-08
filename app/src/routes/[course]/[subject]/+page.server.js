import { error } from '@sveltejs/kit';
import { listCourses, loadCourse, renderMarkdown } from '$lib/server/content.js';

export function entries() {
	return listCourses().flatMap((c) => c.subjects.map((s) => ({ course: c.id, subject: s.id })));
}

export function load({ params }) {
	const course = loadCourse(params.course);
	const s = course.subjects.find((x) => x.id === params.subject);
	if (!s) error(404, 'Fant ikke faget');
	return {
		subject: { id: s.id, title: s.title, summary: s.summary ?? '', html: renderMarkdown(s.body).html },
		modules: s.modules.map((m) => ({
			id: m.id,
			title: m.title,
			summary: m.summary ?? '',
			type: m.type,
			href: m.href,
			count: m.items.length,
			preview: m.items.slice(0, 6).map((i) => ({ title: i.title, href: i.href }))
		}))
	};
}
