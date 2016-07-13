'use strict';

var dukc = angular.module('dukcWebsite', []);

dukc.controller('PanelController', ['$scope', function ($scope) {
  $scope.tab = 1;
  $scope.pages = ['Home', 'New Members', 'Kayaking', 'Trips Away', 'Committee', 'Forum', 'Contact', 'Gallery'];
  $scope.currpage = $scope.pages[0];

    $scope.selectTab = function(setTab){
      $scope.tab = setTab;
      $scope.currpage = $scope.pages[$scope.tab - 1];
    };

    $scope.isSelected = function(checkTab){
      return $scope.tab === checkTab;
    };
  
}]);
