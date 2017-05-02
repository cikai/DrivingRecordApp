/**
 * Created by cikai on 17-5-2.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Capture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      wendu: ""
    };
  }

  startCapture(e) {
    ToastAndroid.show('拍照', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={style.body}>
        <View style={style.video_box}>
          <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>视频区域</Text>
        </View>
        <TouchableHighlight style={style.capture_button} onPress={this.startCapture.bind(this)}>
          <View>
            <Icon name="camera" size={50} style={{
              color: 'white',
              justifyContent: 'center',
              textAlign: 'center',
              paddingTop: 5
            }}/>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "azure"
  },
  video_box: {
    width: 320,
    height: 240,
    marginTop: 20,
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  capture_button: {
    width: 150,
    height: 150,
    marginTop: 75,
    justifyContent: 'center',
    borderRadius: 75,
    backgroundColor: 'mediumseagreen',
    overflow: 'hidden'
  }
});

export default Capture;
