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
      if (i === coin) {
        break;
      }
    }
  }

  console.log(arr);
  return arr[amount];
};

const Solution2 = (coins: number[], amount: number): number => {
  coins.sort((a, b) => b - a);
  let min = amount + 1;
  function dfs(index: number, target: number, count: number) {
    console.log(`dfs(${index}, ${target}, ${count})`);
    if (index === coins.length) return;
    const curr = coins[index];
    if (target % curr === 0) {
      const res = count + target / curr;
      return min = Math.min(min, res);
    }
    for (let i = Math.floor(target / curr); i >= 0 && count + i < min; i--) {
      dfs(index + 1, target - i * curr, count + i);
    }
  }
  dfs(0, amount, 0);
  return min <= amount ? min : -1;
};

const Solution3 = (coins: number[], amount: number): number => {
  const arr = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  arr[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        arr[i] = Math.min(arr[i - coin] + 1, arr[i]);
      }
    }
  }

  return arr[amount] > amount ? -1 : arr[amount];
};

export default {
  "default": Solution3,
  validator: (x: any) => x,
};
