import { View } from 'react-native';
import { Button } from './Button';

export const UtilBar = () => {
  return (
    <View style={styles.container}>
      <Button title="Undo" onPress={() => console.log('Undo')} />
      <Button title="Erase" onPress={() => console.log('Erase')} />
      <Button title="Note" onPress={() => console.log('Note')} />
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
