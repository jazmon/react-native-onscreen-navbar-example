// @flow
import * as React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 6,
  },
});

type Props = {
  onPress: () => void,
  children: React$Node,
};

const Button = ({ onPress, children }: Props) => (
  <TouchableNativeFeedback
    delayPressIn={0}
    background={TouchableNativeFeedback.Ripple('#000')}
    onPress={onPress}
  >
    <View style={styles.container}>{children}</View>
  </TouchableNativeFeedback>
);

export default Button;
