import { View } from 'react-native';
import { Button } from './Button';
import Undo from '../icons/undo.svg';
import Erase from '../icons/erase.svg';
import Note from '../icons/note.svg';

type UtilBarProps = {
  onUndo: () => void;
  onErase: () => void;
  onNote: () => void;
};

export const UtilBar = ({ onUndo, onErase, onNote }: UtilBarProps) => {
  return (
    <View style={styles.container}>
      <Button onPress={onUndo}>
        <Undo width="30" height="30" />
      </Button>
      <Button onPress={onErase}>
        <Erase width="30" height="30" />
      </Button>
      <Button onPress={onNote}>
        <Note width="30" height="30" />
      </Button>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    gap: 40,
  } as const,
};
