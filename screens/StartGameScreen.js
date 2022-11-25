import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';

const StartGameScreen = ({ pickNumberHandler }) => {
  const [guess, setGuess] = useState(null);
  const [guesses, setGuesses] = useState([]);

  const handleGuesses = () => {
    const chosenNumber = +guess;
    if (isNaN(chosenNumber) || guess <= 0 || guess > 99) {
      Alert.alert('invalid number', 'number has to be a number between 1-99', [
        { text: 'Ok', style: 'destructive', onPress: setGuess(null) },
      ]);
      return;
    }
    pickNumberHandler(chosenNumber);
    setGuesses((currentGuess) => [...currentGuess, { chosenNumber, id: new Date() }]);
    setGuess(null);
  };

  return (
    <View style={styles.inputContainer}>
      <Text>StartGameScreen</Text>
      <TextInput
        autoFocus={true}
        style={styles.inputBox}
        keyboardType='number-pad'
        onChangeText={(value) => setGuess(value)}
        value={guess}
      />
      <View style={styles.buttons}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => setGuesses([])}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleGuesses}>Guess!</PrimaryButton>
        </View>
      </View>
      <FlatList
        data={guesses}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { guess } }) => <Text>{guess}</Text>}
      />
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#876b79',
    marginTop: 100,
    marginHorizontal: '5%',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    height: '20%',
  },
  inputBox: {
    fontSize: 32,
    width: '40%',
    textAlign: 'center',
    padding: 10,
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
