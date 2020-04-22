const Solution = (nums: number[]): number[] => {
  const set = new Set<number>();
  for (let i = 0; i < nums.length; set.add(++i)) { /* do nothing */ }
  for (let i = 0; i < nums.length; set.delete(nums[i++])) { /* do nothing */ }

  return Array.from(set);
};

const Inplace = (nums: number[]): number[] => {
  for (let i = 0; i < nums.length; i++) {
    const targetIndex = Math.abs(nums[i]) - 1;
    if (nums[targetIndex] > 0) {
      nums[targetIndex] = -nums[targetIndex];
    }
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};


export default {
  "default": Solution,
  validator: (x: any) => x,
};

/**
 *
 */
