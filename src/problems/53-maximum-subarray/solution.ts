const Solution = (nums: number[]): number => {
  let max = Number.MIN_SAFE_INTEGER;
  let buffer = 0;
  for (const num of nums) {
    buffer += num;
    if (buffer > max) {
      max = buffer;
    }
    if (buffer <= 0) {
      buffer = 0;
    }
  }
  return max;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
