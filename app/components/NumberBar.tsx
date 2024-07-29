import {View} from 'react-native';
import {Button} from './Button';

export const NumberBar = () => {
  return (
    <View style={styles.container}>
      <Button title="1" onPress={() => {}} style={styles.button} />
      <Button title="2" onPress={() => {}} style={styles.button} />
      <Button title="3" onPress={() => {}} style={styles.button} />
      <Button title="4" onPress={() => {}} style={styles.button} />
      <Button title="5" onPress={() => {}} style={styles.button} />
      <Button title="6" onPress={() => {}} style={styles.button} />
      <Button title="7" onPress={() => {}} style={styles.button} />
      <Button title="8" onPress={() => {}} style={styles.button} />
      <Button title="9" onPress={() => {}} style={styles.button} />
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  } as const,
  button: {
    width: 30,
    height: 30,
    margin: 5,
  },
};
