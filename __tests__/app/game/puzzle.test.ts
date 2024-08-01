import {generatePuzzle} from '../../../app/game/Puzzle';

describe('Puzzle', () => {
  it('generates a puzzle with correct dimensions', () => {
    const puzzle = generatePuzzle();

    expect(puzzle).toHaveLength(9);
  });
});
