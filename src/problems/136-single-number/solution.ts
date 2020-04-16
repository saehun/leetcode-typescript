
// 1. Your algorithm should have a linear runtime complexity.
// 2. Could you implement it without using extra memory?
const singleNumber = (nums: number[]): number => {
  return nums.reduce((acc, n) => acc ^ n, 0);
};

export default {
  "default": singleNumber,
};
