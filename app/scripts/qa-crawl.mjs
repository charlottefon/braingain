// Visits every prerendered page and reports page errors, failed SMILES drawings and KaTeX errors.
// Usage: node scripts/qa-crawl.mjs   (expects `vite preview` on :4173)
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
const pages = [];
(function walk(d) {
	for (const f of fs.readdirSync(d)) {
		const p = path.join(d, f);
		if (fs.statSync(p).isDirectory()) walk(p);
		else if (f.endsWith('.html')) pages.push('/' + path.relative('build', p).replace(/(index)?\.html$/, '').replace(/\/$/, ''));
	}
})('build');
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: process.env.PHONE ? { width: 390, height: 844 } : { width: 1280, height: 900 } });
let issues = 0;
const work = [...pages];
async function worker() {
	const page = await ctx.newPage();
	const errs = [];
	page.on('pageerror', (e) => errs.push(e.message));
	while (work.length) {
		const p = work.pop();
		errs.length = 0;
		await page.goto('http://localhost:4173' + p, { waitUntil: 'networkidle' });
		await page.waitForTimeout(150);
		const r = await page.evaluate(() => ({
			smiles: [...document.querySelectorAll('figure.smiles.error')].map((f) => f.dataset.smiles),
			katex: [...document.querySelectorAll('.katex-error')].map((e) => e.textContent.slice(0, 60)),
			wide: document.documentElement.scrollWidth > innerWidth + 1
		}));
		const out = [...errs.map((e) => 'JS: ' + e), ...r.smiles.map((s) => 'SMILES: ' + s), ...r.katex.map((k) => 'KATEX: ' + k), ...(r.wide ? ['OVERFLOW-X'] : [])];
		if (out.length) { issues += out.length; console.log(p, out); }
	}
}
await Promise.all([1, 2, 3, 4].map(worker));
console.log(`${pages.length} pages checked, ${issues} issues`);
await browser.close();
