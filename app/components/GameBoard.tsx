import {StyleSheet, Text, View} from 'react-native';
import {NumberBar} from './NumberBar';

export const GameBoard = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Text>1</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>2</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>3</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>4</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>5</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>6</Text>
          </View>

          <View style={styles.innerBox}>
            <Text>7</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>8</Text>
          </View>
          <View style={styles.innerBox}>
            <Text>9</Text>
          </View>
        </View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>

        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>

        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <NumberBar />
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
  },
});
