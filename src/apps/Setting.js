/**
 * Created by cikai on 2017/5/4.
 */

import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var parseString = require('react-native-xml2js').parseString;

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
      free_pic_num: ""
    };
  }

  componentDidMount() {
    var thisx = this;
    let url = `http://192.168.1.254?custom=1&cmd=1003`;
    fetch(url).then(res => res.text()).then((res) => parseString(res, function (err, result) {
      if (result.Function.Cmd[0] == '1003' && result.Function.Status[0] == '0') {
        thisx.setState({
          free_pic_num: result.Function.Value[0]
        });
      } else {
        thisx.setState({
          free_pic_num: '0'
        });
      }
    }));
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 20}}>照片剩余空间：{this.state.free_pic_num} 张</Text>
      </View>
    )
  }
}

export default Setting;
