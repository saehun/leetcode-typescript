/**
 * Naive solution = O(n^2)
 */

/**
 * O(n) solution
 */
const maxProfit = (prices: number[]): number => {
  let max = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    if (price < buy) {
      buy = price;
    } else {
      max = Math.max(max, price - buy);
    }
  }
  return max;
};

export default {
  "default": maxProfit,
  validator: (x: any) => x,
};
