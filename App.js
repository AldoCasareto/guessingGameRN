import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setuserNumber] = useState(null);

  const pickNumberHandler = (pickedNumber) => {
    setuserNumber(pickedNumber);
  };

  let screen = <StartGameScreen pickNumberHandler={pickNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        resizeMode='cover'
        source={require('./assets/images/background.png')}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
