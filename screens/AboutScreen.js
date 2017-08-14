import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

export default class AboutScreen extends Component{
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>CA Alumni Finder lets you look up your favourite student and see what they're up to now. All rights reserved.</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#94baf7',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: -200,
  },
});
