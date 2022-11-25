import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return (generateRandomNumber = (min, max, exclude));
  }

  return randomNumber;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomNumber(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setcurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert('Dont lie!', 'you know its wrong', [{ text: 'Ok', style: 'cancel' }]);
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess;
    }
    const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, userNumber);
    setcurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.gameScreenContainer}>
      <Title>GameScreen</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.buttonsContainer}>
        <Text style={styles.subTitle}>Higher or Lower</Text>
        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
  },
  subTitle: {
    textAlign: 'center',
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
