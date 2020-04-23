const table: any = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "y", "x", "z"],
};

const combination = (a: string[], b: string[]) => {
  if (!a.length) return b;
  if (!b.length) return a;
  const result = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      result.push(a[i] + b[j]);
    }
  }
  return result;
};

const Solution = (digits: string): string[] => {
  return digits.split("").reduce((acc, n) => {
    return combination(acc, table[n]);
  }, []);
};

export default {
  "default": Solution,
  validator: (x: any) => x.sort().join(""),
};
