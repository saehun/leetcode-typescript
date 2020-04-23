/**
 *
1, 2, 3, 4,
1, 2, 4, 3
1, 3, 2, 4
1, 3, 4, 2
1, 4, 2, 3,
1, 4, 3, 2
2, 1, 3, 4
2, 1, 4, 3
2, 3, 1, 4
2, 3, 4, 1
2, 4, 1, 3
2, 4, 3, 1
...

 */

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
  console.log(result);
  return result;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
