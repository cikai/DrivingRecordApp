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
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  lazy: false
});

export default App;
