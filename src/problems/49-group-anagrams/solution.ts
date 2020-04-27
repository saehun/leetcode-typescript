const Solution = (strs: string[]): string[][] => {
  const result: any = {};
  for (const str of strs) {
    const table: Record<string, number> = {};
    for (let i = 0; i < str.length; i++) {
      table[str[i]] = (table[str[i]] || 0) + 1;
    }
    const key = Object.entries(table).sort().map((x: any) => x.join("")).join("");

    if (result[key]) {
      result[key].push(str);
    } else {
      result[key] = [str];
    }
  }

  return Object.values(result);
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
