import * as _ from 'lodash';
import { getSeed } from './seeds';

type Puzzle = number[][];

export const generatePuzzle = (): Puzzle => {
  //const puzzle = getSeed();

  const puzzle = buildNewSudokuPuzzle();
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

const getRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const buildNewSudokuPuzzle = (): number[][] => {
  let gA: number;
  let gB: number;
  let gC: number;
  let gStep: number;
  let gValue1: number;
  let gValue2: number;
  let gRow1: number;
  let gRow2: number = 0;
  let gCol1: number;
  let gCol2: number = 0;
  let gTargetValue: number;
  const gCellList: number[] = Array(81).fill(0);
  let gOverallStep: number;

  const iMatrix: number[][] = getSeed();

  for (gOverallStep = 1; gOverallStep <= 5; gOverallStep++) {
    // Load list
    for (gA = 0; gA < 81; gA++) {
      gCellList[gA] = gA + 1;
    }

    // Shuffle list
    for (gA = 0; gA < 81; gA++) {
      gB = getRandom(1, 81) - 1;
      if (gB !== gA) {
        gC = gCellList[gB];
        gCellList[gB] = gCellList[gA];
        gCellList[gA] = gC;
      }
    }

    for (gStep = 0; gStep < 81; gStep++) {
      // We will change the following cell
      gRow1 = Math.floor((gCellList[gStep] - 1) / 9);
      gCol1 = (gCellList[gStep] - 1) % 9;

      // We will change either its row or its col
      if (getRandom(1, 2) === 1) {
        // We will change its column
        switch (gCol1 % 3) {
          case 0:
            gCol2 = gCol1 + (getRandom(1, 2) === 1 ? 1 : 2);
            break;
          case 1:
            gCol2 = gCol1 + (getRandom(1, 2) === 1 ? 1 : -1);
            break;
          default:
            gCol2 = gCol1 - (getRandom(1, 2) === 1 ? 2 : 1);
            break;
        }

        gTargetValue = iMatrix[gRow1][gCol1];

        do {
          // Load
          gValue1 = iMatrix[gRow1][gCol1];
          gValue2 = iMatrix[gRow1][gCol2];

          // Swap
          iMatrix[gRow1][gCol1] = gValue2;
          iMatrix[gRow1][gCol2] = gValue1;

          if (gValue2 === gTargetValue) break; // Terminate if you swapped the initial number

          // Seek
          for (gA = 0; gA < 9; gA++) {
            if (iMatrix[gA][gCol1] === gValue2 && gA !== gRow1) {
              gRow2 = gA;
              break;
            }
          }

          // Initialize next
          gRow1 = gRow2;
        } while (true);
      } else {
        // We will change its row
        switch (gRow1 % 3) {
          case 0:
            gRow2 = gRow1 + (getRandom(1, 2) === 1 ? 1 : 2);
            break;
          case 1:
            gRow2 = gRow1 + (getRandom(1, 2) === 1 ? 1 : -1);
            break;
          default:
            gRow2 = gRow1 - (getRandom(1, 2) === 1 ? 2 : 1);
            break;
        }

        gTargetValue = iMatrix[gRow1][gCol1];

        do {
          // Load
          gValue1 = iMatrix[gRow1][gCol1];
          gValue2 = iMatrix[gRow2][gCol1];

          // Swap
          iMatrix[gRow1][gCol1] = gValue2;
          iMatrix[gRow2][gCol1] = gValue1;

          if (gValue2 === gTargetValue) break; // Terminate if you swapped the initial number

          // Seek
          for (gA = 0; gA < 9; gA++) {
            if (iMatrix[gRow1][gA] === gValue2 && gA !== gCol1) {
              gCol2 = gA;
              break;
            }
          }

          // Initialize next
          gCol1 = gCol2;
        } while (true);
      }
    }
  }

  return iMatrix;
};

export const maskPuzzle = (puzzle: Puzzle, difficulty: number): Puzzle => {
  const maskedPuzzle = _.cloneDeep(puzzle);

  const cells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const shuffledCells = _.shuffle(cells);

  // extend shuffledCells to have difficulty elements
  while (shuffledCells.length < difficulty * 2) {
    shuffledCells.push(..._.shuffle(cells));
  }

  for (let i = 0; i < difficulty; i++) {
    const row = shuffledCells.pop() ?? 0;
    const col = shuffledCells.pop() ?? 0;

    maskedPuzzle[row][col] = 0;
  }

  return maskedPuzzle;
};
