const Solution = (nums: number[]): number => {
  let max = Number.MIN_SAFE_INTEGER;
  let buffer = 0;
  for (const num of nums) {
    if (num < 0) {
      if (buffer === 0) {
        max = Math.max(max, num);
      } else if (num + buffer > 0) {
        buffer += num;
      } else {
        buffer = 0;
      }
    } else {
      buffer += num;
      max = Math.max(buffer, max);
    }
  }
  return max;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
