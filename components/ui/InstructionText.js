import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const InstructionText = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: 'open-sans',
  },
});
