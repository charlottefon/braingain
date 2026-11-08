<script>
	let { data } = $props();
	const max = $derived(Math.max(1, ...data.subjects.map((s) => s.count)));
</script>

<svelte:head><title>Eksamensoppgaver – {data.nav.title}</title></svelte:head>

<div class="crumbs"><a href="/{data.nav.id}">{data.nav.title}</a></div>
<h1>Eksamensoppgaver</h1>
<p class="lead">
	{data.total} oppgaver fra {data.exams.length} tidligere eksamener, merket med fag og tema. Øv per fag, eller ta et helt sett.
</p>

{#if data.subjects.length}
	<h2 class="section-title">Øv per fag</h2>
	<div class="grid">
		{#each data.subjects as s}
			<a class="card tile" href={s.href}>
				<h3>{s.title}</h3>
				<div class="bar"><span style="width:{(s.count / max) * 100}%"></span></div>
				<p>{s.count} oppgaver</p>
				{#if s.modules.length}
					<p class="mods">{s.modules.map((m) => `${m.title} (${m.count})`).join(' · ')}</p>
				{/if}
			</a>
		{/each}
	</div>
{/if}

<h2 class="section-title">Hele sett</h2>
{#if data.exams.length}
	<div class="table-wrap prose-table">
		<table>
			<thead>
				<tr>
					<th>Eksamen</th>
					<th>Oppgaver</th>
					{#each data.subjects as s}<th class="sub">{s.title}</th>{/each}
				</tr>
			</thead>
			<tbody>
				{#each data.exams as e}
					<tr>
						<td><a href={e.href}>{e.title}</a></td>
						<td>{e.count}</td>
						{#each data.subjects as s}<td class="sub">{e.bySubject[s.id] || ''}</td>{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<p class="empty">Ingen eksamenssett er lagt inn ennå.</p>
{/if}

<style>
	.bar {
		height: 6px;
		border-radius: 3px;
		background: var(--surface-2);
		margin: 0.5rem 0 0.4rem;
		overflow: hidden;
	}
	.bar span {
		display: block;
		height: 100%;
		background: var(--accent);
	}
	.mods {
		font-size: 0.8rem !important;
		margin-top: 0.3rem !important;
	}
	table {
		border-collapse: collapse;
		width: 100%;
		font-size: 0.9rem;
	}
	th,
	td {
		padding: 0.45rem 0.7rem;
		border-bottom: 1px solid var(--border);
		text-align: left;
		white-space: nowrap;
	}
	th {
		background: var(--surface-2);
		font-weight: 600;
	}
	.sub {
		text-align: center;
		color: var(--muted);
		font-size: 0.82rem;
	}
	.empty {
		color: var(--muted);
	}
</style>
