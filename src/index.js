/**
 * Created by cikai on 17-4-27.
 */
import React from "react";
import {
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

import Home from './apps/Home';
import Capture from './apps/Capture';
import Forecast from './apps/Forecast';
import NetworkInfo from './apps/NetworkInfo';
import Setting from './apps/Setting';

const App = TabNavigator({
  Home: {
    screen: Home
  },
  Capture: {
    screen: Capture
  },
  Forecast: {
    screen: Forecast
  },
  NetworkInfo: {
    screen: NetworkInfo
  },
  Settings: {
    screen: Setting
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: 'cornflowerblue',
    inactiveTintColor: 'gray',
  }
});

export default App;
