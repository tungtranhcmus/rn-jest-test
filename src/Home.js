import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Some from './Some';
class App extends Component {
  state = {data: 0};

  change = x => x * 10;
  change2 = x => this.setState({data: x});
  render() {
    return (
      <View style={styles.container}>
        <Text>Some</Text>
        <Some title="QQ" />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
