import { useEffect, useRef, useState } from 'react';
import { gradeMock, remainingSeconds } from './mock-scoring';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const clock = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

export default function MockExam({ sheet, onFinish, onBack }) {
  const [started, setStarted] = useState(false);
  if (!started) return (
    <section className="modal mock-intro">
      <div className="sheet-card__no">Bank mains · General / Financial Awareness</div>
      <h2>{sheet.subtitle}</h2>
      <p>50 questions · 35 minutes · 50 marks</p>
      <p>Mixed current affairs from your May–September 2026 PDFs, for SBI Clerk, IBPS Clerk and RRB PO mains preparation.</p>
      <ul>
        <li>Five options per question. Select one answer.</li>
        <li>+1 for a correct answer, −0.25 for a wrong answer, 0 for a blank.</li>
        <li>You can change answers, clear responses, skip, and mark for review.</li>
        <li>Answered questions marked for review are still scored.</li>
        <li>The test submits automatically at 00:00. Answers and explanations appear after submission.</li>
      </ul>
      <p className="mock-caption">This set uses the SBI Clerk GA section length. IBPS Clerk and RRB PO have different section lengths and timings. Questions follow your supplied PDFs; this is an original practice set, not an official paper.</p>
      <p className="mock-caption">Keyboard: 1–5 select an option; arrow keys change questions. Keep this page open during your attempt.</p>
      <div className="btn-row">
        <button className="btn" onClick={() => setStarted(true)}>Begin {sheet.subtitle}</button>
        <button className="btn btn--ghost" onClick={onBack}>Back</button>
      </div>
    </section>
  );
  return <MockRun sheet={sheet} onFinish={onFinish} onBack={onBack} />;
}

function MockRun({ sheet, onFinish, onBack }) {
  const [index, setIndex] = useState(0);
  const [picks, setPicks] = useState({});
  const [flagged, setFlagged] = useState({});
  const [visited, setVisited] = useState({0:true});
  const [remaining, setRemaining] = useState(sheet.timeLimitSeconds);
  const [dialog, setDialog] = useState(null);
  const [deadline] = useState(() => Date.now() + sheet.timeLimitSeconds * 1000);
  const latestPicks = useRef(picks);
  const finished = useRef(false);
  const onFinishRef = useRef(onFinish);
  useEffect(() => { onFinishRef.current = onFinish; }, [onFinish]);
  const q = sheet.questions[index];

  function updatePicks(next) {
    latestPicks.current = next;
    setPicks(next);
  }
  function finish(reason) {
    if (finished.current) return;
    finished.current = true;
    const elapsed = sheet.timeLimitSeconds - remainingSeconds(deadline);
    onFinishRef.current(gradeMock(sheet, latestPicks.current, elapsed, reason));
  }
  function go(next) {
    const n = Math.max(0, Math.min(next, sheet.questions.length - 1));
    setIndex(n);
    setVisited(v => ({...v, [n]:true}));
  }
  function choose(option) {
    if (remainingSeconds(deadline) === 0) { finish('time-expired'); return; }
    updatePicks({...latestPicks.current, [index]: option});
  }

  useEffect(() => {
    const tick = () => {
      const left = remainingSeconds(deadline);
      setRemaining(left);
      if (left === 0 && !finished.current) {
        finished.current = true;
        onFinishRef.current(gradeMock(sheet, latestPicks.current, sheet.timeLimitSeconds, 'time-expired'));
      }
    };
    tick();
    const timer = setInterval(tick, 250);
    const warn = (event) => { if (!finished.current) { event.preventDefault(); event.returnValue = ''; } };
    window.addEventListener('beforeunload', warn);
    return () => { clearInterval(timer); window.removeEventListener('beforeunload', warn); };
  }, [deadline, sheet]);

  useEffect(() => {
    const key = (event) => {
      if (dialog || event.ctrlKey || event.metaKey || event.altKey) return;
      if (/^[1-5]$/.test(event.key)) {
        event.preventDefault();
        if (remainingSeconds(deadline) > 0) {
          const next = {...latestPicks.current, [index]:Number(event.key)-1};
          latestPicks.current = next;
          setPicks(next);
        }
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        const next = Math.max(0, Math.min(index + (event.key === 'ArrowRight' ? 1 : -1), sheet.questions.length-1));
        setIndex(next);
        setVisited(v => ({...v,[next]:true}));
      }
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [index, dialog, deadline, sheet.questions.length]);

  const answered = Object.keys(picks).length;
  const marked = Object.values(flagged).filter(Boolean).length;
  return (
    <>
      <div className="mock-bar">
        <div><b>{sheet.subtitle}</b><span>General / Financial Awareness</span></div>
        <strong role="timer" className={remaining <= 60 ? 'mock-time mock-time--low' : 'mock-time'}>Time left {clock(remaining)}</strong>
      </div>
      <div className="drill">
        <div className="qcard">
          <div className="qcard__head"><span>Question {index + 1} of {sheet.questions.length}</span><span>+1 / −0.25</span></div>
          <div className="qcard__body">
            <p className="qtext">{q.q}</p>
            <div className="opts" role="group" aria-label={`Options for question ${index+1}`}>
              {q.options.map((option, i) => <button key={i} className={`opt${picks[index] === i ? ' opt--picked' : ''}`} aria-pressed={picks[index] === i} onClick={() => choose(i)}><span className="bubble">{LETTERS[i]}</span><span>{option}</span></button>)}
            </div>
          </div>
          <div className="qcard__foot mock-controls">
            <div className="btn-row">
              <button className="btn btn--ghost btn--small" disabled={picks[index] === undefined} onClick={() => {const next={...picks}; delete next[index]; updatePicks(next);}}>Clear response</button>
              <button className="btn btn--ghost btn--small" aria-pressed={Boolean(flagged[index])} onClick={() => setFlagged(f => ({...f,[index]:!f[index]}))}>{flagged[index] ? 'Unmark review' : 'Mark for review'}</button>
            </div>
            <div className="btn-row">
              <button className="btn btn--ghost btn--small" disabled={index===0} onClick={() => go(index-1)}>Previous</button>
              {index < sheet.questions.length-1 ? <button className="btn btn--small" onClick={() => go(index+1)}>Save & next</button> : <button className="btn btn--small" onClick={() => setDialog('submit')}>Submit test</button>}
            </div>
          </div>
        </div>
        <aside className="rail">
          <div className="rail__label">Question palette</div>
          <div className="rail__grid">
            {sheet.questions.map((_, i) => <button key={i} aria-label={`Question ${i+1}, ${picks[i] !== undefined ? 'answered' : visited[i] ? 'not answered' : 'not visited'}${flagged[i] ? ', marked for review' : ''}`} aria-current={index===i ? 'step' : undefined} className={`pip${visited[i] ? ' pip--visited' : ''}${picks[i] !== undefined ? ' pip--done' : ''}${flagged[i] ? ' pip--flagged' : ''}${index===i ? ' pip--here' : ''}`} onClick={() => go(i)}>{i+1}{flagged[i] && <span className="mock-flag" aria-hidden="true">●</span>}</button>)}
          </div>
          <div className="rail__foot">
            <span>Answered {answered} · Blank {sheet.questions.length-answered}</span>
            <span>Marked for review {marked}</span>
            <span className="mock-caption">Filled = answered · Dot = review · Outline = current</span>
            <button className="btn btn--small" onClick={() => setDialog('submit')}>Submit test</button>
            <button className="btn btn--ghost btn--small" onClick={() => setDialog('leave')}>Leave test</button>
          </div>
        </aside>
      </div>
      {dialog && <div className="mock-overlay"><section className="mock-dialog" role="dialog" aria-modal="true" aria-labelledby="mock-confirm">
        <h2 id="mock-confirm">{dialog === 'submit' ? `Submit ${sheet.subtitle}?` : 'Leave this attempt?'}</h2>
        <p>{answered} answered · {sheet.questions.length-answered} blank · {marked} marked for review.</p>
        <p>{dialog === 'submit' ? 'All selected answers will be scored, including those marked for review.' : 'Your current attempt will be discarded.'}</p>
        <div className="btn-row"><button autoFocus className="btn btn--ghost" onClick={() => setDialog(null)}>Continue test</button><button className="btn" onClick={() => {if(dialog === 'submit') finish('submitted'); else {finished.current=true; onBack();}}}>{dialog === 'submit' ? 'Confirm submission' : 'Discard attempt'}</button></div>
      </section></div>}
    </>
  );
}
