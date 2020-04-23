import { List } from "../../helpers";

export default [
  { input: [List.from([1, 2, 3, 4, 5]), 2], output: true },
  { input: [List.from([9]), 1], output: true },
  { input: [List.from([1, 2]), 1], output: true },
  { input: [List.from([1, 2]), 2], output: true },
];
