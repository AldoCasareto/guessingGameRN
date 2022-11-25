import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    padding: 24,
    borderColor: Colors.primary500,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.primary500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
