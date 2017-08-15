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
  Button,
  ScrollView
} from 'react-native';
import { StackNavigator} from 'react-navigation';
import AboutScreen from './screens/AboutScreen.js';
import Search from './components/Search';

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
        <View style={styles.searchContainer}>
          <Search />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => navigate('About')}
                  title="About"
                  color="#115dd8"/>
        </View>
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
    marginTop: -200,
    marginBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 50,
  },
  searchContainer: {
    marginTop: -90
  }
});

AppRegistry.registerComponent('NativeExperiment', () => NativeExperiment);
