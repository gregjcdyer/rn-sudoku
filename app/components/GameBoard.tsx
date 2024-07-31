import {StyleSheet, Text, View} from 'react-native';
import {NumberBar} from './NumberBar';
import {validatePuzzle} from '../game/Puzzle';

type GameBoardProps = {
  puzzle: number[][];
};

export const GameBoard = ({puzzle}: GameBoardProps) => {
  return (
    <>
      <View style={styles.container}>
        {/**
         * Top row
         */}
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Text>{puzzle[0][0]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[0][1]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[0][2]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[1][0]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[1][1]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[1][2]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[2][0]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[2][1]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[2][2]}</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Text>{puzzle[0][3]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[0][4]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[0][5]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[1][3]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[1][4]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[1][5]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[2][3]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[2][4]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[2][5]}</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Text>{puzzle[0][6]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[0][7]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[0][8]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[1][6]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[1][7]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[1][8]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[2][6]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[2][7]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[2][8]}</Text>
          </View>
        </View>

        {/**
         * Middle row
         */}
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Text>{puzzle[3][0]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[3][1]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[3][2]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[4][0]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[4][1]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[4][2]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[5][0]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[5][1]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[5][2]}</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Text>{puzzle[3][3]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[3][4]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[3][5]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[4][3]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[4][4]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[4][5]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[5][3]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[5][4]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[5][5]}</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Text>{puzzle[3][6]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[3][7]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[3][8]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[4][6]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[4][7]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[4][8]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[5][6]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[5][7]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[5][8]}</Text>
          </View>
        </View>

        {/**
         * Bottom row
         */}
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Text>{puzzle[6][0]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[6][1]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[6][2]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[7][0]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[7][1]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[7][2]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[8][0]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[8][1]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[8][2]}</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Text>{puzzle[6][3]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[6][4]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[6][5]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[7][3]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[7][4]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[7][5]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[8][3]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[8][4]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[8][5]}</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Text>{puzzle[6][6]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[6][7]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[6][8]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[7][6]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[7][7]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[7][8]}</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>{puzzle[8][6]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[8][7]}</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>{puzzle[8][8]}</Text>
          </View>
        </View>
      </View>
      <NumberBar />
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
});
