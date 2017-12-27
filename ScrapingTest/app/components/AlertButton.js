import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Main extends React.Component {

  buttonPress(){
      alert('Button pressed')
  }
    
  render() {
    return (
        <Button
        onPress={this.buttonPress}
        title="Press me"

        />
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
