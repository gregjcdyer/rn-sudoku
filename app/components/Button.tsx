import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style: any;
};

export const Button = ({title, onPress, style}: ButtonProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 24,
    color: 'black',
  },
});
