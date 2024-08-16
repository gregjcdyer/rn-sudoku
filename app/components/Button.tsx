import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type ButtonProps = {
  title?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
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
