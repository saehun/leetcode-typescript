export default [
  { input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], output: 6 },
  { input: [[-1]], output: -1 },
  { input: [[-1, -1]], output: -1 },
  { input: [[1]], output: 1 },
  { input: [[-2, 1]], output: 1 },
  { input: [[8, -19, 5, -4, 20]], output: 21 },
];


/**
 *
 *   8    buffer = 8, max = 8
 *   -19  buffer = 0, max = 8
 *   5    buffer = 5, max = 8
 *   -4   buffer = 1, max = 8
 *   20   buffer = 21, max = 21
 *
 */
