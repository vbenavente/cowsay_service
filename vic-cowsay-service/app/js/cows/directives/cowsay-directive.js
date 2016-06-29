'use strict';

module.exports = function(app) {
  app.directive('cowSay', function() {
    return {
      templateUrl:'./templates/cows/cowsay-directive.html',
      scope: {
        title: '@'
      },
      controller: function($scope, CowSayService) {
        $scope.makeCow = function(text, file, eyes) {
          $scope.cow = CowSayService.makeCow(text, file, eyes);
        };
        $scope.cow = CowSayService.makeCow();
      }
    };
  });
};
