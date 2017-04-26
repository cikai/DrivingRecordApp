var parseString = require('react-native-xml2js').parseString;

var api = {
  fetchApi(params) {
    // let url = `http://192.168.1.254/?${params}`;
    let url = `http://wthrcdn.etouch.cn/WeatherApi?citykey=101010100`;
    fetch(url).then(res => res.text()).then(function(data){
      parseString(data, function (err, result) {
        console.log(result);
        return result;
      });
    }).catch(function(err){
      console.log(err);
    });
  }
};

module.exports = api;
