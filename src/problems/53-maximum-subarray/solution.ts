const Simple = (nums: number[]): number => {
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

const DP = (nums: number[]): number => {
  const dp = [...nums];

  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] < 0) continue;
    dp[i] += dp[i - 1];
  }

  return Math.max(...dp);
};

const DP2 = (nums: number[]): number => {
  const dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp.push(dp[i - 1] < 0 ? nums[i] : nums[i] + dp[i - 1]);
  }
  console.log(dp);

  return dp.reduce((acc, n) => Math.max(acc, n), Number.MIN_SAFE_INTEGER);
};


const Short = (nums: number[]): number => nums
  .reduce(
    ([max, buffer], n, _, __, next = n + buffer) => [Math.max(next, max), Math.max(next, 0)],
    [Number.MIN_SAFE_INTEGER, 0]
  )[0];


export default {
  "default": Short,
  validator: (x: any) => x,
};
