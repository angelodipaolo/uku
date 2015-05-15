const info = require('../package.json');
const endpoints = require('../endpoints');

exports.register = function (server, options, next) {

  // Load up the endpoints
  endpoints.forEach(function(r) {
    server.route(r);
  });

  next();
};

exports.register.attributes = {
  name: 'endpoints',
  version: info.version
};