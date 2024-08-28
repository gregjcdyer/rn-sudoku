import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NumberBar } from './NumberBar';
import { validatePuzzle } from '../game/Puzzle';
import { useEffect, useState } from 'react';
import { UtilBar } from './UtilBar';

type GameBoardProps = {
  puzzle: number[][];
};

export const GameBoard = ({ puzzle }: GameBoardProps) => {
  const [currentPuzzle, setCurrentPuzzle] = useState(puzzle);
  const [selectedCell, setSelectedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const updatePuzzle = (row: number, col: number, value: number) => {
    const updatedPuzzle = [...currentPuzzle];
    updatedPuzzle[row][col] = value;
    setCurrentPuzzle(updatedPuzzle);
  };

  useEffect(() => {
    if (selectedCell && selectedNumber !== null) {
      updatePuzzle(selectedCell.row, selectedCell.col, selectedNumber);
      setSelectedNumber(null);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNumber]);

  useEffect(() => {
    if (puzzle.every(row => row.every(cell => cell !== 0))) {
      const valid = validatePuzzle(currentPuzzle);
      if (valid) {
        console.log('Puzzle is solved');
      }
    }
  }, [currentPuzzle, puzzle]);

  const renderCells = () => {
    const cells = [];
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        const isOriginal = puzzle[row][col] !== 0;
        cells.push(
          <Pressable
            key={`${row}-${col}`}
            style={styles.innerBox}
            onPress={() => {
              setSelectedCell({ row, col });
            }}>
            <View
              style={[
                styles.innerBox,
                selectedCell?.row === row &&
                  selectedCell?.col === col &&
                  styles.selected,
                getBorderStyle(row, col),
              ]}>
              <Text style={isOriginal ? styles.originalText : styles.inputText}>
                {currentPuzzle[row][col] !== 0 ? currentPuzzle[row][col] : ''}
              </Text>
            </View>
          </Pressable>,
        );
      }
    }
    return cells;
  };

  const getBorderStyle = (row: number, col: number) => {
    return {
      borderTopWidth: row % 3 === 0 ? 2 : 1,
      borderLeftWidth: col % 3 === 0 ? 2 : 1,
      borderRightWidth: (col + 1) % 3 === 0 ? 2 : 1,
      borderBottomWidth: (row + 1) % 3 === 0 ? 2 : 1,
      borderColor: 'black',
    };
  };
  return (
    <>
      <View style={styles.container}>{renderCells()}</View>
      <UtilBar
        onErase={() =>
          selectedCell && updatePuzzle(selectedCell.row, selectedCell.col, 0)
        }
        onUndo={() => null}
        onNote={() => null}
      />
      <NumberBar onPress={num => setSelectedNumber(num)} />
      <Text>{validatePuzzle(currentPuzzle) ? 'valid' : 'invalid'}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 360,
    height: 40,
    backgroundColor: 'skyblue',
    alignItems: 'center',
  },
  innerBox: {
    width: 40,
    height: 40,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: 'lightgray',
  },
  originalText: {
    color: 'black',
    fontWeight: 'bold',
  },
  inputText: {
    color: 'blue',
  },
});
