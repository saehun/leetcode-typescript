const Solution = (nums: number[]): number => {

  let sortMin = undefined;
  let sortMax = undefined;
  let startAt = -1;
  let endAt = -1;
  for (let i = 1; i < nums.length; i++) {
    // Find start point, initialize sortMin and Max;
    if (startAt === -1) {
      if (nums[i] < nums[i - 1]) {
        startAt = i - 1;
        endAt = i;
        sortMax = nums[i - 1];
        sortMin = nums[i];
      }
    } else {
      if (nums[i] < sortMax) {
        endAt = i;
      } else {
        sortMax = nums[i];
      }
      if (nums[i] < sortMin) {
        sortMin = nums[i];
      }
    }
  }
  /* console.log(`A::startAt=${startAt}, endAt=${endAt}, sortMax=${sortMax} sortMin=${sortMin}`); */

  for (let i = 0; i < startAt + 1; i++) {
    if (sortMin < nums[i]) {
      startAt = i;
      if (nums[i] === nums[i + 1]) {
        continue;
      } else {
        break;
      }
    }
  }

  /* console.log(`B::startAt=${startAt}, endAt=${endAt}, sortMax=${sortMax} sortMin=${sortMin}`); */
  if (startAt === -1) return 0;
  return endAt - startAt + 1;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
