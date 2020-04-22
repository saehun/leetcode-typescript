const Solution = (nums: number[]): void => {
  let nonZeroIndex = 0;
  const swap = (a: number, b: number) => {
    const tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
  };

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i === nonZeroIndex) {
        nonZeroIndex++;
      } else {
        for (let j = nonZeroIndex; j < nums.length; j++) {
          if (nums[j] === 0) {
            swap(i, j);
            break;
          }
        }
      }
    }
  }

};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
