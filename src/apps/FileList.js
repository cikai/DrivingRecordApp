import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import api from '../utilities/api';

const getFileList = () => {
  let params = '';
  api.fetchApi(params);
}

class FileList extends Component {
  render() {
    return (
      <View>
        <Text style={{padding: 75, fontSize: 25}}>{this.props.text}</Text>
        <Button title={'获取文件列表'} onPress={getFileList}></Button>
      </View>
    );
  }
}

export default FileList;
