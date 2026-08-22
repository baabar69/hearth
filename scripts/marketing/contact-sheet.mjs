// Renders a checkbox contact sheet for a JSON array of hooks or covers.
// Usage: node contact-sheet.mjs hooks <hooks.json>   |   node contact-sheet.mjs covers <covers.json>
import fs from 'fs'; import path from 'path';
const [mode, input] = process.argv.slice(2);
if (!mode || !input) { console.error('usage: contact-sheet.mjs hooks|covers <json>'); process.exit(1); }
const items = JSON.parse(fs.readFileSync(input, 'utf8'));
const out = input.replace(/\.json$/, '.html');
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const cards = items.map(it => mode === 'hooks'
  ? `<label class="card"><input type="checkbox" value="${esc(it.id)}"><div class="meta">${esc(it.lane||'')} · ${esc(it.angle||'')} · score ${esc(it.score??'')}</div><div class="hook">${esc(it.text)}</div></label>`
  : `<label class="card img"><input type="checkbox" value="${esc(it.id)}"><img src="${esc(it.file)}" loading="lazy"><div class="meta">${esc(it.id)}</div></label>`).join('\n');
fs.writeFileSync(out, `<!doctype html><meta charset="utf-8"><title>Contact sheet</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400&family=Inter+Tight:wght@400;500&display=swap" rel="stylesheet">
<style>body{margin:0;padding:28px;background:#F2EDE5;color:#0E0B08;font-family:'Inter Tight',system-ui,sans-serif}
h1{font-family:Fraunces,serif;font-weight:400;font-size:28px;margin:0 0 6px}.bar{position:sticky;top:0;background:#F2EDE5;padding:12px 0;border-bottom:1px solid #0E0B0833;margin-bottom:18px;display:flex;gap:12px;align-items:center}
button{font:inherit;padding:9px 16px;border-radius:999px;border:1px solid #0E0B08;background:#0E0B08;color:#F2EDE5;cursor:pointer}#count{color:#6B6051}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(${mode==='hooks'?'320px':'220px'},1fr));gap:14px}
.card{display:block;background:#FFF7EE;border:1px solid #0E0B0833;border-radius:8px;padding:14px;cursor:pointer}.card:has(input:checked){border-color:#9C2A1A;box-shadow:0 0 0 3px #9C2A1A22}
.card input{float:right}.meta{font-family:ui-monospace,monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#6B6051;margin-bottom:8px}
.hook{font-family:Fraunces,serif;font-size:20px;line-height:1.25}.img img{width:100%;border-radius:4px;display:block;margin-bottom:8px}</style>
<h1>${mode === 'hooks' ? 'Hook batch' : 'Cover batch'}</h1>
<div class="bar"><button onclick="copySel()">Copy selection as JSON</button><span id="count">0 selected</span></div>
<div class="grid">${cards}</div>
<script>const upd=()=>document.getElementById('count').textContent=document.querySelectorAll('input:checked').length+' selected';document.addEventListener('change',upd);
function copySel(){const ids=[...document.querySelectorAll('input:checked')].map(i=>i.value);navigator.clipboard.writeText(JSON.stringify(ids));alert(ids.length+' ids copied. Paste them back to Claude.');}</script>`);
console.log('wrote', out, 'with', items.length, mode);
