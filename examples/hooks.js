// Generated by CoffeeScript 1.4.0
(function() {
  var TCPConnection, XbmcApi, connection, xbmcApi;

  TCPConnection = require('../lib/TCPConnection');

  XbmcApi = require('../lib/XbmcApi');

  connection = new TCPConnection({
    host: '127.0.0.1',
    port: 9090
  });

  xbmcApi = new XbmcApi;

  xbmcApi.setConnection(connection);

  xbmcApi.on('connection:data', function() {
    return console.log('onData');
  });

  xbmcApi.on('connection:open', function() {
    return console.log('onOpen');
  });

  xbmcApi.on('connection:close', function() {
    return console.log('onClose');
  });

  xbmcApi.on('connection:error', function() {
    return console.log('onError');
  });

  xbmcApi.on('api:movie', function(details) {
    return console.log('onMovie', details);
  });

  xbmcApi.on('api:episode', function(details) {
    return console.log('onEpisode', details);
  });

  xbmcApi.on('api:playerStopped', function() {
    return console.log('onPlayerStopped');
  });

  xbmcApi.on('api:video', function() {
    return console.log('onVideo');
  });

  xbmcApi.on('notification:play', function() {
    return console.log('onPlay');
  });

  xbmcApi.on('notification:pause', function() {
    return console.log('onPause');
  });

  xbmcApi.on('notification:add', function() {
    return console.log('onPause');
  });

  xbmcApi.on('notification:update', function() {
    return console.log('onPause');
  });

  xbmcApi.on('notification:clear', function() {
    return console.log('onPause');
  });

  xbmcApi.on('notification:scanstarted', function() {
    return console.log('onPause');
  });

  xbmcApi.on('notification:scanfinished', function() {
    return console.log('onPause');
  });

  xbmcApi.on('notification:screensaveractivated', function() {
    return console.log('onPause');
  });

  xbmcApi.on('notification:screensaverdeactivated', function() {
    return console.log('onPause');
  });

  console.log('done');

}).call(this);
