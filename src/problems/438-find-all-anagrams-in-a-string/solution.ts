
const Solution = (s: string, p: string): number[] => {
  const key = p.split("").reduce((acc: any, n) => acc[n] ? (acc[n]++, acc) : (acc[n] = 1, acc), {});
  const table = Array(s.length).fill(undefined).map(() => ({ ...key }));
  const result: number[] = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = Math.max(i - p.length + 1, 0); j <= i; j++) {
      if (s[i] in table[j]) {
        const occur = table[j][s[i]] - 1;
        if (occur === 0) {
          delete table[j][s[i]];
        } else {
          table[j][s[i]] = occur - 1;
        }
      }
    }
  }

  table.forEach((occurs, i) => {
    if (Object.keys(occurs).length === 0) {
      result.push(i);
    }
  });

  return result;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
