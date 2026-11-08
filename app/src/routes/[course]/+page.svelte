<script>
	import { onMount } from 'svelte';
	let { data } = $props();
	const c = $derived(data.course);
	let daysLeft = $state(null);

	onMount(() => {
		if (!c.exam?.date) return;
		const ms = new Date(c.exam.date + 'T09:00:00') - new Date();
		daysLeft = Math.ceil(ms / 86400000);
	});
	const fmt = (d) => new Date(d).toLocaleDateString('nb-NO', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
</script>

<svelte:head><title>{c.title} – oversikt</title></svelte:head>

<h1>{c.title}</h1>
<p class="lead">{c.fullTitle} · {c.institution}</p>

{#if c.exam}
	<section class="card exam">
		<div class="countdown">
			{#if daysLeft !== null && daysLeft >= 0}
				<strong>{daysLeft}</strong><span>{daysLeft === 1 ? 'dag' : 'dager'} til eksamen</span>
			{:else}
				<strong>📅</strong><span>Eksamen</span>
			{/if}
		</div>
		<dl>
			<dt>Dato</dt>
			<dd>{fmt(c.exam.date)} · {c.exam.duration} · {c.exam.credits} studiepoeng</dd>
			<dt>Form</dt>
			<dd>{c.exam.format}</dd>
			<dt>Hjelpemidler</dt>
			<dd>{c.exam.aids}</dd>
			{#if c.outOfScope.length}
				<dt>Ikke pensum</dt>
				<dd>{c.outOfScope.join(' · ')}</dd>
			{/if}
		</dl>
	</section>
{/if}

{#if data.examStats.questions}
	<a class="card practice" href="/{c.id}/eksamen">
		<strong>Eksamensoppgaver</strong>
		<span>{data.examStats.questions} oppgaver fra {data.examStats.exams} tidligere eksamener – øv per fag eller ta hele sett →</span>
	</a>
{/if}

<h2 class="section-title">Fag</h2>
<div class="subjects">
	{#each data.subjects as s}
		<article class="card subject">
			<a class="head" href={s.href}>
				<h3>{s.title}</h3>
				<p>{s.summary}</p>
			</a>
			<ul>
				{#each s.modules as m}
					<li>
						<a href={m.href}>{m.title}</a>
						{#if m.count}<span>{m.count}</span>{/if}
					</li>
				{/each}
			</ul>
		</article>
	{/each}
</div>

<style>
	.exam {
		display: flex;
		gap: 1.5rem;
		padding: 1.1rem 1.25rem;
		align-items: flex-start;
		max-width: 60rem;
	}
	.practice {
		display: block;
		margin-top: 1rem;
		max-width: 60rem;
		padding: 0.9rem 1.25rem;
		text-decoration: none;
		color: var(--text);
		background: var(--accent-soft);
		border-color: transparent;
	}
	.practice strong {
		display: block;
		color: var(--accent);
	}
	.practice span {
		font-size: 0.92rem;
		color: var(--muted);
	}
	.countdown {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 6rem;
		padding-right: 1.25rem;
		border-right: 1px solid var(--border);
	}
	.countdown strong {
		font-size: 2.6rem;
		line-height: 1;
		color: var(--accent);
	}
	.countdown span {
		font-size: 0.8rem;
		color: var(--muted);
		text-align: center;
	}
	dl {
		margin: 0;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.3rem 1rem;
		font-size: 0.92rem;
	}
	dt {
		color: var(--faint);
		font-weight: 600;
	}
	dd {
		margin: 0;
	}
	.subjects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 21rem), 1fr));
		gap: 1rem;
	}
	.subject {
		display: flex;
		flex-direction: column;
	}
	.head {
		display: block;
		padding: 1rem 1.15rem 0.6rem;
		text-decoration: none;
		color: inherit;
	}
	.head h3 {
		margin: 0 0 0.3rem;
		font-size: 1.12rem;
	}
	.head:hover h3 {
		color: var(--accent);
	}
	.head p {
		margin: 0;
		color: var(--muted);
		font-size: 0.9rem;
		line-height: 1.45;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0.4rem 1.15rem 1rem;
		border-top: 1px solid var(--border);
		margin-top: auto;
	}
	li {
		display: flex;
		justify-content: space-between;
		padding: 0.2rem 0;
		font-size: 0.92rem;
	}
	li a {
		text-decoration: none;
	}
	li a:hover {
		text-decoration: underline;
	}
	li span {
		color: var(--faint);
		font-size: 0.82rem;
	}
	@media (max-width: 640px) {
		.exam {
			flex-direction: column;
			gap: 0.8rem;
		}
		.countdown {
			flex-direction: row;
			gap: 0.6rem;
			border: 0;
			padding: 0;
			align-items: baseline;
		}
		dl {
			grid-template-columns: 1fr;
			gap: 0;
		}
		dd {
			margin-bottom: 0.4rem;
		}
	}
</style>
