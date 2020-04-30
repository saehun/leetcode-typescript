export default [
  { input: ["(()"], output: 2 },
  { input: [")()())"], output: 4 },
  { input: [")(()())"], output: 6 },
  { input: ["()(()"], output: 2 },         // )(()가 valid로 나오는 경우
  { input: [")()(((())))("], output: 10 }, // 마지막에 ( 가 나오는 경우
  { input: ["(())()(()(("], output: 6 },   // backtracking을 해보았지만 ())()(() 가 valid로 나오는 경우
];

//
//
//   (
// ( ( (   (
//--------------
// ( ( ) ) ( ) )
// x x 1 0 x 0 x
// x x 2 4 x 6 x
// o o o o o o x


//
//
//
// (   (     (
//--------------
// ( ) ( ) ) ( )
// x 0 x 2 x x 5
// x 2 x 2 x x 2
// o o o o x o o
