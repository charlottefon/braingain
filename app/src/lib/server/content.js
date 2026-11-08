// Loads and renders course content from app/content. Plain JS so both SvelteKit (at build time)
// and scripts/validate.mjs can use it.
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import 'katex/contrib/mhchem';

/** URL prefix when hosted in a subfolder (e.g. GitHub Pages). Matches kit.paths.base. */
export const BASE = process.env.BASE_PATH ?? '';

export const CONTENT_DIR = path.resolve(process.cwd(), 'content');
export const SOURCE_ROOT = path.resolve(process.cwd(), '..');

export const CALLOUTS = {
	husk: 'Husk',
	eksamen: 'Eksamen',
	klinikk: 'Klinisk relevans',
	feil: 'Vanlig feil',
	eksempel: 'Eksempel',
	sjekk: 'Test deg selv'
};

/** Split `---\nyaml\n---\nbody` */
export function parseFrontmatter(raw, file = '') {
	const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!m) return { data: {}, body: raw };
	try {
		return { data: YAML.parse(m[1]) ?? {}, body: m[2] };
	} catch (e) {
		throw new Error(`Invalid frontmatter in ${file}: ${e.message}`);
	}
}

// ---------- markdown ----------

function remarkCallouts() {
	return (tree, file) => {
		visit(tree, (node, index, parent) => {
			if (node.type !== 'containerDirective' && node.type !== 'leafDirective' && node.type !== 'textDirective') return;
			// Inline ":x" / "::x" in ordinary text (e.g. "NOU 2023:4", "kl. 10:30") is not markup – restore it as text.
			if (node.type !== 'containerDirective' && parent && index != null) {
				const colons = node.type === 'textDirective' ? ':' : '::';
				const label = (node.children ?? []).map((c) => c.value ?? '').join('');
				const text = { type: 'text', value: `${colons}${node.name}${label ? `[${label}]` : ''}` };
				parent.children[index] = node.type === 'textDirective' ? text : { type: 'paragraph', children: [text] };
				return;
			}
			if (!(node.name in CALLOUTS)) {
				file.message(`Unknown directive :${node.name}`, node);
				return;
			}
			let label = null;
			const first = node.children[0];
			if (first?.data?.directiveLabel) {
				label = first.children;
				node.children = node.children.slice(1);
			}
			if (node.name === 'sjekk') {
				node.data = { hName: 'details', hProperties: { className: ['sjekk'] } };
				node.children = [
					{ type: 'paragraph', data: { hName: 'summary' }, children: label ?? [{ type: 'text', value: 'Spørsmål' }] },
					{ type: 'blockquote', data: { hName: 'div', hProperties: { className: ['sjekk-svar'] } }, children: node.children }
				];
				return;
			}
			node.data = { hName: 'aside', hProperties: { className: ['callout', `callout-${node.name}`] } };
			node.children = [
				{
					type: 'paragraph',
					data: { hName: 'div', hProperties: { className: ['callout-title'] } },
					children: label ?? [{ type: 'text', value: CALLOUTS[node.name] }]
				},
				...node.children
			];
		});
	};
}

function remarkSmiles() {
	return (tree) => {
		visit(tree, 'code', (node, index, parent) => {
			if (node.lang !== 'smiles' && node.lang !== 'smiles-row') return;
			const entries =
				node.lang === 'smiles'
					? [{ smiles: node.value.trim(), caption: node.meta?.trim() ?? '' }]
					: node.value
							.split('\n')
							.map((l) => l.trim())
							.filter(Boolean)
							.map((l) => {
								const [s, ...c] = l.split('|');
								return { smiles: s.trim(), caption: c.join('|').trim() };
							});
			const figures = entries.map((e) => ({
				type: 'smilesFigure',
				data: {
					hName: 'figure',
					hProperties: { className: ['smiles'], dataSmiles: e.smiles },
					hChildren: [
						{ type: 'element', tagName: 'svg', properties: { className: ['smiles-svg'] }, children: [] },
						...(e.caption
							? [{ type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: e.caption }] }]
							: [])
					]
				}
			}));
			parent.children[index] = {
				type: 'smilesRow',
				data: { hName: 'div', hProperties: { className: ['smiles-row'] } },
				children: figures
			};
		});
	};
}

/** Prefix site-absolute links in notes with the base path. */
function rehypeBaseLinks() {
	return (tree) => {
		if (!BASE) return;
		visit(tree, 'element', (node) => {
			const href = node.properties?.href;
			if (node.tagName === "a" && typeof href === "string" && href.startsWith("/") && !href.startsWith("//"))
				node.properties.href = BASE + href;
		});
	};
}

/** Make tables horizontally scrollable on phones. */
function rehypeWrapTables() {
	return (tree) => {
		visit(tree, 'element', (node, index, parent) => {
			if (node.tagName !== 'table' || !parent || parent.properties?.className?.includes('table-wrap')) return;
			parent.children[index] = {
				type: 'element',
				tagName: 'div',
				properties: { className: ['table-wrap'] },
				children: [node]
			};
		});
	};
}

/** Collect headings and smiles for validation / toc. */
function collect(meta) {
	return () => (tree) => {
		visit(tree, 'heading', (node) => {
			const text = node.children.map((c) => c.value ?? c.children?.map((cc) => cc.value).join('') ?? '').join('');
			meta.headings.push({ depth: node.depth, text: text.trim() });
		});
		visit(tree, 'link', (node) => meta.links.push(node.url));
		visit(tree, 'code', (node) => {
			if (node.lang === 'smiles') meta.smiles.push(node.value.trim());
			if (node.lang === 'smiles-row')
				node.value
					.split('\n')
					.filter((l) => l.trim())
					.forEach((l) => meta.smiles.push(l.split('|')[0].trim()));
		});
		visit(tree, ['inlineMath', 'math'], (node) => meta.math.push(node.value));
	};
}

export function renderMarkdown(md) {
	const meta = { headings: [], links: [], smiles: [], math: [], warnings: [] };
	const file = unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkMath)
		.use(remarkDirective)
		.use(collect(meta))
		.use(remarkCallouts)
		.use(remarkSmiles)
		.use(remarkRehype)
		.use(rehypeKatex, { throwOnError: false, strict: false, output: 'html' })
		.use(rehypeWrapTables)
		.use(rehypeBaseLinks)
		.use(rehypeSlug)
		.use(rehypeStringify)
		.processSync(md);
	meta.warnings = file.messages.map((m) => m.reason);
	const html = String(file);
	const toc = [...html.matchAll(/<h([23]) id="([^"]+)">([\s\S]*?)<\/h\1>/g)].map((m) => ({
		depth: Number(m[1]),
		id: m[2],
		text: m[3].replace(/<[^>]+>/g, '')
	}));
	return { html, toc, ...meta };
}

export function plainText(md) {
	return md
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/\$\$[\s\S]*?\$\$/g, ' ')
		.replace(/:::\w+(\[[^\]]*\])?/g, ' ')
		.replace(/:::/g, ' ')
		.replace(/[#*_`>|]/g, ' ')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/\s+/g, ' ')
		.trim();
}

// ---------- tree ----------

/** When set (by the validator), unreadable files are reported here instead of throwing. */
export const lenient = { errors: process.env.PRERENDER_LENIENT ? [] : null };
const readMd = (p) => {
	try {
		return parseFrontmatter(fs.readFileSync(p, 'utf8'), p);
	} catch (e) {
		if (!lenient.errors) throw e;
		lenient.errors.push(e.message.split('\n')[0]);
		return { data: { title: path.basename(p) }, body: '' };
	}
};
const byOrder = (a, b) => (a.order ?? 999) - (b.order ?? 999) || a.title.localeCompare(b.title, 'nb');

export function listCourses() {
	if (!fs.existsSync(CONTENT_DIR)) return [];
	return fs
		.readdirSync(CONTENT_DIR)
		.filter((d) => fs.existsSync(path.join(CONTENT_DIR, d, 'course.yaml')))
		.map((d) => loadCourse(d));
}

const cache = new Map();

/**
 * Loads the whole course tree (metadata + raw bodies). Rendering happens per page.
 */
export function loadCourse(id) {
	if (cache.has(id) && process.env.NODE_ENV === 'production') return cache.get(id);
	const dir = path.join(CONTENT_DIR, id);
	const course = YAML.parse(fs.readFileSync(path.join(dir, 'course.yaml'), 'utf8'));
	course.id = id;
	course.subjects = (course.subjects ?? [])
		.filter((s) => fs.existsSync(path.join(dir, s, '_subject.md')))
		.map((sid) => {
			const sdir = path.join(dir, sid);
			const s = readMd(path.join(sdir, '_subject.md'));
			const modules = fs
				.readdirSync(sdir, { withFileTypes: true })
				.filter((d) => d.isDirectory() && fs.existsSync(path.join(sdir, d.name, '_module.md')))
				.map((d) => {
					const mdir = path.join(sdir, d.name);
					const m = readMd(path.join(mdir, '_module.md'));
					const items = fs
						.readdirSync(mdir)
						.filter((f) => f.endsWith('.md') && !f.startsWith('_'))
						.map((f) => {
							const it = readMd(path.join(mdir, f));
							const iid = f.replace(/\.md$/, '');
							return {
								...it.data,
								id: iid,
								title: it.data.title ?? iid,
								path: `${sid}/${d.name}/${iid}`,
								href: `${BASE}/${id}/${sid}/${d.name}/${iid}`,
								body: it.body,
								file: path.join(mdir, f)
							};
						})
						.sort(byOrder);
					return {
						...m.data,
						id: d.name,
						title: m.data.title ?? d.name,
						type: m.data.type ?? 'guide',
						href: `${BASE}/${id}/${sid}/${d.name}`,
						body: m.body,
						file: path.join(mdir, '_module.md'),
						items
					};
				})
				.sort(byOrder);
			return {
				...s.data,
				id: sid,
				title: s.data.title ?? sid,
				href: `${BASE}/${id}/${sid}`,
				body: s.body,
				file: path.join(sdir, '_subject.md'),
				modules
			};
		});
	cache.set(id, course);
	return course;
}

export function findItem(course, subjectId, moduleId, itemId) {
	const subject = course.subjects.find((s) => s.id === subjectId);
	const module = subject?.modules.find((m) => m.id === moduleId);
	const item = itemId ? module?.items.find((i) => i.id === itemId) : undefined;
	return { subject, module, item };
}

/** Lightweight summaries for navigation (no bodies). */
export function navTree(course) {
	return {
		id: course.id,
		title: course.title,
		fullTitle: course.fullTitle,
		subjects: course.subjects.map((s) => ({
			id: s.id,
			title: s.title,
			href: s.href,
			summary: s.summary,
			modules: s.modules.map((m) => ({
				id: m.id,
				title: m.title,
				href: m.href,
				type: m.type,
				count: m.items.length
			}))
		}))
	};
}

export function itemCard(i) {
	return {
		id: i.id,
		title: i.title,
		summary: i.summary ?? '',
		href: i.href,
		category: i.category ?? null,
		tags: i.tags ?? [],
		fields: i.fields ?? null
	};
}
