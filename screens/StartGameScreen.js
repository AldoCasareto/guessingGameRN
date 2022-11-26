import { View, Text, TextInput, FlatList, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

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
    <View style={styles.rootContainer}>
      <Title>Guess my Number!</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
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
        {/* <FlatList
          data={guesses}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { guess } }) => <Text>{guess}</Text>}
        /> */}
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  inputBox: {
    fontSize: 32,
    width: '40%',
    textAlign: 'center',
    padding: 10,
    height: 50,
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
