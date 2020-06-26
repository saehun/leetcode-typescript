const Solution = (grid: string[][]) => {
  let num = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell === "0") continue; // skip zero
      if (cell === "2") continue; // skip marked
      mark(i, j);
      num++;
    }
  }

  function mark(row: number, col: number) {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === "2" ||
      grid[row][col] === "0"
    ) return;
    grid[row][col] = "2";
    mark(row - 1, col);
    mark(row + 1, col);
    mark(row, col - 1);
    mark(row, col + 1);
  }

  return num;
};

export default {
  "default": Solution,
  validator: (x: any) => x,
};
