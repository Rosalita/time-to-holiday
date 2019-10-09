import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.titleText}>Time To Holiday</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  appContainer: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    color: 'white',
  },
});
