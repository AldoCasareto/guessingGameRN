import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ guessCount, userNumber, restart }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) imageSize = 150;

  if (height < 400) imageSize = 80;

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <View style={styles.rootContainer}>
      <Title>GAME IS OVER!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
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

// const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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
