import { error } from '@sveltejs/kit';
import { listCourses, loadCourse } from '$lib/server/content.js';
import { loadExams, topicIndex, topicsSubset } from '$lib/server/exams.js';

export function entries() {
	return listCourses().flatMap((c) => {
		const qs = loadExams(c.id).questions;
		return c.subjects.filter((s) => qs.some((q) => q.subject === s.id)).map((s) => ({ course: c.id, subject: s.id }));
	});
}

export function load({ params }) {
	const course = loadCourse(params.course);
	const subject = course.subjects.find((s) => s.id === params.subject);
	if (!subject) error(404, 'Fant ikke faget');
	const questions = loadExams(params.course).questions.filter((q) => q.subject === subject.id);
	const index = topicIndex(course);
	const modules = subject.modules
		.map((m) => ({
			id: m.id,
			title: m.title,
			count: questions.filter((q) => q.topics.some((t) => t.startsWith(`${subject.id}/${m.id}`))).length
		}))
		.filter((m) => m.count);
	return {
		subject: { id: subject.id, title: subject.title, href: subject.href },
		modules,
		questions,
		topicTitles: topicsSubset(index, questions)
	};
}
