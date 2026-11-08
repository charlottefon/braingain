// Full-page screenshots for visual QA. Usage: node scripts/shots.mjs <outdir> [--phone] <path>...  (expects `vite preview` on :4173)
import { chromium } from 'playwright';
const args = process.argv.slice(2);
const out = args.shift();
const phone = args[0] === '--phone' && args.shift();
const browser = await chromium.launch();
const ctx = await browser.newContext(
	phone ? { viewport: { width: 390, height: 844 }, colorScheme: 'dark' } : { viewport: { width: 1280, height: 900 } }
);
const page = await ctx.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR', e.message));
for (const p of args) {
	await page.goto('http://localhost:4173' + p, { waitUntil: 'networkidle' });
	await page.waitForTimeout(500);
	const bad = await page.$$eval('figure.smiles.error', (f) => f.map((x) => x.dataset.smiles));
	if (bad.length) console.log('SMILES render errors on', p, bad);
	const file = `${out}/${phone ? 'phone' : 'desk'}${p.replace(/\//g, '_')}.png`;
	await page.screenshot({ path: file, fullPage: true });
	console.log(file);
}
await browser.close();
