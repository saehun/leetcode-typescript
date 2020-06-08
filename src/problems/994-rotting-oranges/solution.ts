

const getAdjacent = (row: number, col: number, width: number, height: number): number[][] =>
  [
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1]
  ].filter(([row, col]) =>
    row >= 0 && row < height && col >= 0 && col < width
  );

const getQueue = () => {
  const arr: any[] = [];
  let head = 0;
  return {
    enqueue: (item: any) => arr.push(item),
    dequeue: () => arr[head++],
    size: () => arr.length - head,
    toArray: () => arr,
  };
};

const orangeRotting = (grid: number[][]): number => {
  const height = grid.length;
  const width = grid[0].length;
  const result: number[][] = [];
  const queue = getQueue();
  for (let i = 0; i < height; i++) {
    result[i] = [];
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === 2) {
        result[i][j] = 0;
        queue.enqueue([i, j]);
      } else if (grid[i][j] === 1) {
        result[i][j] = -1;
      } else {
        result[i][j] = -2;
      }
    }
  }

  while (queue.size() !== 0) {
    const rotten: [number, number] = queue.dequeue();
    const time = result[rotten[0]][rotten[1]];
    console.log("GET adjacent", getAdjacent(rotten[0], rotten[1], width, height));
    for (const [row, col] of getAdjacent(rotten[0], rotten[1], width, height)) {
      if (result[row][col] === -1) {
        result[row][col] = time + 1;
        queue.enqueue([row, col]);
      }
    }
  }

  const res = result.flat();
  if (res.includes(-1)) return -1;

  return Math.max(...res, 0);
};

export default {
  "default": orangeRotting,
  validator: (x: any) => x,
};
