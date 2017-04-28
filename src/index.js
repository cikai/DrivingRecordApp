/**
 * Created by cikai on 17-4-27.
 */
import React, {Component} from "react";
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import {
  Navigation,
  Scene,
  Router
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './apps/Home';
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
      Forecast: {
        title: "天气",
        icon: "bolt",
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

  render() {
    const iconSize = 30;
    return (
      <Router>
        {/*下部导航开始*/}
        <Scene key="tabbar" name="tabbar" duration={0} tabs={true} style={styles.tabbarContainer} initial={true}>
          <Scene key="Home" duration={0} component={Home} hideNavBar={true} title="首页" icon={TabBar}/>
          <Scene key="Forecast" duration={0} component={Forecast} hideNavBar={true} title="天气" icon={TabBar}/>
          <Scene key="NetworkInfo" duration={0} component={NetworkInfo} hideNavBar={true} title="网络" icon={TabBar}/>
        </Scene>
        {/*下部导航结束*/}
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
