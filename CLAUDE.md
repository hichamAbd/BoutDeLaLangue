# Sur le bout de la langue

A French brush-up web app, made by the repo owner as a gift for his mother. It is for someone who studied in French
and spoke it well, but has not used it for years: the knowledge is there, the reflexes are not. The app is a daily
ritual that brings the words back, so that they come quickly in real conversations. Everything on screen is in French.

Live at: https://hichamabd.github.io/BoutDeLaLangue/ (served from the `gh-pages` branch, the only branch).

## The brief and the decisions

- **Voice**: the app speaks as her son. It says *tu* and calls her **Mama** (not « Maman »). She is feminine
  (« prête », « venue »), he is masculine (« fier »). Warm, a little teasing, never girly, never saccharine.
- **Level**: not basics, not literature. Everyday spoken French, with questions hard enough to make a native speaker
  hesitate (subjunctive forms, agreements, pronoun order, homophones, liaisons, idioms, colloquial French, polite formulas).
- **Main action**: *le défi du jour*, 7 questions, about 5 minutes, **never timed**. Every answer gets an explanation.
- **Pace**: calm everywhere. The only timed thing is the optional game « Du tac au tac ».
- **Audio**: a listen button only (the phone's own French voice, `speechSynthesis`, local voices only).
  **No microphone and no speech recognition**: browsers send the audio to a server for that.
- **No "notes from the son" feature** (he declined it). The affection lives in the app's own voice.
- **Look**: « Grands carreaux ». A French school notebook by day (Seyès ruling, ink blue, red margin), a blackboard
  at night (dark mode follows the phone, no manual switch). The son's voice is set in the school cursive font Borel.
- **Calendar**: four seasons (one "crayon" colour and a margin drawing each), Mother's Day (French date: last Sunday
  of May, or first Sunday of June when that day is Pentecost), her birthday month (garlands) and her birthday (a
  surprise page and a special challenge).
- **Rewards**: a stamp per finished day, *bons points*, and a collectible *image* every 25 points (each image teaches
  an idiom). A missed day does not break the streak; two in a row do.
- **Devices**: must run well on a mid-range Android phone (Chrome) and on iPhone (Safari). The owner has no Mac.

## Privacy rules (do not break)

- **No personal details in this public repo**: never her first name, never her birthday, never the owner's name, in
  code, content, commit messages or docs. The app only ever says « Mama ».
- Her first name and birthday reach her phone through a **personal link** that the owner sends her:
  `…/BoutDeLaLangue/#pour=PRENOM&anniv=JJ-MM` (optional `&de=PRENOM_DU_FILS`). The part after `#` is never sent to a
  server. The app stores it locally and removes it from the address bar. Fallback: Plus > Réglages > Personnaliser.
- No analytics, ads, accounts, cookies. **No request to any outside server**: fonts and code are in the repo, and a
  Content Security Policy in `index.html` only allows the app's own files. Because of that policy there are **no inline
  styles or scripts**: use classes, or set styles from JavaScript (`el.style.x = …`).
- Everything she does stays on her phone (`localStorage`). All keys start with `boutdelalangue:` because the owner's
  apps share one web address. Settings offer export/import to a file.
- The page « Pour aller plus loin » links to outside sites; those are plain links she chooses to open.

## How it is built

Plain HTML, CSS and JavaScript modules. No build step, no dependencies: the repo holds exactly what runs.

- `index.html`, `css/app.css`, `manifest.webmanifest`, `sw.js` (offline cache), `.nojekyll`
- `js/app.js` router; `js/etat.js` saved state; `js/moteur.js` daily selection, review scheduling, points, streak;
  `js/banque.js` builds the question bank; `js/question.js` shows one question and its correction; `js/serie.js` runs a
  set of questions; `js/calendrier.js` seasons and special days; `js/voix.js` listen button; `js/sons.js` tiny
  synthesised sounds; `js/dessins.js` every icon and drawing (hand-written SVG); `js/textes.js` the son's lines;
  `js/vues/*.js` one file per screen.
- `js/data/*.js` the content. `js/data/index.js` lists the content packs.
- `fonts/` Borel and a modified Atkinson Hyperlegible Next (zero without a slash, see `fonts/LISEZMOI.txt`). Both OFL.
- `tools/` checks, not part of the app (see below).

### Content format (`js/data`)

Strings use French typography as typed: a normal space before `? ! : ;`, guillemets `« … »` with spaces inside.
The app turns those into non-breaking spaces and curly apostrophes. `*mot*` puts a word in bold.

- Multiple choice (`conj`, `gram`, `orth`, `voc`, `fam`, `usage`, `oral`, `expr`, `fete`):
  `{ q, o: [correct, wrong, wrong], e }`. **The first option is the correct one**; the app shuffles. `q` may hold one
  blank `___`. Optional: `dit` (a line someone says, shown in a bubble with a listen button), `qui` (who says it), `t`
  (a tip), `ex` (an example sentence), `ok` (a sentence to show and read aloud after the answer).
- `sit`: a scene `{ titre, intro, qs: [question, question] }`, exactly two multiple-choice questions.
- `tac`: `{ dit, qui, o: [best reply, …], e }`.
- `faute`: `{ p: sentence, x: the wrong word exactly as written (or null), c: correction ('' = delete), e }`. The wrong
  word must be one whole word that appears once.
- `ordre`: `{ w: [pieces in order], fin, q, e }`. Only one valid order.
- `mot`: `{ d: definition, m: word, ex }`.

Question ids are derived from the text, so editing a question's text makes it "new" for her. Fix typos freely; do not
rewrite old questions for style.

### Writing rules for new content

- Everyday situations and spoken French only. Nothing literary, no rare words, no passé simple.
- A question is good when an educated native speaker would pause. It is bad when two answers can both be defended:
  if usage accepts both forms, do not ask it (or ask it as "which is the careful form" and say so in the explanation).
- Wrong options must be plausible and clearly wrong. Never a second correct answer.
- Explanations: one to three short sentences, the rule plus a concrete example, kind, never scolding.
- Check every rule you are not fully sure of against a reference (Académie française, Le Robert, Bescherelle) before
  adding it. Do not include folk etymologies.
- No real people's names. Sample people are « ma voisine », « madame Martin », and so on. No assumptions about her
  family, religion, country or daily life.

## Checks before every publish

```
node tools/verifier.mjs          # content format, typography, duplicates, offline file list
node tools/simulation.mjs 150    # five months of daily challenges through the real engine
python3 tools/essai.py /tmp/shots # headless Chrome at phone sizes, light and dark, offline; then LOOK at the screenshots
```

`essai.py` needs Playwright for Python and Google Chrome. For manual testing, `?jour=2027-03-01` in the address
forces the date (birthday, seasons, Mother's Day).

## Publishing

Push straight to `gh-pages` (the owner gave standing permission; there are no pull requests). Then check:
`gh api repos/hichamAbd/BoutDeLaLangue --jq .has_pages` is true, and the latest "pages build and deployment" run in
`gh api repos/hichamAbd/BoutDeLaLangue/actions/runs` succeeded.

**Every change to the app or its content must bump `VERSION` in `sw.js`**, and every new file must be added to
`FICHIERS` there, or installed phones keep the old version. `tools/verifier.mjs` fails if a file is missing.

## Monthly refresh (scheduled task)

Goal: she should keep meeting questions she has not seen. Each run:

1. Read this file. Run the three checks to make sure the starting point is sound.
2. Create `js/data/paquets/AAAA-MM.js` exporting one object, for example
   `export default { sit: [...], conj: [...], gram: [...], expr: [...], orth: [...], faute: [...], ordre: [...], voc: [...], fam: [...], usage: [...], oral: [...], tac: [...], mot: [...] };`
   Aim for about 120 new items: at least 15 scenes, 15 `conj`, 15 `gram`, 15 `expr`, 5 of each other category,
   10 `tac`, 15 `mot`. More is welcome. Favour the season and the events of the coming month.
3. Import it in `js/data/index.js` and append it to `PAQUETS`.
4. Add the file to `FICHIERS` in `sw.js` and bump `VERSION`. Bump the app version in `js/vues/plus.js` (second digit).
5. Run the three checks. Fix until they pass, and look at a few screenshots.
6. Commit, push to `gh-pages`, confirm the pages build succeeded.
7. Tell the owner in a few plain lines: how many items were added, two or three examples, and anything that needs
   his eye. If something could not be done, say exactly what.

Optional extras when there is time: new greeting lines in `js/textes.js`, a new collectible image in `js/dessins.js`
(same line style, `viewBox 0 0 64 64`, with its idiom), new phrases in `js/data/antiseche.js`.

## Shelf

The app is listed on the owner's Shelf (repo `hichamAbd/Shelf`). If its name, purpose or address changes, update the
entry there too, following that repo's own `CLAUDE.md`.

## Do not

- Add tracking, accounts, outside requests, a microphone feature, or anything paid.
- Add timers outside « Du tac au tac », grades, or anything that could feel like an exam.
- Put her name, her birthday or the owner's name anywhere in the repo.
- Publish without running the checks.
