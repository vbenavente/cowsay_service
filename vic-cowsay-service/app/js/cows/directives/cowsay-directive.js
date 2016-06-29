'use strict';

module.exports = function(app) {
  app.directive('cowSay', function() {
    return {
      templateUrl:'./templates/cows/cowsay-directive.html',
      scope: {
        text: '=',
        file: '@'
      },
      controller: function($scope, CowSayService) {
        $scope.cow = CowSayService.makeCow($scope.text, $scope.file);
      }
    };
  });
};
