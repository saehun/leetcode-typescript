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

export default {
  "default": maxProduct,
  maxProduct,
  validator: (x: any) => x,
};
