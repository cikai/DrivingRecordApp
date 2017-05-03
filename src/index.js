/**
 * Created by cikai on 17-4-27.
 */
import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  BackAndroid,
  Platform
} from "react-native";
import {
  Navigation,
  Scene,
  Router
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './apps/Home';
import Capture from './apps/Capture';
import Forecast from './apps/Forecast';
import NetworkInfo from './apps/NetworkInfo';

class TabBar extends Component {
  constructor(props) {
    super(props);
    this.data = {
      Home: {
        title: "首页",
        icon: "home",
      },
      Capture: {
        title: "拍照",
        icon: "camera",
      },
      NetworkInfo: {
        title: "网络",
        icon: "wifi",
      }
    }
  }

  render() {
    let param = this.data[this.props.sceneKey];
    let activeStyle = this.props.selected ? {color: "#3399FF"} : {};
    return <View>
      <Icon name={param.icon} color={activeStyle.color} size={25}/>
      <Text style={[activeStyle, styles.tabbarItem]}>{param.title}</Text>
    </View>
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  onBackAndroid = () => {
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      return false;
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用');
    return true;
  };

  render() {
    return (
      <Router>
        <Scene key="tabbar" name="tabbar" duration={0} tabs={true} style={styles.tabbarContainer} initial={true}>
          <Scene key="Home" duration={0} component={Home} hideNavBar={true} title="首页" icon={TabBar}/>
          <Scene key="Capture" duration={0} component={Capture} hideNavBar={true} title="拍照" icon={TabBar}/>
          <Scene key="NetworkInfo" duration={0} component={NetworkInfo} hideNavBar={true} title="网络" icon={TabBar}/>
          <Scene key="Forecast" duration={0} component={Forecast} hideNavBar={true} title="天气"/>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  tabbarContainer: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  tabbarItem: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginLeft: -3
  }
})
