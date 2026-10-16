// Creates Buffer DRAFTS for every piece in a week's pieces.json, one per connected
// channel, scheduled at the piece's slot, with that platform's caption. The founder
// approves in the Buffer app (Drafts, tap Add to Queue). Nothing publishes from here.
//
//   BUFFER_ACCESS_TOKEN=... node scripts/marketing/publish-buffer.mjs docs/marketing/weeks/<week>/pieces.json \
//       --media https://<public-host>/renders [--week-start 2026-09-14] [--dry-run] [--introspect]
//
// The MP4s must be reachable at <media>/<piece.id>.mp4 (Buffer fetches media from a
// public URL; drop the renders/ folder on app.netlify.com/drop to get one).
// Buffer's GraphQL API changed in 2026 and field names may differ from the ones assumed
// here, so the script first introspects the schema and refuses to send anything if the
// mutation or its input does not look like what it expects. Use --introspect to print
// the live shape and adjust FIELDS below.
import fs from 'fs';

const args = process.argv.slice(2);
const specPath = args[0];
const opt = (n, d) => { const i = args.indexOf('--' + n); return i > -1 ? args[i + 1] : d; };
const flag = (n) => args.includes('--' + n);
const TOKEN = process.env.BUFFER_ACCESS_TOKEN;
const API = process.env.BUFFER_API || 'https://api.buffer.com';
if (!specPath || !TOKEN) { console.error('usage: BUFFER_ACCESS_TOKEN=... publish-buffer.mjs <pieces.json> --media <url> [--week-start YYYY-MM-DD] [--dry-run] [--introspect]'); process.exit(1); }
const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));
const MEDIA = (opt('media', process.env.MEDIA_BASE_URL) || '').replace(/\/$/, '');
const DRY = flag('dry-run');

// Assumed shape of Buffer's GraphQL API (verify with --introspect before first use).
const FIELDS = {
  channelsQuery: `query { channels { id service name } }`,
  createMutation: `mutation Create($input: CreatePostInput!) { createPost(input: $input) { __typename ... on Post { id status dueAt } ... on MutationError { message } } }`,
};
const SERVICE_TO_CAPTION = { instagram: 'instagram', tiktok: 'tiktok', facebook: 'facebook', youtube: 'youtube', threads: 'threads', pinterest: 'pinterest', linkedin: 'facebook' };

async function gql(query, variables) {
  const res = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` }, body: JSON.stringify({ query, variables }) });
  const j = await res.json();
  if (j.errors) throw new Error(JSON.stringify(j.errors).slice(0, 400));
  return j.data;
}

// 1. Introspect createPost's input so we never send a blind mutation.
const intro = await gql(`query { __type(name: "CreatePostInput") { inputFields { name type { name kind ofType { name kind } } } } }`);
const inputFields = intro?.__type?.inputFields?.map((f) => f.name) || [];
if (flag('introspect')) { console.log('CreatePostInput fields:', inputFields.join(', ')); process.exit(0); }
const need = ['channelId', 'text', 'dueAt'];
const missing = need.filter((f) => !inputFields.includes(f));
if (missing.length) { console.error(`Buffer schema differs from the assumed shape. Missing input fields: ${missing.join(', ')}. Live fields: ${inputFields.join(', ')}. Run with --introspect and adjust FIELDS.`); process.exit(2); }
const mediaField = ['mediaUrls', 'media', 'attachments'].find((f) => inputFields.includes(f));
const draftField = ['saveToDraft', 'draft', 'isDraft'].find((f) => inputFields.includes(f));

// 2. Channels.
const { channels } = await gql(FIELDS.channelsQuery);
console.log('channels:', channels.map((c) => `${c.service}:${c.name}`).join(', '));

// 3. Slots -> ISO dates in America/New_York for the target week.
const DAY = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
const weekStart = opt('week-start'); // a Sunday, YYYY-MM-DD; default: next Sunday
function nextSunday() { const d = new Date(); d.setUTCDate(d.getUTCDate() + ((7 - d.getUTCDay()) % 7 || 7)); return d.toISOString().slice(0, 10); }
const sunday = weekStart || nextSunday();
function dueAt(day, slot) {
  const m = /(\d{1,2}):(\d{2})(am|pm)/i.exec(slot || '10:00am'); let h = Number(m[1]) % 12 + (m[3].toLowerCase() === 'pm' ? 12 : 0);
  const d = new Date(sunday + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + DAY[day]);
  // Eastern Time offset: EDT (UTC-4) until the first Sunday of November, then EST (UTC-5).
  const y = d.getUTCFullYear(); const novFirstSun = new Date(Date.UTC(y, 10, 1)); novFirstSun.setUTCDate(1 + ((7 - novFirstSun.getUTCDay()) % 7));
  const marSecondSun = new Date(Date.UTC(y, 2, 1)); marSecondSun.setUTCDate(1 + ((7 - marSecondSun.getUTCDay()) % 7) + 7);
  const offset = d >= marSecondSun && d < novFirstSun ? 4 : 5;
  d.setUTCHours(h + offset, Number(m[2]), 0, 0); return d.toISOString();
}

// 4. One draft per piece per channel.
let created = 0, failed = 0;
for (const piece of spec.pieces) {
  const mediaUrl = `${MEDIA}/${piece.id}.mp4`;
  for (const ch of channels) {
    const capKey = SERVICE_TO_CAPTION[ch.service?.toLowerCase()]; if (!capKey || !piece.captions?.[capKey]) continue;
    let text = piece.captions[capKey];
    const input = { channelId: ch.id, text, dueAt: dueAt(piece.day, piece.slot) };
    if (mediaField) input[mediaField] = mediaField === 'mediaUrls' ? [mediaUrl] : [{ url: mediaUrl }];
    if (draftField) input[draftField] = true;
    if (DRY) { console.log('DRY', ch.service, piece.id, input.dueAt, mediaUrl); continue; }
    try { const r = await gql(FIELDS.createMutation, { input }); const p = r.createPost; if (p?.message) throw new Error(p.message); console.log('draft', ch.service, piece.id, p?.dueAt || ''); created++; }
    catch (e) { console.error('FAILED', ch.service, piece.id, e.message); failed++; }
  }
}
console.log(`\n${DRY ? 'dry run complete' : `${created} drafts created, ${failed} failed`}. Approve them in the Buffer app: Drafts, then Add to Queue.`);
if (failed) process.exit(3);
