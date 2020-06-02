import { Tree } from "../../helpers/tree";
export default [
  { input: [Tree.from([1, 2, 2, null, 3, null, 3])], output: false },
  { input: [Tree.from([1])], output: true },
  { input: [Tree.from([1, 2, 2])], output: true },
  { input: [Tree.from([1, 2, 2, 4, 3, null, 3])], output: false },
];
