'use strict';

const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('CowSayService', function() {
    const service = {};

    service.makeCow = function(text, file) {
      file = file || 'beavis.zen';
      text = text || 'moo';
      return cowsay.say({
        text,
        f: file
      });
    };
    return service;
  });
};
