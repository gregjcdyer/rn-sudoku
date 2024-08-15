import { View } from 'react-native';
import { Button } from './Button';

type NumberBarProps = {
  onPress: (value: number) => void;
};

export const NumberBar = ({ onPress }: NumberBarProps) => {
  // generate buttons for numbers 1-9
  const buttons = [];
  for (let i = 0; i < 9; i++) {
    buttons.push(
      <Button
        key={i}
        title={`${i + 1}`}
        onPress={() => {
          onPress(i + 1);
        }}
        style={styles.button}
      />,
    );
  }
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <View key={index}>{button}</View>
      ))}
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
