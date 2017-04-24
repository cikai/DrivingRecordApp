import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import api from '../utilities/api';

class FileList extends Component {
  componentWillMount() {
    api.getFileList().then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <View>
        <Text style={{padding: 75, fontSize: 25}}>{this.props.text}</Text>
      </View>
    );
  }
}

export default FileList;
