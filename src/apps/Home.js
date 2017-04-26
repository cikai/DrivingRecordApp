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
    const goToNetworkInfo = () => Actions.NetworkInfo({text: '当前网络状态'});
    return (
      <View style={{flex: 1, marginTop: 75}}>
        <TouchableHighlight style={style.touchable}>
          <Text style={{
            fontSize: 20,
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 5
          }} onPress={goToFileList}>文件管理器</Text>
        </TouchableHighlight>
        <TouchableHighlight style={style.touchable}>
          <Text style={{
            fontSize: 20,
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 5
          }} onPress={goToNetworkInfo}>网络状态</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const style = StyleSheet.create({
  touchable: {
    marginTop: 20,
    width: 120,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'cornflowerblue',
    overflow: 'hidden'
  }
});

export default Home;
