const Solution = (num: number): string => {
  if (num === 0) return "Zero";
  const table: Record<number, string> = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
    100: "Hundred",
    1000: "Thousand",
    1000000: "Million",
    1000000000: "Billion",
  };


  const underHundred = (num: number): string[] => {
    if (num in table) return [table[num]];
    return [
      table[Math.floor(num / 10) * 10],
      table[num % 10]
    ];
  };

  const underThousand = (num: number): string[] => {
    if (num < 100) {
      return underHundred(num);
    }
    return [
      table[Math.floor(num % 1000 / 100)],
      table[100],
      ...underHundred(num % 100),
    ];
  };

  // for thousand, chiper is 3
  // for million, chiper is 6
  const getDigits = (num: number, cipher: number) => {
    return Math.floor((num % 10 ** (cipher + 3)) / 10 ** cipher);
  };

  const result: string[] = [];

  if (num >= 10 ** 9) {
    // billion
    const digits = getDigits(num, 9);
    result.push(...underThousand(digits));
    digits && result.push(table[10 ** 9]);
  }
  if (num >= 10 ** 6) {
    // million
    const digits = getDigits(num, 6);
    result.push(...underThousand(digits));
    digits && result.push(table[10 ** 6]);
  }
  if (num >= 10 ** 3) {
    // thousand
    const digits = getDigits(num, 3);
    result.push(...underThousand(digits));
    digits && result.push(table[10 ** 3]);
  }
  // under thousand
  result.push(...underThousand(num % 10 ** 3));


  return result.filter(x => x).join(" ");
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
