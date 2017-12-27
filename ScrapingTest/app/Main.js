import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AlertButton from './components/AlertButton';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerText} >Your in Main</Text>
        <Text style={styles.containerText}>More text here</Text>
        <AlertButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText:{
      color:'white'
  }
});
