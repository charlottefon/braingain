// Extracts text from a PDF, page by page. Usage: node scripts/pdftext.mjs <file.pdf> [from-to]
import fs from 'node:fs';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';

const [file, range] = process.argv.slice(2);
const doc = await getDocument({ data: new Uint8Array(fs.readFileSync(file)), verbosity: 0 }).promise;
const [from, to] = range ? range.split('-').map(Number) : [1, doc.numPages];
console.log(`# ${file} – ${doc.numPages} pages`);
for (let p = from; p <= Math.min(to || from, doc.numPages); p++) {
	const page = await doc.getPage(p);
	const tc = await page.getTextContent();
	let out = '', lastY = null;
	for (const it of tc.items) {
		const y = it.transform?.[5];
		if (lastY !== null && Math.abs(y - lastY) > 2) out += '\n';
		out += it.str;
		if (it.hasEOL) out += '\n';
		lastY = y;
	}
	console.log(`\n--- side ${p} ---\n${out.replace(/\n{3,}/g, '\n\n').trim()}`);
}
