import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

var parseString = require('react-native-xml2js').parseString;

class Forecast extends Component {
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
    return (
      <View style={style.body}>
        <Text style={{padding: 75, fontSize: 25}}>{this.props.text}</Text>
        <TouchableHighlight style={style.button}>
          <Text style={{
            fontSize: 20,
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: 5
          }} onPress={this.getForecast.bind(this)}>更  新</Text>
        </TouchableHighlight>
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
