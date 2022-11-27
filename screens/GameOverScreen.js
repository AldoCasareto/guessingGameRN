import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ guessCount, userNumber, restart }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME IS OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your game needed <Text style={styles.hightlightedText}>{guessCount}</Text> turns to guess
        <Text style={styles.hightlightedText}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={restart}>Restart</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
  },
  hightlightedText: {
    fontFamily: 'open-sans-bold',
  },
});
