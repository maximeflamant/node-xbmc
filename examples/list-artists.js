// Generated by CoffeeScript 1.4.0
(function() {
  var TCPConnection, Table, XbmcApi, config, connection, table, xbmcApi, _ref;

  Table = require('cli-table');

  _ref = require('..'), TCPConnection = _ref.TCPConnection, XbmcApi = _ref.XbmcApi;

  config = require('./config');

  connection = new TCPConnection({
    host: config.connection.host,
    port: config.connection.port,
    verbose: true
  });

  xbmcApi = new XbmcApi({
    silent: false,
    connection: connection
  });

  xbmcApi.media.artists({
    //properties: ['genre', 'year']
  });

  
  table = new Table({
    head: ['#', 'Label']
  });
  
  table.options.style.compact = true;

  xbmcApi.on('api:artists', function(artists) {
    var artist, _i, _len;
    console.log("" + artists.length + " Artists");
    for (_i = 0, _len = artists.length; _i < _len; _i++) {
      artist = artists[_i];
      table.push([artist.label]);
    }
    return console.log(table.toString());
  });

}).call(this);
