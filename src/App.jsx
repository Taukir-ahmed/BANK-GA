import { useState, useEffect, useMemo } from "react";
import { sheets, groupByMonth, buildMix, buildStarredMix } from "./data";

const LETTERS = ["A", "B", "C", "D"];
const STORE_KEY = "ca-drill-results";
const EXAM = new Date("2026-10-04T00:00:00");

function loadResults() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveResult(key, payload) {
  const all = loadResults();
  all[key] = payload;
  localStorage.setItem(STORE_KEY, JSON.stringify(all));
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

function daysLeft() {
  return Math.max(0, Math.ceil((EXAM - new Date()) / 86400000));
}

function sheetEyebrow(sheet) {
  if (sheet.isMonthlyStatic) return `Monthly static · ${sheet.month}`;
  if (sheet.id === "mix") return "Cross-month";
  if (sheet.id === "starred") return "Every month";
  const id = sheet.baseId ?? sheet.id;
  return `Sheet ${String(id).padStart(2, "0")} · ${sheet.month}`;
}

function onlyStarred(sheet) {
  if (sheet.starredOnly) return sheet;
  const questions = sheet.questions.filter((q) => q.mustKnow);
  return {
    ...sheet,
    id: `starred-${sheet.id}`,
    baseId: sheet.baseId ?? sheet.id,
    subtitle: `${sheet.subtitle} · ★ only`,
    starredOnly: true,
    questions,
  };
}

export default function App() {
  const [view, setView] = useState({ name: "home" });
  const [results, setResults] = useState(loadResults);

  return (
    <div className="shell">
      <header className="masthead">
        <h1 className="masthead__title">Current Affairs Drill</h1>
        <div className="masthead__meta">
          IBPS PO Mains · {daysLeft()} days left
        </div>
      </header>

      {view.name === "home" && (
        <Home
          results={results}
          onPick={(sheet) => setView({ name: "mode", sheet })}
          onReview={(sheet) => setView({ name: "review", sheet })}
        />
      )}

      {view.name === "mode" && (
        <ModePicker
          sheet={view.sheet}
          onStart={(mode, starredOnly) => {
            const activeSheet = starredOnly
              ? onlyStarred(view.sheet)
              : view.sheet;
            setView({
              name: "drill",
              sheet: activeSheet,
              sourceSheet: view.sheet,
              mode,
            });
          }}
          onBack={() => setView({ name: "home" })}
        />
      )}

      {view.name === "drill" && (
        <Drill
          sheet={view.sheet}
          mode={view.mode}
          onFinish={(payload) => {
            saveResult(view.sheet.id, payload);
            setResults(loadResults());
            setView({
              name: "review",
              sheet: view.sheet,
              sourceSheet: view.sourceSheet,
            });
          }}
          onQuit={() => setView({ name: "home" })}
        />
      )}

      {view.name === "review" && (
        <Review
          sheet={view.sheet}
          result={results[view.sheet.id]}
          onBack={() => setView({ name: "home" })}
          onRetake={() =>
            setView({
              name: "mode",
              sheet: view.sourceSheet ?? view.sheet,
            })
          }
        />
      )}
    </div>
  );
}

/* ---------------- home ---------------- */

function Home({ results, onPick, onReview }) {
  const months = groupByMonth(sheets);
  const totalQ = sheets.reduce((n, s) => n + s.questions.length, 0);
  const starredQ = sheets.reduce(
    (n, s) => n + s.questions.filter((q) => q.mustKnow).length,
    0
  );
  const mixResult = results["mix"];

  return (
    <>
      <p className="lede">
        {totalQ} questions across {sheets.length} sheets. The same high-value
        facts return in <em>different wording</em> — forward, reversed, and as
        two-statement questions — so you learn the fact, not the sentence.
      </p>

      <div className="mix-card">
        <div>
          <div className="sheet-card__no">Cross-month</div>
          <h2 className="sheet-card__name">Mixed drill</h2>
          <p className="sheet-card__desc">
            50 questions pulled at random from every month, reshuffled each
            time. No month labels — closest thing to the real paper.
            {mixResult && (
              <>
                {" "}
                Last run: <b>{mixResult.score}</b>/{mixResult.total}.
              </>
            )}
          </p>
        </div>
        <div className="mix-card__actions">
          <button
            className="btn"
            onClick={() => onPick(buildMix(sheets, 50))}
          >
            Start mixed drill
          </button>
          <button
            className="btn btn--star"
            onClick={() => onPick(buildStarredMix(sheets))}
          >
            ★ Must-know drill ({starredQ})
          </button>
        </div>
      </div>

      {months.map(([month, list]) => {
        const done = list.filter((s) => results[s.id]).length;
        const scored = list.filter((s) => results[s.id]);
        const avg = scored.length
          ? Math.round(
              (scored.reduce(
                (n, s) => n + results[s.id].score / results[s.id].total,
                0
              ) /
                scored.length) *
                100
            )
          : null;

        return (
          <section className="month" key={month}>
            <div className="month__band">
              <h2 className="month__name">{month}</h2>
              <span className="month__stat">
                {done}/{list.length} sheets done
                {avg !== null && ` · ${avg}% average`}
              </span>
            </div>

            <div className="sheet-grid">
              {list.map((s) => {
                const r = results[s.id];
                const starCount = s.questions.filter(
                  (q) => q.mustKnow
                ).length;
                return (
                  <div className="sheet-card" key={s.id}>
                    <div className="sheet-card__no">
                      {s.isMonthlyStatic
                        ? "Monthly static"
                        : `Sheet ${String(s.id).padStart(2, "0")}`}
                    </div>
                    <h3 className="sheet-card__name">{s.subtitle}</h3>
                    <p className="sheet-card__desc">
                      {s.questions.length} questions ·{" "}
                      {
                        s.questions.filter((q) => q.type === "statements")
                          .length
                      }{" "}
                      two-statement · <span className="star-count">★ {starCount} must-know</span>
                    </p>
                    {s.isMonthlyStatic && (
                      <p className="sheet-card__desc">
                        Each question links to this month's news. See the connection after answering.
                      </p>
                    )}
                    <div className="btn-row">
                      <button className="btn" onClick={() => onPick(s)}>
                        {r ? "Take again" : "Start"}
                      </button>
                      {r && (
                        <button
                          className="btn btn--ghost"
                          onClick={() => onReview(s)}
                        >
                          Review
                        </button>
                      )}
                    </div>
                    <div className="sheet-card__stat">
                      {r ? (
                        <>
                          Last attempt: <b>{r.score}</b>/{r.total} ·{" "}
                          {fmtTime(r.time)}
                        </>
                      ) : (
                        "Not attempted yet"
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}

/* ---------------- mode picker ---------------- */

function ModePicker({ sheet, onStart, onBack }) {
  const starCount = sheet.questions.filter((q) => q.mustKnow).length;
  const [starredOnly, setStarredOnly] = useState(Boolean(sheet.starredOnly));
  const runCount = starredOnly ? starCount : sheet.questions.length;

  return (
    <div className="modal">
      <div className="sheet-card__no">{sheetEyebrow(sheet)}</div>
      <h2 className="sheet-card__name" style={{ marginBottom: 18 }}>
        {sheet.subtitle}
      </h2>

      <label
        className={`star-filter${starredOnly ? " star-filter--on" : ""}`}
      >
        <input
          type="checkbox"
          checked={starredOnly}
          disabled={sheet.starredOnly || starCount === 0}
          onChange={(e) => setStarredOnly(e.target.checked)}
        />
        <span>
          <b>Only ★ must-know questions</b>
          <small>
            {starCount
              ? `${runCount} questions in this run`
              : "No starred questions in this set"}
          </small>
        </span>
        <strong>{starCount}</strong>
      </label>

      <button
        className="mode-opt"
        onClick={() => onStart("practice", starredOnly)}
      >
        <b>Practice</b>
        <span>
          Answer is revealed immediately with the linked facts. Use this on a
          first pass.
        </span>
      </button>

      <button
        className="mode-opt"
        onClick={() => onStart("test", starredOnly)}
      >
        <b>Test</b>
        <span>
          No feedback until you submit. Closer to the real thing — time
          yourself.
        </span>
      </button>

      <button className="btn btn--ghost btn--small" onClick={onBack}>
        Back
      </button>
    </div>
  );
}

/* ---------------- drill ---------------- */

function Drill({ sheet, mode, onFinish, onQuit }) {
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState({});
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (["1", "2", "3", "4"].includes(e.key)) {
        setPicks((p) =>
          p[i] !== undefined ? p : { ...p, [i]: Number(e.key) - 1 }
        );
      } else if (e.key === "ArrowRight") {
        setI((v) => Math.min(v + 1, sheet.questions.length - 1));
      } else if (e.key === "ArrowLeft") {
        setI((v) => Math.max(v - 1, 0));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, sheet.questions.length]);

  const q = sheet.questions[i];
  const picked = picks[i];
  const answered = picked !== undefined;
  const showAnswer = mode === "practice" && answered;
  const isLast = i === sheet.questions.length - 1;

  function pick(idx) {
    if (picks[i] !== undefined) return;
    setPicks((p) => ({ ...p, [i]: idx }));
  }

  function submit() {
    const score = sheet.questions.reduce(
      (n, qq, idx) => n + (picks[idx] === qq.answer ? 1 : 0),
      0
    );
    onFinish({
      score,
      total: sheet.questions.length,
      time: seconds,
      picks,
      mode,
      at: Date.now(),
    });
  }

  return (
    <div className="drill">
      <div className="qcard">
        <div className="qcard__head">
          <span>
            Q{String(i + 1).padStart(2, "0")} / {sheet.questions.length}
          </span>
          <div className="qcard__tags">
            {q.mustKnow && <span className="must-know">★ Must know</span>}
            <span className="tag">
              {q.type === "statements" ? "Two statements" : "Single correct"}
            </span>
          </div>
        </div>

        <div className="qcard__body">
          <p className="qtext">{q.q}</p>

          <div className="opts">
            {q.options.map((opt, idx) => {
              let cls = "opt";
              if (showAnswer) {
                if (idx === q.answer) cls += " opt--right";
                else if (idx === picked) cls += " opt--wrong";
              } else if (idx === picked) {
                cls += " opt--picked";
              }
              return (
                <button
                  key={idx}
                  className={cls}
                  onClick={() => pick(idx)}
                  disabled={answered}
                >
                  <span className="bubble">{LETTERS[idx]}</span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {showAnswer && (
            <div className="note">
              <span className="note__label">
                Remember with it{q.from ? ` · ${q.from}` : ""}
              </span>
              {q.note}
              <NewsContext question={q} />
            </div>
          )}
        </div>

        <div className="qcard__foot">
          <div>
            {showAnswer && (
              <span
                className={
                  picked === q.answer
                    ? "verdict verdict--right"
                    : "verdict verdict--wrong"
                }
              >
                {picked === q.answer ? "Correct" : "Wrong"}
              </span>
            )}
            {mode === "test" && answered && (
              <span className="verdict">Marked</span>
            )}
          </div>
          <div className="btn-row">
            <button
              className="btn btn--ghost btn--small"
              onClick={() => setI((v) => Math.max(v - 1, 0))}
              disabled={i === 0}
            >
              Previous
            </button>
            {isLast ? (
              <button className="btn btn--small" onClick={submit}>
                Submit sheet
              </button>
            ) : (
              <button
                className="btn btn--small"
                onClick={() => setI((v) => v + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      <aside className="rail">
        <div className="rail__label">Answer sheet</div>
        <div className="rail__grid">
          {sheet.questions.map((qq, idx) => {
            let cls = "pip";
            const p = picks[idx];
            if (p !== undefined) {
              if (mode === "practice") {
                cls += p === qq.answer ? " pip--right" : " pip--wrong";
              } else {
                cls += " pip--done";
              }
            }
            if (idx === i) cls += " pip--here";
            if (qq.mustKnow) cls += " pip--star";
            return (
              <button
                key={idx}
                className={cls}
                onClick={() => setI(idx)}
                aria-label={`Go to question ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
        <div className="rail__foot">
          <span>Time {fmtTime(seconds)}</span>
          <span>
            Done {Object.keys(picks).length}/{sheet.questions.length}
          </span>
          <button
            className="btn btn--ghost btn--small"
            style={{ marginTop: 6 }}
            onClick={submit}
          >
            Submit now
          </button>
          <button
            className="btn btn--ghost btn--small"
            onClick={onQuit}
            style={{ borderColor: "transparent" }}
          >
            Leave sheet
          </button>
        </div>
      </aside>
    </div>
  );
}

/* ---------------- review ---------------- */

function NewsContext({ question }) {
  const news = question.news;
  if (!news) return null;
  return (
    <div className="news-context">
      <span className="note__label">Why this question · {news.month}</span>
      <p>{news.headline}</p>
      <p>{news.reason}</p>
      {news.sheetId && (
        <small>
          Linked question: Sheet {String(news.sheetId).padStart(2, "0")},
          Q{String(news.questionNumber).padStart(2, "0")}
        </small>
      )}
      {(news.url || question.sources?.length > 0) && (
        <div className="news-context__sources">
          {news.url && <a href={news.url} target="_blank" rel="noreferrer">News source</a>}
          {question.sources?.map((source) => (
            <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
          ))}
        </div>
      )}
    </div>
  );
}

function Review({ sheet, result, onBack, onRetake }) {
  const [filter, setFilter] = useState("wrong");

  const rows = useMemo(() => {
    if (!result) return [];
    return sheet.questions
      .map((q, idx) => ({ q, idx, picked: result.picks?.[idx] }))
      .filter((r) => {
        if (filter === "all") return true;
        if (filter === "wrong") return r.picked !== r.q.answer;
        return r.picked === r.q.answer;
      });
  }, [sheet, result, filter]);

  if (!result) {
    return (
      <div className="modal">
        <p>No attempt saved for this sheet yet.</p>
        <button className="btn" onClick={onBack}>
          Back
        </button>
      </div>
    );
  }

  const pct = Math.round((result.score / result.total) * 100);

  return (
    <>
      <div className="score">
        <div className="sheet-card__no">
          {sheetEyebrow(sheet)} · {sheet.subtitle}
        </div>
        <div className="score__figure">
          {result.score}
          <span>/{result.total}</span>
        </div>
        <div className="score__line">
          {pct}% · {fmtTime(result.time)} · {result.mode} mode
        </div>
        <div className="btn-row" style={{ marginTop: 20 }}>
          <button className="btn" onClick={onRetake}>
            Take again
          </button>
          <button className="btn btn--ghost" onClick={onBack}>
            All sheets
          </button>
        </div>
      </div>

      <div className="filter-row">
        {[
          ["wrong", "Got wrong"],
          ["right", "Got right"],
          ["all", "Everything"],
        ].map(([k, label]) => (
          <button
            key={k}
            className={filter === k ? "chip chip--on" : "chip"}
            onClick={() => setFilter(k)}
          >
            {label}
          </button>
        ))}
      </div>

      {rows.length === 0 && (
        <p className="lede" style={{ fontSize: 17 }}>
          Nothing here. Clean sheet on this filter.
        </p>
      )}

      {rows.map(({ q, idx, picked }) => {
        const right = picked === q.answer;
        return (
          <div
            key={idx}
            className={`review-item review-item--${right ? "right" : "wrong"}`}
          >
            <div className="sheet-card__no">
              Q{String(idx + 1).padStart(2, "0")}
              {q.from ? ` · ${q.from}` : ""}
              {q.mustKnow ? " · ★ Must know" : ""}
            </div>
            <p className="review-item__q">{q.q}</p>
            <p className="review-item__ans">
              Correct:{" "}
              <b>
                {LETTERS[q.answer]}. {q.options[q.answer]}
              </b>
              {picked !== undefined && !right && (
                <>
                  {" "}
                  · You marked {LETTERS[picked]}. {q.options[picked]}
                </>
              )}
              {picked === undefined && <> · You left this blank</>}
            </p>
            <div className="note">
              <span className="note__label">Remember with it</span>
              {q.note}
              <NewsContext question={q} />
            </div>
          </div>
        );
      })}
    </>
  );
}
