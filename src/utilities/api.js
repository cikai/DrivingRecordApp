var fetch = require('node-fetch');

var URL = 'http://192.168.1.254/';

var api = {
  getFileList() {
    let url = URL + "?custom=1&cmd=3015";
    fetch(url)
      .then(function(res) {
        console.log(res.text());
        return res.text();
      }).then(function(body) {
        console.log(body);
    });
  }
};

module.exports = api;
