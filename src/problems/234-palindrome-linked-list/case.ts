import { List } from "../../helpers";

export default [
  { input: [List.toList([1, 2, 2, 1])], output: true },
  { input: [List.toList([1, 3, 2, 4, 3, 2, 1])], output: false },
];
