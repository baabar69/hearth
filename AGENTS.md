<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Copy rules (apply to every user-facing string: page copy, metadata, schema, emails, llms.txt)

- **Never use an em dash** (`—`, `&mdash;`, or `--` standing in for one). The founder reads them as machine-written. Rephrase with a full stop, a comma, a colon, parentheses, or the word "and". En dashes for ranges (35–60 min, $400–1,200) are fine.
- Hearth is peer support, not therapy. Never imply clinical outcomes or call a Keeper a clinician. Position against therapy *apps* (rotating counsellors, no continuity) by what Hearth does better: one hand-matched person, kept for years. Say plainly where competitors are better.
- Plain sentence first, poetry second. Every coined term (Keeper, Sit, Long Talk, Circle, Ember, Bridge) gets a plain-English gloss at first use on a page.
- Before finishing, run `grep -rnE "—|&mdash;" app public/llms.txt` on the files you touched. It must return nothing.
