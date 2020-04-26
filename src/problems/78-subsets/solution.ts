const Solution = (nums: number[]): number[][] => {
  const result: number[][] = [];

  for (let i = 0; i < (1 << nums.length); i++) {
    const subset: number[] = [];
    nums.forEach((n, j) => {
      if ((1 << j) & i) subset.push(n);
    });
    result.push(subset);
  }

  return result;
};

export default {
  "default": Solution,
  validator: (x: any) => x.length,
};
