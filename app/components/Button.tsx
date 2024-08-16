import { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  title?: string;
  onPress: () => void;
  style?: any;
  children?: ReactNode;
};

export const Button = ({ title, onPress, style, children }: ButtonProps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {title && <Text style={styles.buttonText}>{title}</Text>}
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 24,
    color: 'black',
  },
});
