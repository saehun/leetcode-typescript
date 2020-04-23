const Solution = (n: number): string[] => {
  if (n === 0) return [];
  if (n === 1) return ["()"];
  const result: any = [[["(", n - 1, n]], [["()", n - 1, n - 1], ["((", n - 2, n]]];
  for (let i = 2; i < n * 2; i++) {
    const before = result[i - 1];
    const next = [];
    for (const item of before) {
      if (item[1] === 0) {
        next.push([item[0] + ")", 0, item[2] - 1]);
      } else if (item[1] === item[2]) {
        next.push([item[0] + "(", item[1] - 1, item[2]]);
      } else {
        next.push([item[0] + "(", item[1] - 1, item[2]]);
        next.push([item[0] + ")", item[1], item[2] - 1]);
      }
    }
    result[i] = next;
  }
  return result[n * 2 - 1].map((x: any) => x[0]);
};

export default {
  "default": Solution,
  validator: (x: any) => x.sort().join("-"),
};
