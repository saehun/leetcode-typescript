const Solution = (nums: number[]): number[] => {
  const set = new Set<number>();
  for (let i = 0; i < nums.length; set.add(++i)) { }
  for (let i = 0; i < nums.length; set.delete(nums[i++])) { }

  return Array.from(set);
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
