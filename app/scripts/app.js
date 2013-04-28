'use strict';

var saveINTEapp = angular.module('saveINTEapp', []);

saveINTEapp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
