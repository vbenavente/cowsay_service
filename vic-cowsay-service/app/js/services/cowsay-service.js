'use strict';

const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('CowSayService', function() {
    const service = {};

    const changeCowEyes = function(text, file, eyes) {
      return cowsay.say({
        text,
        f: file,
        e: eyes
      });
    };

    service.makeCow = function(text, file, eyes) {
      file = file || 'cowsay';
      text = text || 'moo';
      if(eyes) return changeCowEyes(text, file, eyes);
      return cowsay.say({
        text,
        f: file
      });
    };
    return service;
  });
};
