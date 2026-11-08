import { listCourses, loadCourse, BASE } from '$lib/server/content.js';
import { loadExams } from '$lib/server/exams.js';

export function entries() {
	return listCourses().map((c) => ({ course: c.id }));
}

export function load({ params }) {
	const course = loadCourse(params.course);
	const { exams, questions } = loadExams(params.course);
	const subjects = course.subjects
		.map((s) => {
			const qs = questions.filter((q) => q.subject === s.id);
			const modules = s.modules
				.map((m) => ({
					title: m.title,
					count: qs.filter((q) => q.topics.some((t) => t.startsWith(`${s.id}/${m.id}`))).length
				}))
				.filter((m) => m.count);
			return { id: s.id, title: s.title, count: qs.length, modules, href: `${BASE}/${course.id}/eksamen/fag/${s.id}` };
		})
		.filter((s) => s.count);
	return {
		exams: exams.map((e) => ({
			id: e.id,
			title: e.title,
			year: e.year,
			term: e.term,
			href: e.href,
			count: e.questions.length,
			bySubject: Object.fromEntries(subjects.map((s) => [s.id, e.questions.filter((q) => q.subject === s.id).length]))
		})),
		subjects,
		total: questions.length
	};
}
