const Solution = (nums: number[]): number => {
  const arr: number[] = [];
  if (nums.length < 3) return Math.max(...nums);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) arr[0] = nums[0];
    else if (i === 1) arr[1] = nums[1];
    else if (i === 2) arr[2] = arr[0] + nums[2];
    else arr[i] = Math.max(arr[i - 2], arr[i - 3]) + nums[i];
  }

  return Math.max(...arr.slice(arr.length - 3));
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
