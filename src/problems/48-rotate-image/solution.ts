const Solution = (matrix: number[][]): void => {
  const getPos = (x: number, y: number): [number, number] => {
    return [matrix.length - 1 - y, x];
  };

  const getPointsToBeRotated = (width: number): number[][] => {
    const points = [];
    for (let i = 0; i < width / 2; i++) {
      for (let j = 0; j < width / 2 - (width % 2 === 0 ? 0 : 1); j++) {
        points.push([i, j]);
      }
    }
    return points;
  };

  const points = getPointsToBeRotated(matrix.length);

  for (let [x, y] of points) {
    let [x1, y1] = getPos(x, y);
    const tmp = matrix[y1][x1];
    matrix[y1][x1] = matrix[y][x];
    x = x1, y = y1;

    [x1, y1] = getPos(x, y);
    const tmp2 = matrix[y1][x1];
    matrix[y1][x1] = tmp;
    x = x1, y = y1;

    [x1, y1] = getPos(x, y);
    const tmp3 = matrix[y1][x1];
    matrix[y1][x1] = tmp2;
    x = x1, y = y1;

    [x1, y1] = getPos(x, y);
    matrix[y1][x1] = tmp3;
  }
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
