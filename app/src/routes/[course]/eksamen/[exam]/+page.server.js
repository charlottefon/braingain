import { error } from '@sveltejs/kit';
import { listCourses, loadCourse } from '$lib/server/content.js';
import { loadExams, topicIndex, topicsSubset } from '$lib/server/exams.js';

export function entries() {
	return listCourses().flatMap((c) => loadExams(c.id).exams.map((e) => ({ course: c.id, exam: e.id })));
}

export function load({ params }) {
	const course = loadCourse(params.course);
	const exam = loadExams(params.course).exams.find((e) => e.id === params.exam);
	if (!exam) error(404, 'Fant ikke eksamenssettet');
	const subjects = Object.fromEntries(course.subjects.map((s) => [s.id, s.title]));
	return {
		exam,
		subjects,
		topicTitles: topicsSubset(topicIndex(course), exam.questions)
	};
}
