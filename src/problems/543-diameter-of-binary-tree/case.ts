import { Tree } from "../../helpers";

export default [
  { input: [Tree.from([1, 2, 3, 4, 5])], output: 3 },
  { input: [Tree.from([1, 2, 3, 4, 5, 6, 7])], output: 4 },
  { input: [Tree.from([1, 2, 3, 4, 5, 6, 7, null, null, 8])], output: 5 },
];
