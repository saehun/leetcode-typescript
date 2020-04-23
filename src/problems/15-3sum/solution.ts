const Solution = (nums: number[]): number[][] => {
  const cache: any = {};
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

  const resultMap: any = {};
  for (let i = 0; i < nums.length; i++) {
    const candidates = cache[-nums[i]];
    if (!candidates) continue;

    for (const arr of candidates) {
      if (!arr.includes(i)) {
        const tmp = [nums[arr[0]], nums[arr[1]], nums[i]];
        tmp.sort((a, b) => a - b);
        resultMap[tmp.join(" ")] = tmp;
      }
    }
  }

  return Object.values(resultMap);
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
