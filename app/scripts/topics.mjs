// Lists every valid topic path (subject/module and subject/module/item) with titles.
import { listCourses, lenient } from '../src/lib/server/content.js';
lenient.errors = [];
for (const c of listCourses())
	for (const s of c.subjects)
		for (const m of s.modules) {
			console.log(`${s.id}/${m.id}  — ${m.title}`);
			for (const i of m.items) console.log(`  ${i.path}  — ${i.title}`);
		}
