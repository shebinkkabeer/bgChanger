import {rgb} from 'jest-matcher-utils/node_modules/chalk';
import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32,100,126)');

  const bgChanger = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setRandomColor(color);
  };

  const reset = () => {
    let resetColor = 'rgb(0,0,0)';
    setRandomColor(resetColor);
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={bgChanger}>
          <Text style={styles.text}>Tap Me</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 40}} onPress={reset}>
          <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 15,
    paddingHorizontal: 15,
    color: '#FFFFFF',
    borderRadius: 20,
    textTransform: 'uppercase',
  },
});

export default App;
