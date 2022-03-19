/* eslint-disable */
let mocker;

const HttpRequestMock = require('http-request-mock');
mocker = HttpRequestMock.setup();
mocker.mock({
  "url": "https://www.api.com/req1",
  "method": "GET",
  "body": require('./samples/req1.js'),
  "delay": 500
});
mocker.mock({
  "url": "https://www.api.com/req2",
  "method": "GET",
  "body": require('./samples/req2.js'),
  "delay": 600
});
mocker.mock({
  "url": "https://www.api.com/req3",
  "method": "POST",
  "body": require('./samples/req3.js'),
  "delay": 700
});

module.exports = mocker;
/* eslint-enable */
