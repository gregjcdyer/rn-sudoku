import {generatePuzzle} from '../../../app/game/Puzzle';

describe('Puzzle', () => {
  it.only('generates a puzzle with correct dimensions', () => {
    const puzzle = generatePuzzle();
    expect(puzzle).toHaveLength(9);
  });
});
