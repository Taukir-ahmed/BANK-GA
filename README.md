# CA Drill — Current Affairs question bank

Fact-recall drilling for IBPS PO Mains GA.

## Run it

```bash
npm install
npm run dev
```

## Adding a month

**Drop `sheetN.js` into `src/data/`. That's it.** Sheets are auto-discovered and
grouped by their `month` field — no index file to edit, no imports to add. If
the dev server is running it hot-reloads; your saved scores are untouched.

Sheet file shape:

```js
export default {
  id: 5,                    // must be unique; controls ordering
  month: "May 2026",        // groups the sheet on the home screen
  title: "Sheet 5",
  subtitle: "Banking, schemes, appointments",
  questions: [
    {
      type: "mcq",          // or "statements"
      q: "Question text",   // \n works for multi-line statement questions
      options: ["A", "B", "C", "D"],
      answer: 2,            // zero-indexed
      note: "Linked facts to fix in memory.",
      mustKnow: true,       // optional: shows ★ and enters starred-only drills
    },
  ],
};
```

For two-statement questions keep options as
`["Only I", "Only II", "Both I and II", "Neither I nor II"]` — the `S` constant
at the top of each sheet file does this.

## How it works

### The repetition

High-value facts appear in more than one sheet, never in the same wording. The
PFBR at Kalpakkam, for example:

- two statements, one of which wrongly says *third* stage
- which fuel does it use
- reversed: Thorium-232 produces which fissile material
- two statements on BHAVINI and how breeder reactors work

If you memorised the sentence rather than the fact, one of those catches you.

### Question formats

- **Single correct** — including reversed framings (given the work, name the
  person; given the person, name the work) and "which is NOT" questions.
- **Two statements** — Only I / Only II / Both / Neither. These punish
  half-knowledge, which is where you lose marks on topics you actually know.

Pure number trivia is left out. Figures appear only where the number *is* the
fact worth knowing.

### Two modes

- **Practice** — answer revealed immediately, with a "Remember with it" note
  carrying the surrounding facts: HQs, heads, full forms, related schemes.
- **Test** — no feedback until submit.

Before either mode, switch on **Only ★ must-know questions** to run just the
curated high-priority subset. Stars are shown in the question header, answer
sheet and review screen. The home page also has a cross-month must-know drill.

### Mixed drill

Pulls 50 questions at random across every month loaded, reshuffled each run,
with no month labels. Take this once several months are in — the exam doesn't
tell you which month a fact came from either.

The starred mixed drill includes every starred question, without the normal
mixed drill's 50-question limit.

### Monthly static

Each May–August section contains a Monthly static sheet. Every item must have
a `news` object with a month, concrete headline, relevance explanation, and
either an exact source-sheet/question reference or a dated official news URL.
Relevant heads, capitals, full forms, organisational facts and related systems
can produce several questions from one story. A broad topic match alone is
insufficient. No invented acronym expansions or money/percentage recall.

News links and context appear after an answer in Practice and after submission
in Test. Monthly static sets use versioned IDs so attempts on the previous
question lists are not displayed as scores on the replacements. Old static
sets are recoverable under `docs/static-archive/` and are not loaded by the app.

Scores save to localStorage. The review screen defaults to **Got wrong**.

## Keyboard

`1`–`4` mark an answer · `←` `→` move between questions.
