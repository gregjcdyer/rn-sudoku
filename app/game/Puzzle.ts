export const generatePuzzle = (): number[][] => {
  const size = 9;
  const puzzle = new Array(size).fill(0).map(() => new Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      puzzle[i][j] = j + 1;
    }
  }

  return puzzle;
};
