/**
 * Sheets are auto-discovered. To add a month, just drop sheetN.js into this
 * folder — nothing here needs editing. Each sheet file must default-export
 * an object with { id, month, title, subtitle, questions }.
 */

const modules = import.meta.glob("./sheet*.js", { eager: true });

export const sheets = Object.values(modules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => a.id - b.id);

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
