const Solution = (nums: number[]): number[][] => {
  const result: number[][] = [];

  const traverse = (arr: number[], item: number[]) => {
    if (!arr.length) {
      result.push(item);
      return;
    }

    for (const num of arr) {
      traverse(arr.filter(x => x !== num), [...item, num]);
    }
  };

  traverse(nums, []);
  return result;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
