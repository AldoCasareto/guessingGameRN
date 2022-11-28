import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    // fontWeight: 'bold',
    textAlign: 'center',
    width: 300,
    maxWidth: '80%',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
  },
});
