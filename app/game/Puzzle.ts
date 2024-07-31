type Puzzle = number[][];

export const generatePuzzle = (): Puzzle => {
  const size = 9;
  const puzzle = new Array(size).fill(0).map(() => new Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let tries = 0;
      // do {
      // set random number between 1 and 9
      puzzle[i][j] = Math.floor(Math.random() * 9) + 1;
      tries++;
      // check that the puzzle is still valid
      //} while (!validateBoxes(puzzle) || tries < 5);
    }
  }

  return puzzle;
};

export const validatePuzzle = (puzzle: Puzzle): boolean => {
  return (
    validateColumns(puzzle) && validateRows(puzzle) && validateBoxes(puzzle)
  );
};

const validateRows = (puzzle: Puzzle): boolean => {
  // Check if each row has unique numbers
  for (const element of puzzle) {
    const row = element;
    const unique = new Set(row).size === row.length;
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
    if (!unique) {
      return false;
    }
  }
  return true;
};

const validateBoxes = (puzzle: Puzzle): boolean => {
  // check if each 3x3 box has unique numbers
  for (let i = 0; i < puzzle.length; i += 3) {
    for (let j = 0; j < puzzle.length; j += 3) {
      const box = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          box.push(puzzle[k][l]);
        }
      }
      const unique = new Set(box).size === box.length;
      // ignore 0 as it is a placeholder
      if (!unique || box.includes(0)) {
        return false;
      }
    }
  }
  return true;
};
