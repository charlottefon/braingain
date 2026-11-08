// Lists the elements that stick out past the viewport at phone width. Usage: node scripts/qa-overflow.mjs <path>...
import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
for (const path of process.argv.slice(2)) {
	await p.goto('http://localhost:4173' + path, { waitUntil: 'networkidle' });
	const r = await p.evaluate(() => {
		const out = new Map();
		for (const el of document.querySelectorAll('body *')) {
			const rc = el.getBoundingClientRect();
			if (rc.right > innerWidth + 1 && rc.width > 0) {
				// skip descendants of scroll containers
				let a = el.parentElement, scrolled = false;
				while (a) { const s = getComputedStyle(a).overflowX; if (s === 'auto' || s === 'scroll' || s === 'hidden') { scrolled = true; break; } a = a.parentElement; }
				if (scrolled) continue;
				const key = el.tagName.toLowerCase() + '.' + [...el.classList].join('.');
				out.set(key, (out.get(key) ?? '') || el.textContent.slice(0, 50));
			}
		}
		return [...out].slice(0, 6);
	});
	console.log(path, r);
}
await b.close();
