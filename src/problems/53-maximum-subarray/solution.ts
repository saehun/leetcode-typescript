const Solution = (nums: number[]): number => {
  let buffer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    buffer += nums[i];
    if (buffer > max) {
      max = buffer;
    }
    if (buffer < 0) {
      buffer = 0;
    }
  }
  return max;
};

export default {
  "default": Solution,
};
