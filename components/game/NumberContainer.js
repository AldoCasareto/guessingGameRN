import { View, Text, StyleSheet, Dimensions } from 'react-native';
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

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24,
    borderColor: Colors.primary500,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.primary500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
});
