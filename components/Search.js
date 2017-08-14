import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search your favourite ex-CA student.
        </Text>
        <Text style={styles.description}>
          Search by name.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
});
