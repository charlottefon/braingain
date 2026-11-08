import { listCourses, loadCourse } from '$lib/server/content.js';
import { loadExams } from '$lib/server/exams.js';

export function load({ params }) {
	const c = loadCourse(params.course);
	return {
		course: {
			id: c.id,
			title: c.title,
			fullTitle: c.fullTitle,
			institution: c.institution,
			exam: c.exam ?? null,
			outOfScope: c.outOfScope ?? []
		},
		examStats: (({ exams, questions }) => ({ exams: exams.length, questions: questions.length }))(loadExams(c.id)),
		subjects: c.subjects.map((s) => ({
			id: s.id,
			title: s.title,
			summary: s.summary ?? '',
			href: s.href,
			items: s.modules.reduce((n, m) => n + (m.type === 'page' ? 1 : m.items.length), 0),
			modules: s.modules.map((m) => ({ title: m.title, href: m.href, type: m.type, count: m.items.length }))
		}))
	};
}

export function entries() {
	return listCourses().map((c) => ({ course: c.id }));
}
