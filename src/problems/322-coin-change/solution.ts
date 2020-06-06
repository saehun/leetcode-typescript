const Solution = (coins: number[], amount: number): number => {
  const arr = Array(amount + 1).fill(-1);
  arr[0] = 0;
  for (let i = 0; i < amount + 1; i++) {
    if (arr[i] === -1) continue;
    const used = arr[i];
    for (const coin of coins) {
      if (arr[i + coin] === -1) {
        arr[i + coin] = used + 1;
      } else {
        arr[i + coin] = Math.min(used + 1, arr[i + coin]);
      }
    }
  }

  console.log(arr);
  return arr[amount];
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
