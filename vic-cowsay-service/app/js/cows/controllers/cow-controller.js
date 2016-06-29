'use strict';

module.exports = function(app) {
  app.controller('CowController', function() {
    this.title = 'Check Out My Cows!';
    // this.cowsay = function(text, file, eyes) {
    //   this.cowdata = CowSayService.makeCow(text, file, eyes);
    // };
  });
};
