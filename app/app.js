'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', []);
app.controller('ViewCtrl', ['$scope',function($scope) {
  $scope.students = [{
    id: 1,
    name: "Naina",
    age: 18,
    branch: "CSE",
    attendance: 70,
    marks: 87
  }, {
    id: 2,
    name: "Saquib",
    age: 64,
    branch: "EEE",
    attendance: 80,
    marks: 99
  }, {
    id: 3,
    name: "Digender",
    age: 38,
    branch: "MECHANICAL",
    attendance: 90,
    marks: 89
  }, {
    id: 4,
    name: "Vishu",
    age: 50,
    branch: "CSE",
    attendance: 50,
    marks: 97
  }];

  $scope.predicate = 'id';
  $scope.sort = function(colName) {
    if ($scope.predicate.indexOf('-') < 0) {
      $scope.predicate = '-' + colName;
    } else {
      $scope.predicate = colName;
    }
  }
}]);
