const Solution = (digits: number[]): number[] => {
  return (BigInt(digits.join("")) + BigInt(1)).toString().split("").map(x => Number(x));
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
