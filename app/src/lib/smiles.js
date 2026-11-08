// Svelte action: draws every <figure class="smiles" data-smiles> inside the node.
let lib;
const dark = () => matchMedia('(prefers-color-scheme: dark)').matches;

async function drawAll(node) {
	const figs = node.querySelectorAll('figure.smiles:not([data-drawn])');
	if (!figs.length) return;
	lib ??= (await import('smiles-drawer')).default;
	const theme = dark() ? 'dark' : 'light';
	for (const fig of figs) {
		const svg = fig.querySelector('svg');
		const small = innerWidth < 640;
		const drawer = new lib.SvgDrawer({
			width: small ? 160 : 220,
			height: small ? 120 : 160,
			bondThickness: 1.1,
			fontSizeLarge: 7,
			fontSizeSmall: 5,
			padding: 8,
			compactDrawing: false,
			explicitHydrogens: false,
			terminalCarbons: false
		});
		try {
			const tree = lib.Parser.parse(fig.dataset.smiles, {});
			drawer.draw(tree, svg, theme);
			svg.style.background = 'transparent';
			fig.dataset.drawn = '1';
		} catch {
			fig.classList.add('error');
			fig.dataset.drawn = '1';
		}
	}
}

export function smiles(node, _html) {
	drawAll(node);
	return {
		update() {
			drawAll(node);
		}
	};
}
