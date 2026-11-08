<script>
	import { smiles } from '$lib/smiles.js';
	let { html } = $props();
</script>

<div class="prose" use:smiles={html}>{@html html}</div>
