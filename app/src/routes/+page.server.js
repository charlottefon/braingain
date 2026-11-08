import { listCourses } from '$lib/server/content.js';

export function load() {
	return {
		courses: listCourses().map((c) => ({
			id: c.id,
			title: c.title,
			fullTitle: c.fullTitle,
			institution: c.institution,
			exam: c.exam ?? null,
			subjects: c.subjects.length
		}))
	};
}
