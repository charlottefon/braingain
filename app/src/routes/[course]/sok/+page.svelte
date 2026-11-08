<script>
	import { base } from '$app/paths';
	import { onMount, tick } from 'svelte';
	import MiniSearch from 'minisearch';
	let { data } = $props();

	let q = $state('');
	let ms = $state(null);
	let input;

	onMount(async () => {
		q = new URLSearchParams(location.search).get('q') ?? '';
		const docs = await fetch(`${base}/${data.nav.id}/search.json`).then((r) => r.json());
		const m = new MiniSearch({
			fields: ['title', 'tags', 'summary', 'text'],
			storeFields: ['title', 'summary', 'where'],
			searchOptions: { boost: { title: 4, tags: 2, summary: 1.5 }, prefix: true, fuzzy: 0.2, combineWith: 'AND' }
		});
		m.addAll(docs);
		ms = m;
		await tick();
		input?.focus();
	});

	const results = $derived(ms && q.trim().length > 1 ? ms.search(q).slice(0, 40) : []);

	$effect(() => {
		const u = new URL(location.href);
		if (q) u.searchParams.set('q', q);
		else u.searchParams.delete('q');
		history.replaceState(history.state, '', u);
	});
</script>

<svelte:head><title>Søk – {data.nav.title}</title></svelte:head>

<h1>Søk</h1>
<input
	bind:this={input}
	type="search"
	placeholder={ms ? 'Søk etter begrep, reaksjon, organell, latinsk ord …' : 'Laster søkeindeks …'}
	bind:value={q}
	autocomplete="off"
	spellcheck="false"
/>

{#if q.trim().length > 1 && ms}
	<p class="meta">{results.length ? `${results.length} treff` : 'Ingen treff'}</p>
	<ol class="results">
		{#each results as r (r.id)}
			<li>
				<a href={r.id}>
					<small>{r.where}</small>
					<strong>{r.title}</strong>
					{#if r.summary}<span>{r.summary}</span>{/if}
				</a>
			</li>
		{/each}
	</ol>
{/if}

<style>
	input {
		width: 100%;
		max-width: var(--prose);
		font: inherit;
		font-size: 1.1rem;
		padding: 0.7rem 0.95rem;
		border: 1px solid var(--border);
		border-radius: 10px;
		background: var(--surface);
		color: var(--text);
	}
	input:focus {
		outline: 2px solid var(--accent);
		outline-offset: 1px;
	}
	.meta {
		color: var(--faint);
		font-size: 0.85rem;
	}
	.results {
		list-style: none;
		padding: 0;
		max-width: var(--prose);
	}
	.results a {
		display: block;
		padding: 0.7rem 0;
		border-bottom: 1px solid var(--border);
		text-decoration: none;
		color: var(--text);
	}
	.results a:hover strong {
		color: var(--accent);
	}
	small {
		display: block;
		color: var(--faint);
		font-size: 0.78rem;
	}
	strong {
		display: block;
		font-size: 1.02rem;
	}
	span {
		display: block;
		color: var(--muted);
		font-size: 0.9rem;
		line-height: 1.45;
	}
</style>
