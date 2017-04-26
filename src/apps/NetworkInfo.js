import React, { Component } from 'react';
import {
  View,
  Text,
  NetInfo
} from 'react-native';

class NetworkInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };
  }
  componentWillMount() {
    NetInfo.fetch().done((status) => {
      this.setState({status});
    });

  }
  render() {
    return (
      <View>
        <Text style={{paddingTop: 60,paddingLeft: 10,fontSize: 20}}>当前网络：{this.state.status}</Text>
      </View>
    );
  }
}

export default NetworkInfo;
