import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setuserNumber] = useState(null);
  const [isGameIsOver, setIsGameIsOver] = useState(true);
  const [guessCount, setGuessCount] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  const pickNumberHandler = (pickedNumber) => {
    setuserNumber(pickedNumber);
    setIsGameIsOver(false);
  };

  const gameIsOverHandler = () => {
    setIsGameIsOver(true);
  };

  let screen = <StartGameScreen pickNumberHandler={pickNumberHandler} />;

  const restart = () => {
    setuserNumber(null);
    setGuessCount(0);
    screen = <GameScreen />;
  };

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        gameIsOverHandler={gameIsOverHandler}
        setGuessCount={setGuessCount}
      />
    );
  }

  if (isGameIsOver && userNumber) {
    screen = <GameOverScreen guessCount={guessCount} userNumber={userNumber} restart={restart} />;
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
