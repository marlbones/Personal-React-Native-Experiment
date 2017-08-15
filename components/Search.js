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
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'Pat',
    };
  }

  _onSearchTextChanged = (event) => {
    console.log('_onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log('Current: '+this.state.searchString+', Next: '+event.nativeEvent.text);
  };
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.description}>
            Search your favourite ex-CA student.
          </Text>
          <View style={styles.flowRight}>
            <TextInput style={styles.searchInput}
                       value={this.state.searchString}
                       onChange={this._onSearchTextChanged}
                       placeholder='Search via name'/>
            <Button
               onPress={() => {}}
               color='#115dd8'
               title='Search'/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
  },
  searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  flexGrow: 1,
  fontSize: 16,
  borderWidth: 1,
  borderColor: '#115dd8',
  borderRadius: 8,
  color: '#115dd8',
},
});
