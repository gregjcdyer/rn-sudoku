import { View } from 'react-native';
import { Button } from './Button';

type UtilBarProps = {
  onUndo: () => void;
  onErase: () => void;
  onNote: () => void;
};

export const UtilBar = ({ onUndo, onErase, onNote }: UtilBarProps) => {
  return (
    <View style={styles.container}>
      <Button title="Undo" onPress={onUndo} />
      <Button title="Erase" onPress={onErase} />
      <Button title="Note" onPress={onNote} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
  } as const,
};
