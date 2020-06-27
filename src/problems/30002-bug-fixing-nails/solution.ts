const Solution = (A: number[], K: number): number => {
  const n = A.length;
  let best = 0;
  let count = 1;
  for (let i = 0; i < n - K - 1; i++) {
    if (A[i] == A[i + 1])
      count = count + 1;
    else
      count = 0;
    if (count > best)
      best = count;
  }
  const result = best + 1 + K;

  return result;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
