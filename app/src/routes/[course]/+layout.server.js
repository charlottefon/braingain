import { error } from '@sveltejs/kit';
import { loadCourse, navTree } from '$lib/server/content.js';


export function load({ params }) {
	let course;
	try {
		course = loadCourse(params.course);
	} catch {
		error(404, 'Fant ikke kurset');
	}
	return { nav: navTree(course) };
}
