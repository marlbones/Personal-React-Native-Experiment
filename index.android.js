/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator} from 'react-navigation';
import AboutScreen from './screens/AboutScreen.js';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Coder Academy Alumni Finder
        </Text>
        <Button onPress={() => navigate('About')}
                title="About"
                style={styles.butt} //Buttons don't have a style prop and can't be styled. TouchableOpacity might be a good alternative
                color="#115dd8"/>
      </View>
    );
  }
}

const NativeExperiment = StackNavigator({
  Home: { screen: HomeScreen },
  About: { screen: AboutScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#94baf7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: -350,
    marginBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  butt: {
    marginTop: 200,
  }
});

AppRegistry.registerComponent('NativeExperiment', () => NativeExperiment);
