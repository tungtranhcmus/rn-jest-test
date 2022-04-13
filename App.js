import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Home from './src/Home';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
