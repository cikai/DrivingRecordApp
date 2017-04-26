import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './apps/Home';
import FileList from './apps/FileList';
import NetworkInfo from './apps/NetworkInfo';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Home" component={Home} title="首页" initial={true} />
          <Scene key="FileList" component={FileList} title="文件管理器" />
          <Scene key="NetworkInfo" component={NetworkInfo} title="网络状态" />
        </Scene>
      </Router>
    );
  }
}
