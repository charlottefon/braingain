<script>
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';

	let { data, children } = $props();
	let open = $state(false);

	const path = $derived(page.url.pathname);
	const activeSubject = $derived(data.nav.subjects.find((s) => path === s.href || path.startsWith(s.href + '/'))?.id);

	afterNavigate(() => (open = false));
</script>

<div class="shell">
	<header class="topbar">
		<button class="menu" aria-label="Meny" aria-expanded={open} onclick={() => (open = !open)}>
			<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"
				><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg
			>
		</button>
		<a class="brand" href="/{data.nav.id}">{data.nav.title}</a>
		<a class="search-btn" href="/{data.nav.id}/sok" aria-label="Søk">
			<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"
				><circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2" /><path
					d="m16 16 4.5 4.5"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				/></svg
			>
		</a>
	</header>

	{#if open}<button class="scrim" aria-label="Lukk meny" onclick={() => (open = false)}></button>{/if}

	<nav class="sidebar" class:open>
		<a class="side-brand" href="/{data.nav.id}">
			<strong>{data.nav.title}</strong>
			<span>{data.nav.fullTitle}</span>
		</a>
		<a class="side-search" href="/{data.nav.id}/sok">Søk i alt innhold …</a>
		<a class="side-link" class:current={path === `/${data.nav.id}`} href="/{data.nav.id}">Oversikt</a>
		<a class="side-link" class:current={path.startsWith(`/${data.nav.id}/eksamen`)} href="/{data.nav.id}/eksamen"
			>Eksamensoppgaver</a
		>
		<div class="side-sep"></div>
		{#each data.nav.subjects as s}
			<div class="subject" class:active={activeSubject === s.id}>
				<a class="side-link subj" class:current={path === s.href} href={s.href}>{s.title}</a>
				{#if activeSubject === s.id}
					<ul>
						{#each s.modules as m}
							<li>
								<a
									class="side-link mod"
									class:current={path === m.href || path.startsWith(m.href + '/')}
									href={m.href}
									>{m.title}{#if m.count}<span class="count">{m.count}</span>{/if}</a
								>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	</nav>

	<main class="main">
		{@render children()}
	</main>
</div>

<style>
	.shell {
		min-height: 100vh;
	}
	.topbar {
		position: sticky;
		top: 0;
		z-index: 20;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: calc(env(safe-area-inset-top) + 0.5rem) 0.75rem 0.5rem;
		background: color-mix(in srgb, var(--bg) 88%, transparent);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--border);
	}
	.topbar button,
	.search-btn {
		display: grid;
		place-items: center;
		width: 2.5rem;
		height: 2.5rem;
		border: 0;
		background: none;
		color: var(--text);
		border-radius: 8px;
		cursor: pointer;
	}
	.brand {
		flex: 1;
		font-weight: 700;
		color: var(--text);
		text-decoration: none;
	}
	.scrim {
		position: fixed;
		inset: 0;
		z-index: 29;
		background: rgb(0 0 0 / 0.35);
		border: 0;
	}
	.sidebar {
		position: fixed;
		z-index: 30;
		top: 0;
		bottom: 0;
		left: 0;
		width: min(var(--sidebar), 85vw);
		overflow-y: auto;
		padding: calc(env(safe-area-inset-top) + 1rem) 0.75rem 2rem;
		background: var(--surface);
		border-right: 1px solid var(--border);
		transform: translateX(-100%);
		transition: transform 0.2s ease;
	}
	.sidebar.open {
		transform: none;
	}
	.side-brand {
		display: block;
		padding: 0.25rem 0.6rem 0.9rem;
		text-decoration: none;
		color: var(--text);
	}
	.side-brand span {
		display: block;
		font-size: 0.82rem;
		color: var(--muted);
	}
	.side-search {
		display: block;
		margin: 0 0.25rem 0.9rem;
		padding: 0.5rem 0.7rem;
		border: 1px solid var(--border);
		border-radius: 8px;
		color: var(--faint);
		text-decoration: none;
		font-size: 0.9rem;
		background: var(--bg);
	}
	.side-link {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.42rem 0.6rem;
		border-radius: 7px;
		color: var(--text);
		text-decoration: none;
		font-size: 0.94rem;
	}
	.side-link:hover {
		background: var(--surface-2);
	}
	.side-link.current {
		background: var(--accent-soft);
		color: var(--accent);
		font-weight: 600;
	}
	.subj {
		font-weight: 500;
	}
	.side-sep {
		height: 1px;
		background: var(--border);
		margin: 0.6rem 0.6rem;
	}
	.subject.active > .subj:not(.current) {
		font-weight: 650;
	}
	.subject ul {
		list-style: none;
		margin: 0.1rem 0 0.4rem;
		padding: 0 0 0 0.6rem;
		border-left: 1px solid var(--border);
		margin-left: 0.9rem;
	}
	.mod {
		font-size: 0.9rem;
		color: var(--muted);
	}
	.count {
		font-size: 0.75rem;
		color: var(--faint);
		font-weight: 400;
	}
	.main {
		padding: 1.25rem 1.1rem 4rem;
		padding-bottom: calc(env(safe-area-inset-bottom) + 4rem);
		max-width: 76rem;
	}

	@media (min-width: 1000px) {
		.topbar,
		.scrim {
			display: none;
		}
		.sidebar {
			transform: none;
			width: var(--sidebar);
		}
		.main {
			margin-left: var(--sidebar);
			padding: 2.5rem 3rem 5rem;
		}
	}
</style>
