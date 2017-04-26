import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class FileList extends Component {
  render() {
    return (
      <View>
        <Text style={{padding: 75, fontSize: 25}}>{this.props.text}</Text>
      </View>
    );
  }
}

export default FileList;
