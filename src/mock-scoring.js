export function gradeMock(sheet, picks, time, reason = 'submitted') {
  const correct = sheet.questions.reduce((n, q, i) => n + (picks[i] === q.answer ? 1 : 0), 0);
  const attempted = sheet.questions.reduce((n, q, i) => n + (Number.isInteger(picks[i]) && picks[i] >= 0 && picks[i] < q.options.length ? 1 : 0), 0);
  const wrong = attempted - correct;
  return {score: correct, netScore: correct - wrong * sheet.negativeMark,
    correct, wrong, unattempted: sheet.questions.length - attempted,
    total: sheet.questions.length, picks, time, mode: 'mock', reason, at: Date.now()};
}

export function remainingSeconds(deadline, now = Date.now()) {
  return Math.max(0, Math.ceil((deadline - now) / 1000));
}
