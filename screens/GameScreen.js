import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import { Ionicons } from '@expo/vector-icons';

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return (generateRandomNumber = (min, max, exclude));
  } else {
    return randomNumber;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, gameIsOverHandler }) => {
  const [currentGuess, setcurrentGuess] = useState(() => generateRandomNumber(1, 100, userNumber));

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameIsOverHandler();
    }
  }, [currentGuess, userNumber, gameIsOverHandler]);

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
    const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
    setcurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.gameScreenContainer}>
      <Title>GameScreen</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.subTitle}>Higher or Lower</Text>
        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name='md-remove' size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Ionicons name='md-add' size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
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
