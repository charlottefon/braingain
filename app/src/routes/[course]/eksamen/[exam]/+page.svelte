<script>
	import { base } from '$app/paths';
	import Question from '$lib/components/Question.svelte';
	let { data } = $props();
	let subject = $state('');
	const present = $derived([...new Set(data.exam.questions.map((q) => q.subject))].filter(Boolean));
	const shown = $derived(subject ? data.exam.questions.filter((q) => q.subject === subject) : data.exam.questions);
</script>

<svelte:head><title>{data.exam.title}</title></svelte:head>

<div class="crumbs"><a href="{base}/{data.nav.id}">{data.nav.title}</a> › <a href="{base}/{data.nav.id}/eksamen">Eksamensoppgaver</a></div>
<h1>{data.exam.title}</h1>
<p class="lead">{data.exam.questions.length} oppgaver.{#if data.exam.note} {data.exam.note}{/if}</p>

<div class="chips">
	<button class:on={!subject} onclick={() => (subject = '')}>Alle</button>
	{#each present as s}
		<button class:on={subject === s} onclick={() => (subject = s)}>{data.subjects[s] ?? s}</button>
	{/each}
</div>

{#each shown as q (q.id)}
	<Question {q} topicTitles={data.topicTitles} />
{/each}

<style>
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-bottom: 1.2rem;
	}
	.chips button {
		font: inherit;
		font-size: 0.85rem;
		padding: 0.3rem 0.75rem;
		border-radius: 999px;
		border: 1px solid var(--border);
		background: var(--surface);
		color: var(--text);
		cursor: pointer;
	}
	.chips button.on {
		background: var(--accent);
		border-color: var(--accent);
		color: var(--surface);
	}
</style>
