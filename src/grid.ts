export function createGrid(size: number) {
  return Array(size)
    .fill(0)
    .map(() => Array(size).fill(0));
}

export function markDiagonal(grid: number[][], position: [number, number]) {
  const [currentRow, currentColumn] = position;
  const size = grid.length;
  const newGrid = createGrid(size);

  for (let i = 0; i < size; i++) {
    const j = i - (currentRow - currentColumn);
    if (j >= 0 && j < size) newGrid[i][j] = 1;
  }
  for (let i = 0; i < size; i++) {
    const j = currentRow + currentColumn - i;
    if (j >= 0 && j < size) newGrid[i][j] = 1;
  }
  newGrid[currentRow][currentColumn] = 2;
  return newGrid;
}
