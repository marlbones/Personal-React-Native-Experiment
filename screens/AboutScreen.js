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
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.instructions}>HEllololol</Text>
          </View>
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    paddingLeft: 30,
    paddingRight: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
