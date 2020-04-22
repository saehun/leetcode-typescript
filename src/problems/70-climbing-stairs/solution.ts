const Solution = (n: number): number => {
  const cache: number[] = [];
  for (let i = 0; i < n; i++) {
    switch (i) {
      case 0:
        cache[0] = 1;
        break;
      case 1:
        cache[1] = 2;
        break;
      default:
        cache[i] = cache[i - 1] + cache[i - 2];
        break;
    }
  }
  return cache[n - 1];
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
