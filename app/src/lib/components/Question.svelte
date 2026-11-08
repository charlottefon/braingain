<script>
	import { smiles } from '$lib/smiles.js';

	/** @type {{ q: any, showSource?: boolean, topicTitles?: Record<string, {title: string, href: string}> }} */
	let { q, showSource = false, topicTitles = {} } = $props();

	let selected = $state(new Set());
	let numeric = $state('');
	let revealed = $state(false);

	const choice = $derived(q.type === 'single' || q.type === 'multi');
	const correctSet = $derived(new Set(q.answer.map(Number)));

	const verdict = $derived.by(() => {
		if (!revealed) return null;
		if (choice) {
			if (!selected.size) return null;
			const ok = selected.size === correctSet.size && [...selected].every((i) => correctSet.has(i));
			return ok ? 'riktig' : 'feil';
		}
		if (q.type === 'numeric' && numeric.trim()) {
			const norm = (s) => String(s).replace(',', '.').replace(/[^\d.eE+-]/g, '');
			const a = parseFloat(norm(numeric));
			const ok = q.answer.some((x) => {
				const b = parseFloat(norm(x));
				return Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= Math.max(Math.abs(b) * 0.02, 1e-9);
			});
			return ok ? 'riktig' : 'feil';
		}
		return null;
	});

	function toggle(i) {
		if (revealed) return;
		const s = new Set(q.type === 'single' ? [] : selected);
		if (selected.has(i) && q.type === 'multi') s.delete(i);
		else s.add(i);
		selected = s;
	}

	function reset() {
		selected = new Set();
		numeric = '';
		revealed = false;
	}

	const letters = 'ABCDEFGHIJ';
	const typeLabel = { single: 'Ett svar', multi: 'Flere svar', numeric: 'Tallsvar', fill: 'Utfylling', text: 'Kortsvar' };
</script>

<article class="q card" id="q-{q.id}" use:smiles={q.id}>
	<header>
		<span class="num">{q.n}</span>
		<span class="meta"
			>{#if showSource}<a href="{q.exam.href}#q-{q.id}">{q.exam.title}</a>{' · '}{/if}{typeLabel[q.type]}{#if q.points}{` · ${q.points} p`}{/if}</span
		>
	</header>

	<div class="prose stem">{@html q.stem}</div>
	{#if q.figure}<p class="figure">Figur i originalen: {@html q.figure}</p>{/if}

	{#if choice}
		<ol class="options" class:multi={q.type === 'multi'}>
			{#each q.options as opt, i}
				<li>
					<button
						type="button"
						class:selected={selected.has(i)}
						class:correct={revealed && correctSet.has(i)}
						class:wrong={revealed && selected.has(i) && !correctSet.has(i)}
						onclick={() => toggle(i)}
						aria-pressed={selected.has(i)}
					>
						<span class="letter">{letters[i]}</span>
						<span class="opt">{@html opt}</span>
					</button>
				</li>
			{/each}
		</ol>
	{:else if q.type === 'numeric'}
		<input class="num-in" type="text" inputmode="decimal" placeholder="Ditt svar" bind:value={numeric} disabled={revealed} />
	{:else if q.type === 'fill' && q.parts.length}
		<div class="table-wrap fill">
			<table>
				<tbody>
					{#each q.parts as p}
						<tr>
							<td>{@html p.prompt}</td>
							<td class="fill-ans">{#if revealed}<strong>{@html p.answer}</strong>{:else}<span class="blank">?</span>{/if}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}

	<div class="actions">
		{#if !revealed}
			<button type="button" class="primary" onclick={() => (revealed = true)}>
				{choice || q.type === 'numeric' ? 'Sjekk svar' : 'Vis svar'}
			</button>
		{:else}
			{#if verdict}<span class="verdict {verdict}">{verdict === 'riktig' ? 'Riktig ✓' : 'Ikke helt ✗'}</span>{/if}
			<button type="button" class="ghost" onclick={reset}>Prøv igjen</button>
		{/if}
	</div>

	{#if revealed}
		<div class="answer">
			{#if q.type === 'numeric'}
				<p><strong>Fasit:</strong> {q.answer.join(' / ')}</p>
			{/if}
			{#if q.model}
				<div class="model">
					<div class="label">{q.modelSource ?? 'Løsningsforslag'}</div>
					<div class="prose">{@html q.model}</div>
				</div>
			{/if}
			{#if q.explanation}
				<div class="model">
					<div class="label">Forklaring</div>
					<div class="prose">{@html q.explanation}</div>
				</div>
			{/if}
			{#if q.topics.length}
				<p class="topics">
					Les mer:
					{#each q.topics as t, i}{#if topicTitles[t]}<a href={topicTitles[t].href}>{topicTitles[t].title}</a>{#if i < q.topics.length - 1}, {/if}{/if}{/each}
				</p>
			{/if}
		</div>
	{/if}
</article>

<style>
	.q {
		padding: 1rem 1.15rem;
		margin: 0 0 1rem;
		max-width: var(--prose);
		scroll-margin-top: 5rem;
	}
	header {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin-bottom: 0.4rem;
	}
	.num {
		font-weight: 700;
		color: var(--accent);
		min-width: 1.6rem;
	}
	.meta {
		font-size: 0.8rem;
		color: var(--faint);
	}
	.meta a {
		color: var(--muted);
	}
	.stem {
		font-size: 1rem;
	}
	.stem :global(p:first-child) {
		margin-top: 0;
	}
	.figure {
		font-size: 0.86rem;
		color: var(--muted);
		font-style: italic;
	}
	.options {
		list-style: none;
		padding: 0;
		margin: 0.7rem 0;
		display: grid;
		gap: 0.45rem;
		grid-template-columns: minmax(0, 1fr);
	}
	.options button {
		width: 100%;
		display: flex;
		gap: 0.7rem;
		align-items: flex-start;
		text-align: left;
		font: inherit;
		font-size: 0.97rem;
		color: var(--text);
		background: var(--bg);
		border: 1px solid var(--border);
		border-radius: 8px;
		padding: 0.55rem 0.75rem;
		cursor: pointer;
	}
	.options button:hover {
		border-color: var(--faint);
	}
	.letter {
		flex: none;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		border: 1px solid var(--border);
		display: grid;
		place-items: center;
		font-size: 0.78rem;
		font-weight: 700;
		color: var(--muted);
		background: var(--surface);
	}
	.multi .letter {
		border-radius: 5px;
	}
	.options button.selected {
		border-color: var(--accent);
		background: var(--accent-soft);
	}
	.options button.selected .letter {
		background: var(--accent);
		color: var(--surface);
		border-color: var(--accent);
	}
	.options button.correct {
		border-color: #2e8b57;
		background: color-mix(in srgb, #2e8b57 14%, var(--surface));
	}
	.options button.correct .letter {
		background: #2e8b57;
		border-color: #2e8b57;
		color: #fff;
	}
	.options button.wrong {
		border-color: var(--feil);
		background: var(--feil-bg);
	}
	.opt {
		min-width: 0;
	}
	.opt :global(.katex) {
		font-size: 1em;
	}
	.num-in {
		font: inherit;
		padding: 0.5rem 0.7rem;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--bg);
		color: var(--text);
		margin: 0.6rem 0;
		width: 12rem;
	}
	.actions {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		margin-top: 0.6rem;
	}
	.actions button {
		font: inherit;
		font-size: 0.9rem;
		border-radius: 8px;
		padding: 0.45rem 0.95rem;
		cursor: pointer;
	}
	.primary {
		background: var(--accent);
		color: var(--surface);
		border: 1px solid var(--accent);
		font-weight: 600;
	}
	.ghost {
		background: none;
		border: 1px solid var(--border);
		color: var(--muted);
	}
	.verdict {
		font-weight: 700;
	}
	.verdict.riktig {
		color: #2e8b57;
	}
	.verdict.feil {
		color: var(--feil);
	}
	.answer {
		margin-top: 0.9rem;
		padding-top: 0.8rem;
		border-top: 1px dashed var(--border);
	}
	.model {
		margin: 0.6rem 0;
	}
	.label {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--faint);
		margin-bottom: 0.2rem;
	}
	.model .prose {
		font-size: 0.96rem;
	}
	.topics {
		font-size: 0.88rem;
		color: var(--muted);
		margin-bottom: 0;
	}
	.fill table {
		width: 100%;
		border-collapse: collapse;
	}
	.fill-ans {
		width: 40%;
	}
	.blank {
		color: var(--faint);
	}
	td {
		padding: 0.35rem 0.7rem;
		border-bottom: 1px solid var(--border);
		font-size: 0.93rem;
	}
</style>
