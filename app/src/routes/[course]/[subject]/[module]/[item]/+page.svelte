<script>
	import Prose from '$lib/components/Prose.svelte';
	import Question from '$lib/components/Question.svelte';
	let { data } = $props();
	let showAll = $state(false);
	const it = $derived(data.item);
	const isGuide = $derived(data.module.type === 'guide');
</script>

<svelte:head><title>{it.title} – {data.module.title}</title></svelte:head>

<div class="layout">
	<article>
		<div class="crumbs">
			<a href={data.subject.href}>{data.subject.title}</a> › <a href={data.module.href}>{data.module.title}</a>
			{#if it.category}› <span>{it.category}</span>{/if}
		</div>
		<h1>{it.title}</h1>
		{#if it.summary}<p class="lead">{it.summary}</p>{/if}

		{#if it.fields}
			<dl class="card facts">
				{#each Object.entries(it.fields) as [k, v]}
					<div><dt>{k}</dt><dd>{v}</dd></div>
				{/each}
			</dl>
		{/if}

		{#if it.toc.length > 2}
			<details class="toc-mobile card">
				<summary>På denne siden</summary>
				<ul>
					{#each it.toc as h}<li><a href="#{h.id}">{h.text}</a></li>{/each}
				</ul>
			</details>
		{/if}

		<Prose html={it.html} />

		{#if data.questions.length}
			<h2 class="section-title">Fra tidligere eksamener ({data.questions.length})</h2>
			{#each data.questions.slice(0, showAll ? undefined : 5) as q (q.id)}
				<Question {q} showSource topicTitles={data.topicTitles} />
			{/each}
			{#if data.questions.length > 5 && !showAll}
				<button class="more" onclick={() => (showAll = true)}>Vis alle {data.questions.length} oppgavene</button>
			{/if}
		{/if}

		{#if data.related.length}
			<h2 class="section-title">Relatert</h2>
			<div class="grid">
				{#each data.related as r}
					<a class="card tile" href={r.href}><h3>{r.title}</h3><p>{r.summary}</p></a>
				{/each}
			</div>
		{/if}

		{#if it.sources.length}
			<details class="sources">
				<summary>Kilder ({it.sources.length})</summary>
				<ul>
					{#each it.sources as s}
						<li title={s.file}>
							{s.name}{#if s.pages}<span class="pages">, s. {s.pages}</span>{/if}{#if s.note}<span class="pages"> – {s.note}</span>{/if}
						</li>
					{/each}
				</ul>
			</details>
		{/if}

		<nav class="pager">
			{#if data.prev}
				<a class="card prev" href={data.prev.href}><small>← Forrige</small><span>{data.prev.title}</span></a>
			{:else}<span></span>{/if}
			{#if data.next}
				<a class="card next" href={data.next.href}><small>Neste →</small><span>{data.next.title}</span></a>
			{/if}
		</nav>
	</article>

	<aside class="rail">
		{#if it.toc.length > 1}
			<div class="rail-block">
				<h4>På denne siden</h4>
				<ul>
					{#each it.toc as h}<li><a href="#{h.id}">{h.text}</a></li>{/each}
				</ul>
			</div>
		{/if}
		<div class="rail-block">
			<h4>{isGuide ? data.module.title : (it.category ?? data.module.title)}</h4>
			<ul class="sibs">
				{#each data.siblings as s}
					<li><a href={s.href} class:current={s.current}>{s.title}</a></li>
				{/each}
			</ul>
		</div>
	</aside>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 3rem;
	}
	article {
		min-width: 0;
		max-width: var(--prose);
	}
	.facts {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
		gap: 0.6rem 1.2rem;
		padding: 0.85rem 1rem;
		margin: 0 0 1.6rem;
	}
	.facts dt {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--faint);
	}
	.facts dd {
		margin: 0.1rem 0 0;
		font-size: 0.95rem;
	}
	.toc-mobile {
		padding: 0.55rem 1rem;
		margin-bottom: 1.5rem;
	}
	.toc-mobile summary {
		cursor: pointer;
		font-weight: 600;
		font-size: 0.92rem;
	}
	.toc-mobile ul {
		margin: 0.5rem 0 0.2rem;
		padding-left: 1.1rem;
		font-size: 0.92rem;
	}
	.more {
		font: inherit;
		font-size: 0.9rem;
		padding: 0.5rem 1rem;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--surface);
		color: var(--text);
		cursor: pointer;
	}
	.sources {
		margin-top: 2.2rem;
		font-size: 0.86rem;
		color: var(--muted);
	}
	.sources summary {
		cursor: pointer;
		font-weight: 600;
	}
	.sources ul {
		padding-left: 1.2rem;
	}
	.pages {
		color: var(--faint);
	}
	.pager {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 0.8rem;
		margin-top: 2.2rem;
	}
	.pager a {
		overflow-wrap: anywhere;
		display: flex;
		flex-direction: column;
		padding: 0.75rem 1rem;
		text-decoration: none;
		color: var(--text);
	}
	.pager a:hover {
		border-color: var(--accent);
	}
	.pager small {
		color: var(--faint);
		font-size: 0.78rem;
	}
	.pager .next {
		text-align: right;
		grid-column: 2;
	}
	.rail {
		display: none;
	}
	@media (min-width: 1280px) {
		.layout {
			grid-template-columns: minmax(0, 1fr) 15rem;
		}
		.toc-mobile {
			display: none;
		}
		.rail {
			display: block;
			position: sticky;
			top: 2rem;
			align-self: start;
			max-height: calc(100vh - 4rem);
			overflow-y: auto;
			font-size: 0.86rem;
		}
	}
	.rail-block {
		margin-bottom: 1.6rem;
	}
	.rail h4 {
		margin: 0 0 0.5rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--faint);
	}
	.rail ul {
		list-style: none;
		margin: 0;
		padding: 0;
		border-left: 1px solid var(--border);
	}
	.rail li a {
		display: block;
		padding: 0.22rem 0 0.22rem 0.75rem;
		color: var(--muted);
		text-decoration: none;
		line-height: 1.35;
	}
	.rail li a:hover {
		color: var(--text);
	}
	.rail li a.current {
		color: var(--accent);
		font-weight: 600;
		border-left: 2px solid var(--accent);
		margin-left: -1px;
	}
</style>
