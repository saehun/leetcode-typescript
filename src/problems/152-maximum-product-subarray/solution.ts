const maxProduct = (nums: number[]): number => {
  const getMaxProducts = (arr: number[]) => {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];
    const total = arr.reduce((acc, n) => acc * n, 1);
    if (total > 0) return total;
    let left = 1;
    for (let i = 0; i < arr.length, left > 0; i++) {
      left *= arr[i];
    }
    let right = 1;
    for (let i = 0; i < arr.length, right > 0; i++) {
      right *= arr[arr.length - i - 1];
    }
    return total / Math.max(left, right);
  };

  let tmp = [];
  let max = Number.MIN_SAFE_INTEGER;
  let zero = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero = true;
      max = Math.max(max, getMaxProducts(tmp));
      tmp = [];
    } else {
      tmp.push(nums[i]);
    }
  }
  if (tmp.length !== 0) max = Math.max(max, getMaxProducts(tmp));

  return zero ? Math.max(0, max) : max;
};

const DP = (nums: number[]): number => {
  let low = nums[0];
  let high = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const _low = low;
    low = Math.min(nums[i] * low, nums[i], nums[i] * high);
    high = Math.max(nums[i] * _low, nums[i], nums[i] * high);
    max = Math.max(max, high);
  }

  return max;
};

export default {
  "default": DP,
  maxProduct,
  validator: (x: any) => x,
};
