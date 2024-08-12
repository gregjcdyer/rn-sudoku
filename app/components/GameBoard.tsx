import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NumberBar } from './NumberBar';
import { validatePuzzle } from '../game/Puzzle';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (selectedCell && selectedNumber !== null) {
      const updatedPuzzle = [...currentPuzzle];

      console.log(selectedCell);
      console.log(selectedNumber);
      updatedPuzzle[selectedCell.row][selectedCell.col] = selectedNumber;
      setCurrentPuzzle(updatedPuzzle);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNumber]);

  return (
    <>
      <View style={styles.container}>
        {currentPuzzle.map((row, i) => (
          <View key={i} style={styles.box}>
            {row.map((cell, j) => (
              <Pressable
                key={`{${i},${j}`}
                onPress={() => setSelectedCell({ row: i, col: j })}>
                <View
                  style={[
                    styles.innerBox,
                    selectedCell?.row === i &&
                      selectedCell?.col === j &&
                      styles.selected,
                  ]}>
                  <Text>{cell !== 0 ? cell : ''}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        ))}
      </View>
      <NumberBar onPress={num => setSelectedNumber(num)} />
      <Text>{validatePuzzle(puzzle) ? 'valid' : 'invalid'}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  box: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 120,
    height: 120,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    margin: 1,
  },
  innerBox: {
    width: 40,
    height: 40,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  selected: {
    backgroundColor: 'yellow',
  },
});
