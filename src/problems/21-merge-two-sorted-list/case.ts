import { List } from "../../helpers";
const { toList } = List;
const case1 = [toList([1, 2, 4]), toList([1, 3, 4])];
const output1 = toList([1, 1, 2, 3, 4, 4]);

export default [
  { input: case1, output: output1 },
];
