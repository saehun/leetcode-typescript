const maxProduct = (nums: number[]) => {
  let max = nums[0];
  let min = nums[0];
  let product = nums[0];

  for (let i = 1; i < nums.length; i++) {

    const nextMax = Math.max(
      max * nums[i],
      min * nums[i],
      nums[i]
    );

    const nextMin = Math.min(
      max * nums[i],
      min * nums[i],
      nums[i]
    );

    max = nextMax;
    min = nextMin;

    product = Math.max(product, max);
  }

  return product;
};

export default {
  "default": maxProduct,
  maxProduct,
};
