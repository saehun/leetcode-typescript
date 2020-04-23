const Solution = (n: number): string[] => {
  if (n === 0) return [];
  const result: string[][] = [["()"]];
  for (let i = 1; i < n; i++) {
    const set = new Set<string>();
    for (const item of result[i - 1]) {
      set.add("()" + item);
      set.add(item + "()");
      set.add(`(${item})`);
    }
    result[i] = Array.from(set);
  }
  console.log(result[n - 1]);
  return result[n - 1];
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
