import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';
import InstructionText from '../components/ui/InstructionText';

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

const GameScreen = ({ userNumber, gameIsOverHandler, setGuessCount }) => {
  const [guesses, setGuesses] = useState([() => generateRandomNumber(1, 100, userNumber)]);
  const [currentGuess, setcurrentGuess] = useState(() => generateRandomNumber(1, 100, userNumber));
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameIsOverHandler();
      minBoundary = 1;
      maxBoundary = 100;
    }
  }, [currentGuess, userNumber, gameIsOverHandler]);

  const nextGuessHandler = (direction) => {
    setGuessCount((currentGuessCount) => currentGuessCount + 1);

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
    setGuesses((prevGuess) => [newRandomNumber, ...prevGuess]);
  };

  const numberofRounds = guesses.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.subTitle}>Higher or Lower</InstructionText>
        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name='md-remove' size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              <Ionicons name='md-add' size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name='md-remove' size={24} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              <Ionicons name='md-add' size={24} />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.gameScreenContainer}>
      <Title>GameScreen</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guesses}
          renderItem={({ item, index }) => (
            <GuessLogItem roundNumber={numberofRounds - index} guess={item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
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
  listContainer: {
    flex: 1,
    padding: 20,
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
