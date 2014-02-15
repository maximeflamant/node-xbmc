var Xbmc = require('xbmc');

var connection = new TCPConnection({
  host: config.connection.host,
  port: config.connection.port,
  verbose: true
});

var xbmcApi = new Xbmc.XbmcApi;

xbmcApi.setConnection(connection);

xbmcApi.player.openSong(136);