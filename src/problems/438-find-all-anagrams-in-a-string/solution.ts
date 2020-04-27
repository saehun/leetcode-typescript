
const Solution = (s: string, p: string): number[] => {
  const result: number[] = [];
  const table: any = p.split("").reduce((acc: any, n) => {
    if (n in acc) {
      acc[n]--;
    } else {
      acc[n] = -1;
    }
    return acc;
  }, {});

  for (let i = 0; i < p.length; i++) {
    const char = s[i];
    if (char in table) {
      table[char]++;
    }
  }
  if (!Object.values(table).reduce((acc: any, n) => acc || n, false)) {
    result.push(0);
  }
  for (let i = p.length; i < s.length; i++) {
    const char = s[i];
    const rmChar = s[i - p.length];
    if (char in table) {
      table[char]++;
    }
    if (rmChar in table) {
      table[rmChar]--;
    }
    if (!Object.values(table).reduce((acc: any, n) => acc || n, false)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
