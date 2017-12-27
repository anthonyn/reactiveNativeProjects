import React, {Component} from 'react';
import { AppRegistry, Text, View } from 'react-native';

import Component7 from './components/Component7/Component7';

export default class App extends Component {
  render() {
    return (
      <View >
        <Text>This is main</Text>
        <Component7 />
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
