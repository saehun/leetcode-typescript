/**
 * nlogn이 최선인가..
   다른 예시들에서도 nlogn이 최선이라 하고 있긴 하다.
 */

function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return []; // exclude special case
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let start = intervals[0][0];
  let end = intervals[0][1];
  const merged = [];
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] <= end) {
      if (interval[1] > end) {
        end = interval[1];
      } else {
        //pass
      }
    } else {
      merged.push([start, end]);
      start = interval[0];
      end = interval[1];
    }
  }
  merged.push([start, end]);

  return merged;
}
export default {
  "default": merge,
  validator: (x: number[][]) => x.flat().join(","),
};
