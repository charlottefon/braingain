import { listCourses } from '$lib/server/content.js';

export function entries() {
	return listCourses().map((c) => ({ course: c.id }));
}
