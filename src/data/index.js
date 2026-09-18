/**
 * Sheets are auto-discovered. To add a month, just drop sheetN.js into this
 * folder — nothing here needs editing. Each sheet file must default-export
 * an object with { id, month, title, subtitle, questions }.
 */

import { isMustKnow } from "./mustKnow";

const modules = import.meta.glob("./sheet*.js", { eager: true });

export const sheets = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .map((sheet) => ({
    ...sheet,
    questions: sheet.questions.map((question, index) => ({
      ...question,
      mustKnow: question.mustKnow || isMustKnow(sheet.id, index),
    })),
  }))
  .sort((a, b) => (a.order ?? a.id) - (b.order ?? b.id));

/** Groups sheets by month, preserving the order sheets were numbered in. */
export function groupByMonth(list) {
  const map = new Map();
  for (const s of list) {
    const key = s.month || "Unsorted";
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return [...map.entries()];
}

/** Builds a throwaway sheet of random questions drawn across every month. */
export function buildMix(list, count = 50) {
  const pool = [];
  for (const s of list) {
    for (const q of s.questions) pool.push({ ...q, from: s.month });
  }
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return {
    id: "mix",
    month: "Mixed",
    title: "Mixed drill",
    subtitle: "Mixed drill — every month, no labels",
    questions: pool.slice(0, Math.min(count, pool.length)),
  };
}

/** Builds a shuffled drill containing only questions marked as must-know. */
export function buildStarredMix(list, count = Infinity) {
  const pool = [];
  for (const s of list) {
    for (const q of s.questions) {
      if (q.mustKnow) pool.push({ ...q, from: s.month });
    }
  }
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return {
    id: "starred",
    month: "Mixed",
    title: "Must-know drill",
    subtitle: "★ Must-know questions · every month",
    starredOnly: true,
    questions: pool.slice(0, Math.min(count, pool.length)),
  };
}
