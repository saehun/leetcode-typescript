const Solution = (nums: number[], target: number): number[] => {
  const cache: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]] !== undefined) {
      return [cache[nums[i]], i];
    } else {
      cache[target - nums[i]] = i;
    }
  }
};

export default {
  "default": Solution,
  validator: (arr: number[]) => arr.join(""),
};
