// Applies topic retags to the exam bank.
// Usage: node scripts/retag.mjs <file>   with lines like:  2018-v 4.68 → cellebiologi/sammensatte-tema/jern-…  [replace]
// Default: adds the topic (first position). With "replace" at line end: replaces all topics.
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
const byExam = new Map();
for (const l of lines) {
	const m = l.match(/^(\S+)\s+(?:Q|oppg\.?\s*)?([\w.]+)\s*(?:→|->)\s*(\S+)(\s+replace)?$/);
	if (!m) { console.log('SKIP (unparsed):', l); continue; }
	const [, exam, n, topic, rep] = m;
	if (!byExam.has(exam)) byExam.set(exam, []);
	byExam.get(exam).push({ n, topic, replace: !!rep });
}
for (const [exam, tags] of byExam) {
	const file = path.join('content/medod1/eksamen', `${exam}.yaml`);
	if (!fs.existsSync(file)) { console.log('NO FILE', file); continue; }
	const doc = YAML.parseDocument(fs.readFileSync(file, 'utf8'));
	const qs = doc.get('questions');
	let changed = 0;
	for (const t of tags) {
		const q = qs.items.find((it) => String(it.get('n')) === t.n);
		if (!q) { console.log(`NOT FOUND ${exam} #${t.n}`); continue; }
		const cur = (q.get('topics')?.toJSON?.() ?? q.get('topics') ?? []).filter((x) => x !== t.topic);
		const next = t.replace ? [t.topic] : [...cur, t.topic].slice(0, 4);
		const node = doc.createNode(next);
		node.flow = true;
		q.set('topics', node);
		changed++;
	}
	fs.writeFileSync(file, doc.toString({ lineWidth: 0, flowCollectionPadding: false }));
	console.log(`${exam}: ${changed} retagged`);
}
