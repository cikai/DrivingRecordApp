import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    header: {
      headerTitle: 'asdf'
    },
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'home'} size={25}/>
    )
  };

  render() {
    return (
      <View style={style.body}>
        <TouchableHighlight style={style.touchable}>
          <Text style={{
            fontSize: 20,
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 5
          }} onPress={() => this.props.navigation.navigate('NetworkInfo')}>网络状态</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 75

  },
  touchable: {
    margin: 10,
    width: 120,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'cornflowerblue',
    overflow: 'hidden'
  }
});

export default Home;
