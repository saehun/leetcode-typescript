const Solution = (nums: number[]): number[][] => {
  const result: any[] = [];
  nums.sort((a, b) => (a - b));

  for (let i = 0; i < nums.length; i++) {
    let low = i + 1;
    let high = nums.length - 1;
    while (low < high) {
      const sum = nums[i] + nums[low] + nums[high];
      if (sum === 0) {
        result.push([nums[i], nums[low], nums[high]]);
        while (nums[low] === nums[low + 1]) low++;
        while (nums[high] === nums[high - 1]) high--;
        low++;
        high--;
      } else if (sum > 0) {
        high--;
      } else {
        low++;
      }
    }
    while (nums[i] === nums[i + 1]) i++;
  }


  return result;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
