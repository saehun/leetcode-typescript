
/*
0 = 0   ->     0
1 = 1   ->     1
2 = 10  ->     1
3 = 11  ->     2
4 = 100 ->     1
5 = 101 ->     2
6 = 110 ->     2
7 = 111 ->     3
8 = 1000 ->    1
9 = 1001 ->    2  // 8+1
...
16 = 10000 ->  1


[4..7]   -> 1 + [0..3]
[8..15]  -> 1 + [0..7]
[16..31] -> 1 + [0..15]
...
[2^n ... 2^n-1] -> 1 + [0...2^-1]
*/

function* countBits() {
  yield 0;
  yield 1;

  let index = 2;
  let lastSquareNumber = 1;
  const result = [0, 1];

  // eslint-disable-next-line
  while (true) {
    if (index == lastSquareNumber * 2) {
      lastSquareNumber *= 2;
    }
    result[index] = result[index - lastSquareNumber] + 1;
    yield result[index];
    index++;
  }
}

const take = <T extends unknown>(num: number, generator: () => Generator<T, any, boolean>): T[] => {
  const arr: T[] = [];
  const iter = generator();
  for (let i = 0; i < num; i++) {
    arr.push(iter.next().value);
  }

  return arr;
};

const Solution = (num: number): number[] => {
  return take(num + 1, countBits);
};

export default {
  "default": Solution,
  validator: (x: any) => x.join(""),
};
