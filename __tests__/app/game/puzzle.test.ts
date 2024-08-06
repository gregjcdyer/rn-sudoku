import { findBoxNumbers, generatePuzzle } from '../../../app/game/Puzzle';

describe('Puzzle', () => {
  it('generates a puzzle with correct dimensions', () => {
    const puzzle = generatePuzzle();

    expect(puzzle).toHaveLength(9);
  });

  it('generates a puzzle with unique rows', () => {
    const puzzle = generatePuzzle();

    const rows = puzzle.map(
      row =>
        new Set(row.filter(r => r !== 0)).size ===
        row.filter(r => r !== 0).length,
    );

    expect(rows).not.toContain(false);
  });

  it('generates a puzzle with unique columns', () => {
    const puzzle = generatePuzzle();

    const columns = puzzle.map((_, i) => {
      const column = puzzle.map(row => row[i]);
      return new Set(column).size === column.length;
    });

    expect(columns).not.toContain(false);
  });

  it('generates a puzzle with unique boxes', () => {
    const puzzle = generatePuzzle();

    const boxes = [];

    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        const box = [];
        for (let k = i; k < i + 3; k++) {
          for (let l = j; l < j + 3; l++) {
            box.push(puzzle[k][l]);
          }
        }
        boxes.push(new Set(box).size === box.length);
      }
    }

    expect(boxes).not.toContain(false);
  });
  it.only('finds the remaining numbers for a given row', () => {
    const puzzle = [
      [9, 2, 3, 6, 7, 5, 8, 1, 4],
      [4, 8, 7, 1, 9, 3, 5, 2, 6],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    const remaining = findBoxNumbers(puzzle, 0, 0);
    const remainingBox2 = findBoxNumbers(puzzle, 0, 3);
    const remainingBox3 = findBoxNumbers(puzzle, 0, 6);

    expect(remaining).toEqual([1, 5, 6]);
    expect(remainingBox2).toEqual([2, 4, 8]);
    expect(remainingBox3).toEqual([3, 7, 9]);
  });
});
