// Composites cover/slide variants to PNG from HTML templates (Saraev's compositing pipeline, done with Chrome).
// Usage: node render-covers.mjs --week 2026-W35 --input lines.json [--scale 1.1]
// lines.json: [{ "id": "sun-1", "kind": "reel"|"carousel", "eyebrow": "letter no. 22", "line": "A letter to the eldest daughter", "closer": "hearth" }]
import fs from 'fs'; import path from 'path'; import { chromium } from 'playwright-core';
const arg = n => { const i = process.argv.indexOf('--' + n); return i > -1 ? process.argv[i + 1] : undefined; };
const week = arg('week'), input = arg('input'), scale = parseFloat(arg('scale') || '1');
if (!week || !input) { console.error('usage: --week <ISO week> --input <lines.json> [--scale 1.1]'); process.exit(1); }
const root = path.resolve(process.cwd(), 'docs/marketing/weeks', week, 'covers'); fs.mkdirSync(root, { recursive: true });
const lines = JSON.parse(fs.readFileSync(input, 'utf8'));
const fonts = `<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..500;1,9..144,300..500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">`;
const variants = [
  { v: 'a', bg: '#F2EDE5', size: 1.0 }, { v: 'b', bg: 'radial-gradient(circle at 50% 42%, #FFF7EE 0%, #F2EDE5 60%)', size: 1.0 },
  { v: 'c', bg: '#F2EDE5', size: 1.14 }, { v: 'd', bg: 'radial-gradient(circle at 50% 42%, #FFF7EE 0%, #F2EDE5 60%)', size: 1.14 },
];
const html = (l, va) => {
  const W = 1080, H = l.kind === 'reel' ? 1920 : 1350; const base = (l.kind === 'reel' ? 96 : 88) * va.size * scale;
  return `${fonts}<style>*{margin:0;box-sizing:border-box}body{width:${W}px;height:${H}px;background:${va.bg};color:#0E0B08;font-family:Fraunces,Georgia,serif;position:relative;padding:80px}
.eyebrow{position:absolute;top:140px;left:80px;font-family:'JetBrains Mono',monospace;font-size:26px;letter-spacing:.18em;text-transform:uppercase;color:#4F5A45}
.rule{position:absolute;top:110px;left:80px;width:64px;height:1px;background:#9C2A1A}
.line{position:absolute;left:80px;right:80px;top:${l.kind === 'reel' ? 560 : 420}px;font-weight:500;font-size:${base}px;line-height:1.05;letter-spacing:-.02em}
.closer{position:absolute;left:80px;bottom:110px;font-style:italic;font-weight:400;font-size:40px;color:#9C2A1A}</style>
<body><div class="rule"></div><div class="eyebrow">${l.eyebrow || ''}</div><div class="line">${l.line}</div><div class="closer">${l.closer || 'hearth'}</div></body>`;
};
const b = await chromium.launch({ channel: 'chrome', headless: true });
const manifest = [];
for (const l of lines) for (const va of variants) {
  const H = l.kind === 'reel' ? 1920 : 1350; const p = await b.newPage({ viewport: { width: 1080, height: H } });
  await p.setContent(html(l, va), { waitUntil: 'networkidle' }); await p.waitForTimeout(250);
  const file = `${l.id}-${va.v}.png`; await p.screenshot({ path: path.join(root, file) }); await p.close();
  manifest.push({ id: `${l.id}-${va.v}`, file });
}
await b.close();
fs.writeFileSync(path.join(root, 'covers.json'), JSON.stringify(manifest, null, 2));
console.log('rendered', manifest.length, 'covers to', root);
