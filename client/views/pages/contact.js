'use strict';

angular.module('web-portfolio')
.controller('ContactCtrl',['$scope', '$http', 'Mandrill', function($scope, $http, Mandrill){


  $scope.submitMail = function(message){
    Mandrill.sendMail(message);
  }


}]);
