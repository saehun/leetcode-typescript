
const getPoint = (nums: number[], m: number, target: number, result: number[]): number => {
  if (m === 1) {
    console.log([...result, nums.reduce((acc, n) => acc + n, 0)], `target is ${target}`);
    return Math.max(...result, nums.reduce((acc, n) => acc + n, 0));
  }

  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    const nextOverflow = acc + nums[i] > target;
    if (!nextOverflow) {
      acc += nums[i];
    } else {
      if (target - acc <= acc + nums[i] - target) {
        result.push(acc);
        return getPoint(nums.slice(i), m - 1, target, result);
      } else {
        result.push(acc + nums[i]);
        return getPoint(nums.slice(i + 1), m - 1, target, result);
      }
    }
  }
};

const Solution = (nums: number[], m: number): number => {
  return getPoint(nums, m, nums.reduce((acc, n) => acc + n) / m, []);
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
