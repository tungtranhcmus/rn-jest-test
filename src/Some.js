import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class App extends Component {
  state = {data: 0};

  change = x => x * 10;
  change2 = x => this.setState({data: x});
  render() {
    const {title = ''} = this.props;
    return (
      <View style={styles.container}>
        <Text>HOME2 {title}</Text>
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
