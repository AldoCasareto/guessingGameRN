import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const GuessLogItem = ({ guess, roundNumber }) => {
  console.log(`guess = `, guess);
  return (
    <View style={styles.listItems}>
      <Text>#{roundNumber}</Text>
      <Text>Oponnets guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItems: {
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 2,
    padding: 12,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
});
