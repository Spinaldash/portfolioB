'use strict';

angular.module('web-portfolio')
.controller('PortfolioCtrl', function($rootScope, $scope, $state, $firebaseObject, User){
  function hello(){
    User.hello();
    console.log($state.current.name)
  }
  console.log('Portfolo.js: portfolio is included: ', $state.current.name)
  hello();
});
