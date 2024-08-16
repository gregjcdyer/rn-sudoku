import { View } from 'react-native';
import { Button } from './Button';
import { SvgUri } from 'react-native-svg';

type UtilBarProps = {
  onUndo: () => void;
  onErase: () => void;
  onNote: () => void;
};

export const UtilBar = ({ onUndo, onErase, onNote }: UtilBarProps) => {
  return (
    <View style={styles.container}>
      <Button onPress={onUndo}>
        <SvgUri
          width="30"
          height="30"
          uri="https://www.svgrepo.com/show/529263/undo-left.svg"
        />
      </Button>
      <Button onPress={onErase}>
        <SvgUri
          width="30"
          height="30"
          uri="https://www.svgrepo.com/show/450842/erase.svg"
        />
      </Button>
      <Button onPress={onNote}>
        <SvgUri
          width="30"
          height="30"
          uri="https://www.svgrepo.com/show/511086/note-edit.svg"
        />
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
