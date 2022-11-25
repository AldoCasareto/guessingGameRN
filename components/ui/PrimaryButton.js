import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedButton]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 50,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    elevation: 2,
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressedButton: {
    opacity: 0.75,
  },
});
