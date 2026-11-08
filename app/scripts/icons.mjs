// Generates PNG app icons (benzene ring on a green tile) without image libraries.
import fs from 'node:fs';
import zlib from 'node:zlib';

const crcTable = Array.from({ length: 256 }, (_, n) => {
	let c = n;
	for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
	return c >>> 0;
});
const crc = (buf) => {
	let c = 0xffffffff;
	for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
	return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
	const len = Buffer.alloc(4);
	len.writeUInt32BE(data.length);
	const td = Buffer.concat([Buffer.from(type), data]);
	const c = Buffer.alloc(4);
	c.writeUInt32BE(crc(td));
	return Buffer.concat([len, td, c]);
};

function distToSeg(px, py, ax, ay, bx, by) {
	const dx = bx - ax, dy = by - ay;
	const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
	return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

function icon(size, { rounded, scale }) {
	const bg = [47, 93, 80], fg = [247, 246, 243];
	const S = 4; // supersampling
	const cx = size / 2, cy = size / 2, R = size * 0.27 * scale, w = size * 0.035 * scale;
	const hex = Array.from({ length: 6 }, (_, i) => {
		const a = Math.PI / 6 + (i * Math.PI) / 3;
		return [cx + R * Math.cos(a), cy + R * Math.sin(a)];
	});
	const rad = rounded ? size * 0.22 : 0;
	const rows = [];
	for (let y = 0; y < size; y++) {
		const row = Buffer.alloc(1 + size * 4);
		for (let x = 0; x < size; x++) {
			let cov = 0, inTile = 0;
			for (let sy = 0; sy < S; sy++)
				for (let sx = 0; sx < S; sx++) {
					const px = x + (sx + 0.5) / S, py = y + (sy + 0.5) / S;
					// rounded tile mask
					const qx = Math.max(rad - px, px - (size - rad), 0), qy = Math.max(rad - py, py - (size - rad), 0);
					if (!rounded || Math.hypot(qx, qy) <= rad) inTile++;
					let d = Infinity;
					for (let i = 0; i < 6; i++) {
						const [ax, ay] = hex[i], [bx, by] = hex[(i + 1) % 6];
						d = Math.min(d, distToSeg(px, py, ax, ay, bx, by));
					}
					const dc = Math.abs(Math.hypot(px - cx, py - cy) - R * 0.58);
					if (d <= w || dc <= w) cov++;
				}
			const a = cov / (S * S), t = inTile / (S * S);
			const o = 1 + x * 4;
			for (let k = 0; k < 3; k++) row[o + k] = Math.round(bg[k] * (1 - a) + fg[k] * a);
			row[o + 3] = Math.round(255 * t);
		}
		rows.push(row);
	}
	const ihdr = Buffer.alloc(13);
	ihdr.writeUInt32BE(size, 0);
	ihdr.writeUInt32BE(size, 4);
	ihdr[8] = 8; ihdr[9] = 6;
	return Buffer.concat([
		Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
		chunk('IHDR', ihdr),
		chunk('IDAT', zlib.deflateSync(Buffer.concat(rows))),
		chunk('IEND', Buffer.alloc(0))
	]);
}

fs.writeFileSync('static/icon-192.png', icon(192, { rounded: true, scale: 1 }));
fs.writeFileSync('static/icon-512.png', icon(512, { rounded: true, scale: 1 }));
fs.writeFileSync('static/icon-maskable-512.png', icon(512, { rounded: false, scale: 0.8 }));
fs.writeFileSync('static/apple-touch-icon.png', icon(180, { rounded: false, scale: 1 }));
console.log('icons written');
