<script>
	import { base } from '$app/paths';
	let { data } = $props();
</script>

<svelte:head><title>Eksamensprep</title></svelte:head>

<main class="home">
	<h1>Eksamensprep</h1>
	<p class="lead">Velg emne.</p>
	<div class="grid">
		{#each data.courses as c}
			<a class="card tile" href="{base}/{c.id}">
				<span class="badge">{c.institution ?? 'Emne'}</span>
				<h3 style="margin-top:.5rem">{c.title}</h3>
				<p>{c.fullTitle}</p>
				{#if c.exam?.date}<p style="margin-top:.4rem">Eksamen {new Date(c.exam.date).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' })}</p>{/if}
			</a>
		{/each}
	</div>
</main>

<style>
	.home {
		max-width: 60rem;
		margin: 0 auto;
		padding: calc(env(safe-area-inset-top) + 3rem) 1.25rem 3rem;
	}
</style>
