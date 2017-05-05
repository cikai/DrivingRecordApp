const api = {
  fetchApi(params) {
    let url = `http://192.168.1.254/?${params}`;
    return fetch(url).then(res => res.text());
  }
};

module.exports = api;
