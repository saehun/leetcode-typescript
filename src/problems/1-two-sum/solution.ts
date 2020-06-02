const Solution = (nums: number[], target: number): number[] => {
  const table: any = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in table) {
      return [table[nums[i]], i];
    } else {
      table[target - nums[i]] = i;
    }
  }
  return [];
};

export default {
  "default": Solution,
  validator: (arr: number[]) => arr.join(","),
};
