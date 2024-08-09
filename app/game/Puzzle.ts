import * as _ from 'lodash';
import { getSeed } from './seeds';

type Puzzle = number[][];

export const generatePuzzle = (): Puzzle => {
  const puzzle = getSeed();

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
    const values = row.filter(r => r !== 0);
    const unique = values.length === new Set(values).size;

    if (!unique) {
      return false;
    }
  }
  return true;
};

const validateColumns = (puzzle: Puzzle): boolean => {
  // check if each column has unique numbers
  for (let i = 0; i < puzzle.length; i++) {
    const column = puzzle.map(row => row[i]).filter(r => r !== 0);

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
      const box: number[] = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          box.push(puzzle[k][l]);
        }
      }
      const values = box.filter(r => r !== 0);
      const unique = new Set(values).size === values.length;
      // ignore 0 as it is a placeholder
      if (!unique) {
        return false;
      }
    }
  }
  return true;
};

// finds the numbers required to solve a 3 x 3 box
export const findBoxNumbers = (
  puzzle: Puzzle,
  row: number,
  col: number,
): number[] => {
  const box: number[] = [];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const startRow = row;
  const startCol = col;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      box.push(puzzle[i][j]);
    }
  }

  return _.difference(numbers, box);
};
