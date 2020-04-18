/**
 * Naive solution = O(n^2)
 */

/**
 * O(n) solution
 */
const maxProfit = (prices: number[]): number => {
  let profit = 0;
  let buyAt = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyAt) {
      buyAt = prices[i];
    } else {
      profit = Math.max(profit, prices[i] - buyAt);
    }
  }
  return profit;
};

export default {
  "default": maxProfit,
  maxProfit,
};
