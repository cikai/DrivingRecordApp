import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
  render() {
    const goToFileList = () => Actions.FileList({text: '浏览文件'});
    return (
      <View style={{flex: 1}}>
        <TouchableHighlight style={style.touchable}>
          <Text style={{
            fontSize: 20,
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 5
          }} onPress={goToFileList}>文件管理器</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const style = StyleSheet.create({
  touchable: {
    margin: 75,
    width: 120,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'cornflowerblue',
    overflow: 'hidden'
  }
});

export default Home;
