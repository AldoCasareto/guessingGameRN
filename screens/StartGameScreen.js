import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  useWindowDimensions,
  ScrollView,
  ScrollViewBase,
} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ pickNumberHandler }) => {
  const [guess, setGuess] = useState(null);
  const { width, height } = useWindowDimensions();

  const handleGuesses = () => {
    const chosenNumber = +guess;
    if (isNaN(chosenNumber) || guess <= 0 || guess > 99) {
      Alert.alert('invalid number', 'number has to be a number between 1-99', [
        { text: 'Ok', style: 'destructive', onPress: setGuess(null) },
      ]);
      return;
    }
    pickNumberHandler(chosenNumber);
    setGuess(null);
  };

  const marginTopSize = height < 300 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView behavior='position'>
        <View style={[styles.rootContainer, { marginTop: marginTopSize }]}>
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
                <PrimaryButton onPress={() => setGuess(null)}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={handleGuesses}>Guess!</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 30 : 100,
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
