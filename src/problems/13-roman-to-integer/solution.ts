const romanToInt = (s: string): number => {
  const composite: Record<string, number> = {
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900,
  };
  const single: Record<string, number> = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  const recur = (str: string, sum: number): number => {
    if (str === "") return sum;

    const two = str.slice(0, 2);
    const one = str[0];
    if (two in composite) {
      return recur(str.slice(2), sum + composite[two]);
    } else {
      return recur(str.slice(1), sum + single[one]);
    }
  };

  return recur(s, 0);
};
export default {
  "default": romanToInt,
  validator: (x: any) => x,
};
