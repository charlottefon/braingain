<script>
	import { base } from '$app/paths';
	import Question from '$lib/components/Question.svelte';
	let { data } = $props();
	let mod = $state('');
	let order = $state('nyest');
	let seed = $state(0);

	function shuffle(arr, s) {
		const a = [...arr];
		let x = s * 9301 + 49297;
		for (let i = a.length - 1; i > 0; i--) {
			x = (x * 9301 + 49297) % 233280;
			const j = Math.floor((x / 233280) * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	const filtered = $derived(
		mod ? data.questions.filter((q) => q.topics.some((t) => t.startsWith(`${data.subject.id}/${mod}`))) : data.questions
	);
	const shown = $derived(order === 'tilfeldig' ? shuffle(filtered, seed) : filtered);
</script>

<svelte:head><title>Eksamensoppgaver – {data.subject.title}</title></svelte:head>

<div class="crumbs"><a href="{base}/{data.nav.id}/eksamen">Eksamensoppgaver</a> › <a href={data.subject.href}>{data.subject.title}</a></div>
<h1>{data.subject.title}: eksamensoppgaver</h1>
<p class="lead">{data.questions.length} oppgaver fra tidligere eksamener.</p>

<div class="bar">
	<select bind:value={mod}>
		<option value="">Alle tema ({data.questions.length})</option>
		{#each data.modules as m}<option value={m.id}>{m.title} ({m.count})</option>{/each}
	</select>
	<select bind:value={order}>
		<option value="nyest">Nyeste først</option>
		<option value="tilfeldig">Tilfeldig rekkefølge</option>
	</select>
	{#if order === 'tilfeldig'}<button onclick={() => (seed = Math.floor(Math.random() * 1e6))}>Stokk på nytt</button>{/if}
</div>

{#each shown as q (q.id)}
	<Question {q} showSource topicTitles={data.topicTitles} />
{/each}

<style>
	.bar {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.2rem;
	}
	select,
	button {
		font: inherit;
		font-size: 0.9rem;
		padding: 0.45rem 0.7rem;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--surface);
		color: var(--text);
	}
	button {
		cursor: pointer;
	}
</style>
