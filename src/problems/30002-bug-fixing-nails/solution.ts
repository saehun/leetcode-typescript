// https://app.codility.com/c/feedback/TJXZVR-49D/
const Solution = (A: number[], K: number): number => {
  const n = A.length;
  let best = 0;
  let count = 0;
  for (let i = 0; i < n - K - 1; i++) {
    if (A[i] == A[i + 1])
      count = count + 1;
    else
      count = 0;
    if (count > best)
      best = count;
  }
  const result = n == K ? n : (best + 1 + K);

  return result;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
