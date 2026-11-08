import { json } from '@sveltejs/kit';
import { listCourses, loadCourse, plainText } from '$lib/server/content.js';

export const prerender = true;

export function entries() {
	return listCourses().map((c) => ({ course: c.id }));
}

export function GET({ params }) {
	const c = loadCourse(params.course);
	const docs = [];
	for (const s of c.subjects) {
		for (const m of s.modules) {
			docs.push({
				id: m.href,
				title: m.title,
				summary: m.summary ?? '',
				where: s.title,
				tags: '',
				text: plainText(m.body)
			});
			for (const i of m.items)
				docs.push({
					id: i.href,
					title: i.title,
					summary: i.summary ?? '',
					where: `${s.title} › ${m.title}`,
					tags: (i.tags ?? []).join(' '),
					text: plainText(i.body)
				});
		}
	}
	return json(docs);
}
