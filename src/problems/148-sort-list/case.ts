
const case1: any = [{ val: 4, next: { val: 2, next: { val: 1, next: { val: 3, next: null } } } }];
const output1: any = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };
const format = (x: number[]) => x.reduceRight((acc: any, n) => {
  return { val: n, next: acc };
}, null);

const case2: number[] = [4, 19, 14, 5, -3, 1, 8, 5, 11, 15];
const cases = [
  { input: case1, output: output1 },
  { input: [format(case2)], output: format(case2.sort((a, b) => a - b)) }
];


export default cases;
