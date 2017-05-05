import React, { Component } from 'react';
import {
  View,
  Text,
  NetInfo,
  TextInput,
  StyleSheet,
  ToastAndroid,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import wifi from 'react-native-android-wifi';

class NetworkInfo extends Component {
  static navigationOptions = {
    tabBarLabel: '网络',
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'wifi'} size={25}/>
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      type: "",
      isWifiOn: false,
      isEnabled: "",
      ssid: "DV_08ea4053c687",
      password: "",
      current_ssid: "",
      mac_addr: "",
      level: "",
      ip: ""
    };
  }
  componentWillMount() {
    NetInfo.fetch().done((type) => {
      this.setState({type});
    });

    wifi.isEnabled((isEnabled) => {
      if (isEnabled) {
        this.setState({isEnabled: "wifi 已开启"});
      } else {
        this.setState({isEnabled: "wifi 未开启"});
      }
    });
  }

  wifiSwitcher (e) {
    if (this.state.isWifiOn) {
      wifi.setEnabled(false);
      this.setState({isEnabled: "wifi 未开启"});
      this.setState({isWifiOn: false});
    } else {
      wifi.setEnabled(true);
      this.setState({isEnabled: "wifi 已开启"});
      this.setState({isWifiOn: true});
    }
  }

  connectWifi (e) {
    let ssid = this.state.ssid;
    let password = this.state.password;
    wifi.findAndConnect(ssid, password, (found) => {
      if (!found) {
        ToastAndroid.show('未搜索到此热点！', ToastAndroid.SHORT);
      }
    });
  }

  getWifiInfo (e) {
    if (this.state.type == "WIFI") {
      const thisx = this;
      wifi.getSSID((ssid) => {
        thisx.setState({current_ssid: ssid});
      });
      wifi.getBSSID((addr) => {
        thisx.setState({mac_addr: addr});
      });
      wifi.getCurrentSignalStrength((levels) => {
        thisx.setState({level: levels});
      });
      wifi.getIP((addr) => {
        thisx.setState({ip: addr});
      });
    }
  }

  render() {
    return (
      <View style={style.body}>
        <Text style={{fontSize: 20}}>当前网络：{this.state.type}</Text>
        <Text style={{fontSize: 20}}>wifi状态：{this.state.isEnabled}</Text>
        <Button title={"wifi开关"} onPress={this.wifiSwitcher.bind(this)}></Button>
        <View>
          <TextInput placeholder={"SSID"} onChangeText={(ssid) => this.setState({ssid})}></TextInput>
          <TextInput placeholder={"密码"} onChangeText={(password) => this.setState({password})}></TextInput>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button title={"行车记录仪"} onPress={()=>this.setState({ssid: "DV_08ea4053c687"})}></Button>
          <Button title={"连接wifi"} onPress={this.connectWifi.bind(this)}></Button>
          <Button title={"断开连接"} onPress={()=>wifi.disconnect()}></Button>
          <Button title={"获取wifi信息"} onPress={this.getWifiInfo.bind(this)}></Button>
        </View>
        <View>
          <Text style={{fontSize: 20}}>当前SSID：{this.state.current_ssid}</Text>
          <Text style={{fontSize: 20}}>MAC地址：{this.state.mac_addr}</Text>
          <Text style={{fontSize: 20}}>信号强度：{this.state.level}</Text>
          <Text style={{fontSize: 20}}>IP地址：{this.state.ip}</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "azure"
  }
});

export default NetworkInfo;
