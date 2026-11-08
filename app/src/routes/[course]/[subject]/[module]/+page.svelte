<script>
	import { base } from '$app/paths';
	import Prose from '$lib/components/Prose.svelte';
	let { data } = $props();
	const m = $derived(data.module);
	let q = $state('');

	const norm = (s) => s.toLowerCase().normalize('NFKD');
	const match = (i) => {
		if (!q.trim()) return true;
		const hay = norm([i.title, i.summary, i.tags.join(' '), Object.values(i.fields ?? {}).join(' ')].join(' '));
		return norm(q)
			.split(/\s+/)
			.every((w) => hay.includes(w));
	};
	const groups = $derived(data.groups.map((g) => ({ ...g, items: g.items.filter(match) })).filter((g) => g.items.length));
	const fieldPreview = (f) => (f ? Object.entries(f).slice(0, 3) : []);
</script>

<svelte:head><title>{m.title} – {data.subject.title}</title></svelte:head>

<div class="crumbs">
	<a href="{base}/{data.nav.id}">{data.nav.title}</a> › <a href={data.subject.href}>{data.subject.title}</a>
</div>
<h1>{m.title}</h1>
<p class="lead">{m.summary}</p>

{#if m.type === 'guide'}
	<ol class="chapters">
		{#each data.items as it, i}
			<li>
				<a class="card chapter" href={it.href}>
					<span class="num">{i + 1}</span>
					<span>
						<strong>{it.title}</strong>
						<small>{it.summary}</small>
					</span>
				</a>
			</li>
		{/each}
	</ol>
	{#if m.html.trim()}<div class="after"><Prose html={m.html} /></div>{/if}
{:else if m.type === 'catalog'}
	<div class="toolbar">
		<input type="search" placeholder="Filtrer {m.title.toLowerCase()} …" bind:value={q} />
		{#if data.groups.length > 1}
			<div class="chips">
				{#each data.groups as g}<a href="#{g.id}">{g.title}</a>{/each}
			</div>
		{/if}
	</div>
	{#each groups as g (g.id)}
		<section id={g.id}>
			<h2 class="section-title">{g.title} <span class="cnt">{g.items.length}</span></h2>
			<div class="grid">
				{#each g.items as it (it.href)}
					<a class="card tile" href={it.href}>
						<h3>{it.title}</h3>
						<p>{it.summary}</p>
						{#if it.fields}
							<dl class="facts">
								{#each fieldPreview(it.fields) as [k, v]}<dt>{k}</dt><dd>{v}</dd>{/each}
							</dl>
						{/if}
					</a>
				{/each}
			</div>
		</section>
	{:else}
		<p class="empty">Ingen treff.</p>
	{/each}
	{#if m.html.trim()}
		<h2 class="section-title">Oversikt og sammenligning</h2>
		<Prose html={m.html} />
	{/if}
{:else}
	{#if m.toc.filter((h) => h.depth === 2).length > 3}
		<details class="toc card">
			<summary>Innhold</summary>
			<ul>
				{#each m.toc.filter((h) => h.depth === 2) as h}
					<li><a href="#{h.id}">{h.text}</a></li>
				{/each}
			</ul>
		</details>
	{/if}
	<Prose html={m.html} />
{/if}

<style>
	.chapters {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0.6rem;
		max-width: var(--prose);
	}
	.chapter {
		display: flex;
		gap: 0.9rem;
		align-items: flex-start;
		padding: 0.85rem 1rem;
		text-decoration: none;
		color: inherit;
	}
	.chapter:hover {
		border-color: var(--accent);
	}
	.num {
		flex: none;
		width: 1.9rem;
		height: 1.9rem;
		border-radius: 50%;
		background: var(--accent-soft);
		color: var(--accent);
		display: grid;
		place-items: center;
		font-weight: 700;
		font-size: 0.9rem;
	}
	.chapter strong {
		display: block;
	}
	.chapter small {
		display: block;
		color: var(--muted);
		font-size: 0.88rem;
		line-height: 1.45;
		margin-top: 0.15rem;
	}
	.after {
		margin-top: 2rem;
	}
	.toolbar {
		position: sticky;
		top: calc(env(safe-area-inset-top) + 3.6rem);
		z-index: 5;
		background: var(--bg);
		padding: 0.4rem 0 0.6rem;
	}
	@media (min-width: 1000px) {
		.toolbar {
			top: 0;
		}
	}
	input[type='search'] {
		width: 100%;
		max-width: 28rem;
		font: inherit;
		padding: 0.55rem 0.8rem;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--surface);
		color: var(--text);
	}
	.chips {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
		margin-top: 0.6rem;
	}
	.chips a {
		font-size: 0.84rem;
		padding: 0.25rem 0.7rem;
		border-radius: 999px;
		border: 1px solid var(--border);
		background: var(--surface);
		text-decoration: none;
		color: var(--text);
	}
	.chips a:hover {
		border-color: var(--accent);
	}
	.cnt {
		font-weight: 500;
		color: var(--faint);
	}
	section {
		scroll-margin-top: 9rem;
	}
	.facts {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.1rem 0.6rem;
		margin: 0.6rem 0 0;
		padding-top: 0.5rem;
		border-top: 1px solid var(--border);
		font-size: 0.8rem;
	}
	.facts dt {
		color: var(--faint);
	}
	.facts dd {
		margin: 0;
		color: var(--text);
	}
	.empty {
		color: var(--muted);
	}
	.toc {
		max-width: var(--prose);
		padding: 0.6rem 1rem;
		margin-bottom: 1.5rem;
	}
	.toc summary {
		cursor: pointer;
		font-weight: 600;
	}
	.toc ul {
		margin: 0.5rem 0 0;
		padding-left: 1.2rem;
		columns: 2 14rem;
		font-size: 0.92rem;
	}
</style>
