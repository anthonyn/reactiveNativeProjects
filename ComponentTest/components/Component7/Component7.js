import React, {Component} from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';

export default class Component7 extends Component {

  buttonPressed(){
      alert('button was pressed')
  }  

  render() {
    return (
      <View >
        <Text>This is Component7</Text>
        <Button 
            title="Press Me"
            onPress={this.buttonPressed}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Component7', () => Component7);
