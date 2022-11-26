import { View, Text, StyleSheet } from 'react-native';
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
  },
});
