const Solution = (s: string, t: string): string => {

  const table: Record<string, number> = {};
  const match = { start: 0, end: s.length + 1 };
  let cursor = 0;
  let count = 0; // matched count

  for (const char of t) {
    table[char] = (table[char] || 0) - 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in table) {
      table[char]++;
      if (table[char] <= 0) {
        count++;
      }
    }

    while (count === t.length) {

      // when current matched index is smaller than previouso one
      if (match.end - match.start > i - cursor) {
        match.start = cursor;
        match.end = i;
      }

      const char = s[cursor++];

      if (char in table) {
        table[char]--;
        if (table[char] < 0) {
          // break here
          count--;
        }
      }
    }
  }

  // if there is no match
  if (match.end === s.length + 1) return "";

  return s.slice(match.start, match.end + 1);
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};


/**
 * { A:2, B:1, C:1 } for t is "ABCA"
 */
/* const checkTable = t.split("").reduce((acc: Record<string, number>, n) => {
 *   acc[n] = acc[n] ? acc[n] + 1 : 1;
 *   return acc;
 * }, {});

 * const checker = (char: string, index: number) => {
 *   const startIndex = index;
 *   const table = { ...checkTable }; // clone checkTable
 *   return {
 *     next: (char: string): number => {
 *       if(table[char] === undefined) return [];
 *       if(table[char] < 1) {
 *         table[char]--;
 *         const fulfilled = Object.values(table).
 *       }else {
 *
 *       }
 *     },
 *   };
 * }; */
