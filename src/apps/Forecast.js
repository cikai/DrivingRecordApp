import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var parseString = require('react-native-xml2js').parseString;

class Forecast extends Component {
  static navigationOptions = {
    tabBarLabel: '天气',
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'umbrella'} size={25}/>
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      city: "",
      wendu: ""
    };
  }

  getForecast (e) {
    var thisx = this;
    let url = `http://wthrcdn.etouch.cn/WeatherApi?citykey=101070101`;
    fetch(url).then(res => res.text()).then((res) => parseString(res, function (err, result) {
      thisx.setState({
        city: result.resp.city[0],
        wendu: result.resp.wendu[0] + "℃"
      });
    }));
  }

  render() {
    const {state} = this.props.navigation;
    console.log(state);
    return (
      <View style={style.body}>
        <TouchableOpacity style={style.button}>
          <Text style={{
            fontSize: 20,
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 5
          }} onPress={this.getForecast.bind(this)}>更  新</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 25}}>{this.state.city}</Text>
        <Text style={{fontSize: 25}}>{this.state.wendu}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "azure"
  },
  button: {
    margin: 10,
    width: 150,
    height: 150,
    justifyContent: 'center',
    borderRadius: 75,
    backgroundColor: 'cornflowerblue',
    overflow: 'hidden'
  }
});

export default Forecast;
