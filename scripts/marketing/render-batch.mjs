// Renders a week's pieces.json into finished vertical MP4s plus covers, and writes an
// approval page (approve.html) with every video inline, the per-platform captions,
// and checkboxes whose selection you copy back as JSON.
//
//   node scripts/marketing/render-batch.mjs docs/marketing/weeks/<week>/pieces.json
//
// Lanes:
//   cards   : beats of static text cards with crossfades (letter-to, quote, POV ledger, Friday note)
//   notes   : notes-app letter, lines appearing one by one (recorded live)
//   kinetic : word-pop captions on animated grain (recorded live)
// Every lane is text only, so a week renders with no footage, no voice, no design tool.
import fs from 'fs'; import path from 'path'; import { execFileSync } from 'child_process';
import { chromium } from 'playwright-core';

const specPath = process.argv[2];
if (!specPath) { console.error('usage: render-batch.mjs <pieces.json>'); process.exit(1); }
const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));
const weekDir = path.dirname(path.resolve(specPath));
const out = path.join(weekDir, 'renders'); fs.mkdirSync(out, { recursive: true });
const tmp = path.join(out, '.frames'); fs.mkdirSync(tmp, { recursive: true });
const FFMPEG = process.env.FFMPEG || '/usr/local/bin/ffmpeg';
const FONTS = `<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Inter+Tight:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">`;
const T = { paper: '#F2EDE5', paper2: '#EAE2D2', ink: '#0E0B08', ink3: '#6B6051', ember: '#9C2A1A', sage: '#4F5A45', warm: '#FFF7EE' };
const esc = (s) => String(s).replace(/&(?!#?\w+;)/g, '&amp;').replace(/</g, '&lt;');

// ---------- lane: cards ----------
function cardHtml(beat) {
  const size = beat.size || 66, color = beat.color === 'ember' ? T.ember : beat.color === 'sage' ? T.sage : T.ink;
  const font = beat.mono ? `'JetBrains Mono',monospace` : `Fraunces,Georgia,serif`;
  const extra = beat.mono ? 'letter-spacing:.1em;font-weight:500;line-height:1.6' : `font-weight:${beat.weight || 400};line-height:1.22;letter-spacing:-0.015em${beat.italic ? ';font-style:italic' : ''}`;
  const sub = beat.sub ? `<div style="margin-top:44px;font-family:'JetBrains Mono',monospace;font-size:24px;letter-spacing:.14em;color:${T.ink}">${esc(beat.sub)}</div>` : '';
  const brand = beat.brand ? `<div style="margin-top:40px;font-style:italic;font-size:64px;font-family:Fraunces,Georgia,serif">hearth</div>` : '';
  return `${FONTS}<style>*{margin:0;box-sizing:border-box}body{width:1080px;height:1920px;background:radial-gradient(circle at 50% 44%,${T.warm} 0%,${T.paper} 62%);color:${T.ink};position:relative;display:flex;align-items:center;justify-content:center;padding:90px}
.eyebrow{position:absolute;top:150px;left:0;right:0;text-align:center;font-family:'JetBrains Mono',monospace;font-size:24px;letter-spacing:.2em;text-transform:uppercase;color:${T.ink3}}
.t{max-width:${beat.mono ? 820 : 880}px;text-align:center;font-family:${font};font-size:${size}px;color:${color};${extra}}</style>
<body>${beat.eyebrow ? `<div class="eyebrow">${esc(beat.eyebrow)}</div>` : ''}<div><div class="t">${esc(beat.text)}</div>${brand}${sub}</div></body>`;
}
async function renderCards(piece, page) {
  const F = 0.45, frames = [];
  for (let i = 0; i < piece.beats.length; i++) {
    await page.setContent(cardHtml(piece.beats[i]), { waitUntil: 'networkidle' }); await page.waitForTimeout(150);
    const f = path.join(tmp, `${piece.id}-${i + 1}.png`); await page.screenshot({ path: f }); frames.push(f);
  }
  fs.copyFileSync(frames[0], path.join(out, `${piece.id}-cover.png`));
  const d = piece.beats.map((b) => b.d);
  const args = ['-y', '-loglevel', 'error'];
  d.forEach((dur, i) => args.push('-loop', '1', '-t', String(dur + (i < d.length - 1 ? F : 0)), '-i', frames[i]));
  const fc = []; let prev = '[0:v]', boundary = 0;
  for (let i = 1; i < d.length; i++) { boundary += d[i - 1]; fc.push(`${prev}[${i}:v]xfade=transition=fade:duration=${F}:offset=${(boundary - F).toFixed(2)}[v${i}]`); prev = `[v${i}]`; }
  const total = d.reduce((a, b) => a + b, 0);
  const starts = [0]; d.slice(0, -1).forEach((x) => starts.push(starts[starts.length - 1] + x));
  const n = d.length;
  const audio = piece.audio === 'none'
    ? `anullsrc=r=48000:cl=stereo:d=${total}[aout]`
    : `anoisesrc=color=pink:amplitude=0.012:duration=${total},lowpass=f=900,volume=0.5[bed];sine=frequency=1100:duration=0.04,volume=0.16[tk];[tk]asplit=${n}${starts.map((_, i) => `[k${i}]`).join('')};${starts.map((s, i) => `[k${i}]adelay=${Math.round(s * 1000)}|${Math.round(s * 1000)}[dk${i}];`).join('')}[bed]${starts.map((_, i) => `[dk${i}]`).join('')}amix=inputs=${n + 1}:normalize=0,afade=t=in:d=0.6,afade=t=out:st=${(total - 0.8).toFixed(2)}:d=0.8[aout]`;
  const mp4 = path.join(out, `${piece.id}.mp4`);
  execFileSync(FFMPEG, [...args, '-filter_complex', (fc.length ? fc.join(';') + ';' : '') + audio, '-map', fc.length ? prev : '0:v', '-map', '[aout]', '-r', '30', '-t', String(total), '-c:v', 'libx264', '-crf', '18', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '128k', mp4]);
  return { mp4, seconds: total };
}

// ---------- lane: notes ----------
function notesHtml(piece) {
  const lines = piece.lines;
  return `${FONTS}<style>*{margin:0;box-sizing:border-box}body{width:1080px;height:1920px;background:#F6F1E7;font-family:'Inter Tight',-apple-system,sans-serif;color:#1c1c1e}
.nav{display:flex;justify-content:space-between;align-items:center;padding:110px 56px 20px;color:#C08327;font-size:34px}.nav .done{font-weight:600}
.meta{text-align:center;color:#8a8578;font-size:26px;margin:8px 0 40px}.note{padding:0 84px;font-size:44px;line-height:1.75}
.title{font-size:58px;font-weight:600;margin-bottom:36px}.l{opacity:0;transform:translateY(6px);transition:opacity .5s ease,transform .5s ease;max-height:0;overflow:hidden;color:#3a382f}.l.show{opacity:1;transform:none;max-height:6em}
.sig{color:${T.ember};font-family:'JetBrains Mono',monospace;font-size:30px;letter-spacing:.06em}.cursor{display:inline-block;width:3px;height:1.05em;background:#C08327;vertical-align:-0.15em;animation:bl 1s steps(1) infinite}@keyframes bl{50%{opacity:0}}</style>
<body><div class="nav"><span>&#x2039; Notes</span><span class="done">Done</span></div><div class="meta">${esc(piece.stamp || 'today at 9:12 pm')}</div>
<div class="note"><div class="title l" id="t">${esc(lines[0])}</div>${lines.slice(1).map((l, i) => `<div class="l${l.startsWith('hearth') ? ' sig' : ''}" id="l${i}">${l ? esc(l) : '&nbsp;'}</div>`).join('')}<span class="cursor"></span></div>
<script>const ids=['t',${lines.slice(1).map((_, i) => `'l${i}'`).join(',')}];const cur=document.querySelector('.cursor');ids.forEach((id,i)=>setTimeout(()=>{const el=document.getElementById(id);el.classList.add('show');el.appendChild(cur);},400+i*${piece.gapMs || 2450}));</script></body>`;
}
// ---------- lane: kinetic ----------
function kineticHtml(piece) {
  const groups = piece.groups, times = piece.times;
  return `${FONTS}<style>*{margin:0;box-sizing:border-box}body{width:1080px;height:1920px;background:radial-gradient(circle at 50% 42%,${T.warm} 0%,${T.paper} 65%);overflow:hidden;font-family:Fraunces,Georgia,serif;color:${T.ink};display:flex;align-items:center;justify-content:center}
.zoom{position:absolute;inset:-6%;background:radial-gradient(circle at 50% 40%,#FFF3E2 0%,transparent 55%);animation:zm ${piece.seconds}s ease-in-out forwards}@keyframes zm{from{transform:scale(1)}to{transform:scale(1.12)}}
.stage{position:relative;text-align:center;max-width:880px;padding:0 60px}.g{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;opacity:0}
.w{font-weight:600;font-size:110px;line-height:1.04;letter-spacing:-.02em;opacity:0;transform:scale(.85)}.g.on{opacity:1}.g.on .w{animation:pop .38s cubic-bezier(.2,1.4,.4,1) forwards}
.em{color:${T.ember}}.mono{font-family:'JetBrains Mono',monospace;font-size:34px;font-weight:400;letter-spacing:.18em;color:${T.ink3};white-space:nowrap}@keyframes pop{to{opacity:1;transform:scale(1)}}</style>
<body><div class="zoom"></div><div class="stage">${groups.map((g, gi) => `<div class="g" id="g${gi}">${g.words.map((w, wi) => `<div class="w ${g.em ? 'em' : ''} ${g.mono && wi === g.words.length - 1 ? 'mono' : ''}" style="animation-delay:${wi * 0.22}s">${esc(w)}</div>`).join('')}</div>`).join('')}</div>
<script>const T=${JSON.stringify(times)};T.forEach((t,i)=>setTimeout(()=>{document.querySelectorAll('.g').forEach(g=>g.classList.remove('on'));document.getElementById('g'+i).classList.add('on');},t*1000));</script></body>`;
}
async function recordLive(piece, html, browser) {
  const ctx = await browser.newContext({ viewport: { width: 1080, height: 1920 }, recordVideo: { dir: tmp, size: { width: 1080, height: 1920 } } });
  const p = await ctx.newPage(); await p.setContent(html, { waitUntil: 'networkidle' });
  await p.waitForTimeout(600); await p.screenshot({ path: path.join(out, `${piece.id}-cover.png`) });
  await p.waitForTimeout(piece.seconds * 1000); await ctx.close();
  const webm = await p.video().path(); const mp4 = path.join(out, `${piece.id}.mp4`);
  execFileSync(FFMPEG, ['-y', '-loglevel', 'error', '-i', webm, '-c:v', 'libx264', '-crf', '18', '-pix_fmt', 'yuv420p', '-r', '30', '-an', mp4]);
  fs.unlinkSync(webm); return { mp4, seconds: piece.seconds };
}

// ---------- run ----------
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
const results = [];
for (const piece of spec.pieces) {
  let r;
  if (piece.lane === 'cards') r = await renderCards(piece, page);
  else if (piece.lane === 'notes') r = await recordLive(piece, notesHtml(piece), browser);
  else if (piece.lane === 'kinetic') r = await recordLive(piece, kineticHtml(piece), browser);
  else { console.warn('skip unknown lane', piece.id); continue; }
  results.push({ ...piece, file: path.relative(weekDir, r.mp4), cover: `renders/${piece.id}-cover.png`, seconds: r.seconds });
  console.log('rendered', piece.id, r.seconds + 's');
}
await browser.close();

// ---------- approval page ----------
const platforms = ['instagram', 'tiktok', 'facebook', 'youtube', 'threads', 'pinterest'];
const cards = results.map((p) => `<section class="piece" data-id="${esc(p.id)}">
  <video controls muted playsinline preload="metadata" src="${p.file}" poster="${p.cover}"></video>
  <div class="body"><div class="head"><label><input type="checkbox" class="approve" value="${esc(p.id)}" checked> <b>${esc(p.day)} · ${esc(p.title)}</b></label><span class="meta">${esc(p.lane)} · ${p.seconds}s · ${esc(p.slot || '')}</span></div>
  ${platforms.map((k) => p.captions && p.captions[k] ? `<details ${k === 'instagram' ? 'open' : ''}><summary>${k}</summary><pre>${esc(p.captions[k])}</pre></details>` : '').join('')}
  </div></section>`).join('\n');
fs.writeFileSync(path.join(weekDir, 'approve.html'), `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Approve ${esc(spec.week)}</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400&family=Inter+Tight:wght@400;500;600&display=swap" rel="stylesheet">
<style>body{margin:0;padding:20px;background:${T.paper};color:${T.ink};font-family:'Inter Tight',system-ui,sans-serif}h1{font-family:Fraunces,serif;font-weight:400;font-size:26px;margin:0 0 4px}
.bar{position:sticky;top:0;background:${T.paper};padding:10px 0;border-bottom:1px solid #0E0B0833;margin-bottom:16px;display:flex;gap:10px;align-items:center;flex-wrap:wrap}button{font:inherit;padding:9px 16px;border-radius:999px;border:1px solid ${T.ink};background:${T.ink};color:${T.paper}}
.piece{display:grid;grid-template-columns:200px 1fr;gap:16px;background:${T.warm};border:1px solid #0E0B0833;border-radius:10px;padding:14px;margin-bottom:14px}video{width:200px;aspect-ratio:9/16;border-radius:8px;background:#000}
.head{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:8px}.meta{font-family:ui-monospace,monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:${T.ink3}}
details{margin:4px 0}summary{cursor:pointer;font-size:13px;color:${T.ink3};text-transform:uppercase;letter-spacing:.08em}pre{white-space:pre-wrap;font:14px/1.5 'Inter Tight',system-ui;background:${T.paper};padding:10px;border-radius:6px;margin:6px 0}
@media (max-width:600px){.piece{grid-template-columns:1fr}video{width:100%;max-width:260px}}</style>
<h1>Week ${esc(spec.week)}: approve the batch</h1><div class="bar"><button onclick="copyIt()">Copy approval JSON</button><button onclick="document.querySelectorAll('.approve').forEach(c=>c.checked=false)" style="background:none;color:${T.ink}">Clear all</button><span id="n"></span></div>
${cards}
<script>const upd=()=>document.getElementById('n').textContent=document.querySelectorAll('.approve:checked').length+' of ${results.length} approved';document.addEventListener('change',upd);upd();
function copyIt(){const ids=[...document.querySelectorAll('.approve:checked')].map(c=>c.value);navigator.clipboard.writeText(JSON.stringify({week:'${esc(spec.week)}',approved:ids}));alert(ids.length+' approved. Paste back to Claude to schedule.');}</script>`);
fs.writeFileSync(path.join(weekDir, 'renders', 'manifest.json'), JSON.stringify(results, null, 1));
console.log(`approval page: ${path.join(weekDir, 'approve.html')}`);
