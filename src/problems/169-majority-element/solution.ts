/**
 *
 */
const Solution = (nums: number[]) => {
  const map: any = {};
  const result = [undefined, 0];
  for (const num of nums) {
    const occurs = map[num] ? map[num] + 1 : 1;
    if (result[1] < occurs) {
      result[0] = num;
      result[1] = occurs;
    }
    map[num] = occurs;
  }
  return result[0];
};

const Solution2 = (nums: number[]) => {
  let max = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length && count < nums.length / 2; i++) {
    if (nums[i] === max) {
      count++;
    } else {
      count--;
      if (count === 0) {
        max = nums[i];
        count++;
      }
    }
  }

  return max;
};

export default {
  "default": Solution2,
  validator: (x: any) => x,
};
