<script>
	import { base } from '$app/paths';
	import Prose from '$lib/components/Prose.svelte';
	let { data } = $props();
	const typeLabel = { guide: 'Gjennomgang', catalog: 'Katalog', page: 'Oppslag' };
</script>

<svelte:head><title>{data.subject.title}</title></svelte:head>

<div class="crumbs"><a href="{base}/{data.nav.id}">{data.nav.title}</a></div>
<h1>{data.subject.title}</h1>
<p class="lead">{data.subject.summary}</p>

<h2 class="section-title">Moduler</h2>
<div class="modules">
	{#each data.modules as m}
		<a class="card mod" href={m.href}>
			<div class="top">
				<span class="badge">{typeLabel[m.type]}</span>
				{#if m.count}<span class="n">{m.count} {m.type === 'guide' ? 'kapitler' : 'oppføringer'}</span>{/if}
			</div>
			<h3>{m.title}</h3>
			<p>{m.summary}</p>
			{#if m.preview.length}
				<ul>
					{#each m.preview as p}<li>{p.title}</li>{/each}
					{#if m.count > m.preview.length}<li class="more">+ {m.count - m.preview.length} til</li>{/if}
				</ul>
			{/if}
		</a>
	{/each}
</div>

{#if data.subject.html.trim()}
	<h2 class="section-title">Om faget</h2>
	<Prose html={data.subject.html} />
{/if}

<style>
	.modules {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 19rem), 1fr));
		gap: 0.9rem;
	}
	.mod {
		display: block;
		padding: 1rem 1.15rem;
		text-decoration: none;
		color: inherit;
	}
	.mod:hover {
		border-color: var(--accent);
	}
	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.n {
		font-size: 0.8rem;
		color: var(--faint);
	}
	h3 {
		margin: 0.55rem 0 0.3rem;
		font-size: 1.08rem;
	}
	p {
		margin: 0;
		color: var(--muted);
		font-size: 0.9rem;
		line-height: 1.45;
	}
	ul {
		margin: 0.7rem 0 0;
		padding: 0.6rem 0 0;
		list-style: none;
		border-top: 1px solid var(--border);
		font-size: 0.86rem;
		color: var(--text);
	}
	li {
		padding: 0.1rem 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.more {
		color: var(--faint);
	}
</style>
