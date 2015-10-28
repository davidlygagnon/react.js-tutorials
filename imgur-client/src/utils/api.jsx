var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var contants = require('../constants/constants') // file not on github. Basically, get your own api key and use it here.

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + contants.getImgurApiKey()
      }
    })
    .then(function (response) {
      return response.json();
    });
  }
}
