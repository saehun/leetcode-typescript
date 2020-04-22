const Solution = (nums: number[]): number[][] => {
  const cache: any = {};
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const key = nums[i] + nums[j];
      if (cache[key]) {
        cache[key].push([i, j]);
      } else {
        cache[key] = [[i, j]];
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const candidates = cache[-nums[i]];
    if (!candidates) continue;

    for (const arr of candidates) {
      if (!arr.includes(i)) {
        set.add(
          [...arr, i].map((x: number) => nums[x]).sort((a, b) => a - b).join("_")
        );
      }
    }
  }

  return Array.from(set).map((x: any) => x.split("_").map((x: any) => Number(x)));
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
