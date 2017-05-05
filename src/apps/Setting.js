/**
 * Created by cikai on 2017/5/4.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../utilities/api';

const parseString = require('react-native-xml2js').parseString;

// Free capture number
const getFreeCaptureNumber = (thisx) => {
  api.fetchApi('custom=1&cmd=1003').then((res) => parseString(res, function (err, result) {
    if (result.Function.Cmd[0] == '1003' && result.Function.Status[0] == '0') {
      thisx.setState({
        free_capture_number: result.Function.Value[0]
      });
    } else {
      thisx.setState({
        free_capture_number: '0'
      });
    }
  }));
}

// Movie recording time
const getMovieRecordingTime = (thisx) => {
  api.fetchApi('custom=1&cmd=2016').then((res) => parseString(res, function (err, result) {
    if (result.Function.Cmd[0] == '2016' && result.Function.Status[0] == '0') {
      thisx.setState({
        movie_recording_time: result.Function.Value[0]
      });
    } else {
      thisx.setState({
        movie_recording_time: '0'
      });
    }
  }));
}

class Setting extends Component {
  static navigationOptions = {
    tabBarLabel: '设置',
    tabBarIcon: ({tintColor}) => (
      <Icon name={'cog'} size={25}/>
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      free_capture_number: "",
      movie_recording_time: ""
    };
  }

  componentDidMount() {
    // Free capture number
    getFreeCaptureNumber(this);
    // Movie recording time
    getMovieRecordingTime(this);
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 20}}>照片剩余空间：{this.state.free_capture_number} 张</Text>
        <Text style={{fontSize: 20}}>当前录像时间：{this.state.movie_recording_time} 秒</Text>
      </View>
    )
  }
}

export default Setting;
