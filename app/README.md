# Eksamensprep

Static SvelteKit study app (offline PWA). The content lives in `content/<course>/` as Markdown + YAML; the app renders it at build time.

## Run

Node is installed locally in `~/.local/node`. Add it to your PATH (e.g. in `~/.zshrc`):

```sh
export PATH="$HOME/.local/node/bin:$PATH"
```

```sh
npm run dev          # local dev server, http://localhost:5173
npm run validate     # check all content (links, templates, sources, formulas, structures, exam bank)
npm run build        # static site in build/ (fails on broken links)
npm run preview      # serve build/ at http://localhost:4173
```

To use it on your phone, host the contents of `build/` on any static host. Then open the site in Safari and choose
Share → Add to Home Screen. After the first visit, the whole site works offline.

## Structure

| Path | What |
|---|---|
| `content/<course>/course.yaml` | course metadata, exam info, subject order |
| `content/<course>/<subject>/_subject.md` | subject page |
| `content/<course>/<subject>/<module>/_module.md` | module: `guide` (chapters), `catalog` (grouped entries with a fixed template) or `page` |
| `content/<course>/<subject>/<module>/<item>.md` | chapter / catalog entry |
| `content/<course>/eksamen/<id>.yaml` | past exam, questions tagged with topic paths |
| `CONTENT_GUIDE.md` | the content contract (frontmatter, markdown features, quality bar) |
| `src/lib/server/content.js` | loader + markdown pipeline (KaTeX + mhchem, SMILES drawings, callouts, self-tests) |
| `src/lib/server/exams.js` | exam bank loader |
| `scripts/` | `validate`, `topics` (list topic paths), `pdftext` (extract PDF text), `icons`, `shots` (screenshots) |

## Adding a course

1. Create `content/<id>/course.yaml` (copy `medod1` and adjust).
2. Add subject folders with `_subject.md`, and module folders with `_module.md`.
3. Write items following `CONTENT_GUIDE.md`, and run `npm run validate`.

You don't need to change any code: routes, navigation, search and the exam bank all come from the content.
