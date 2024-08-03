import {
  generatePuzzle,
  generateRow,
  validateRows,
} from '../../../app/game/Puzzle';

describe('Puzzle', () => {
  it('generates a puzzle with correct dimensions', () => {
    const puzzle = generatePuzzle();

    expect(puzzle).toHaveLength(9);
  });

  it('generates a puzzle with unique rows', () => {
    const puzzle = generatePuzzle();

    const rows = puzzle.map(row => new Set(row).size === row.length);

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

  it("generates a row that's unique", () => {
    let puzzle = generatePuzzle();
    const row = 0;
    puzzle = generateRow(puzzle, row);

    const valid = validateRows(puzzle);

    expect(valid).toBe(true);
  });
});
