export default [
  { input: ["(()"], output: 2 },
  { input: [")()())"], output: 4 },
  { input: [")(()())"], output: 6 },
  { input: ["()(()"], output: 2 },
  { input: [")()(((())))("], output: 10 },
  { input: ["(())()(()(("], output: 6 },
];
