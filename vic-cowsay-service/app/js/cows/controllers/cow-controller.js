'use strict';

module.exports = function(app) {
  app.controller('CowController', function(CowSayService) {
    this.cowsay = function(text, file) {
      this.cowdata = CowSayService.makeCow(text, file);
    };
  });
};
