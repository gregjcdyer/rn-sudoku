type Puzzle = number[][];

export const generatePuzzle = (): Puzzle => {
  const size = 9;
  const puzzle = new Array(size).fill(0).map(() => new Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // set random number between 1 and 9
      puzzle[i][j] = Math.floor(Math.random() * 9) + 1;
    }
  }

  return puzzle;
};

export const generateRow = (puzzle: Puzzle, row: number): Puzzle => {
  const size = 9;
  const newRow = new Array(size).fill(0);

  for (let i = 0; i < size; i++) {
    // do {
    newRow[i] = Math.floor(Math.random() * 9) + 1;
    // } while (!validateRows(puzzle));
  }

  puzzle[row] = newRow;

  return puzzle;
};

export const validatePuzzle = (puzzle: Puzzle): boolean => {
  return (
    validateColumns(puzzle) && validateRows(puzzle) && validateBoxes(puzzle)
  );
};

export const validateRows = (puzzle: Puzzle): boolean => {
  // Check if each row has unique numbers
  for (const element of puzzle) {
    const row = element;

    // count unique numbers in the row
    const unique = row.filter(r => r !== 0).length === new Set(row).size;

    if (!unique) {
      return false;
    }
  }
  return true;
};

const validateColumns = (puzzle: Puzzle): boolean => {
  // check if each column has unique numbers
  for (let i = 0; i < puzzle.length; i++) {
    const column = puzzle.map(row => row[i]);
    const unique = new Set(column).size === column.length;
    if (!unique && !column.includes(0)) {
      return false;
    }
  }
  return true;
};

const validateBoxes = (puzzle: Puzzle): boolean => {
  // check if each 3x3 box has unique numbers
  for (let i = 0; i < puzzle.length; i += 3) {
    for (let j = 0; j < puzzle.length; j += 3) {
      const box: number[] = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          box.push(puzzle[k][l]);
        }
      }
      const unique = new Set(box).size === box.length;
      // ignore 0 as it is a placeholder
      if (!unique && !box.includes(0)) {
        return false;
      }
    }
  }
  return true;
};
