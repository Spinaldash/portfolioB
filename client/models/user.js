'use strict'

angular.module('web-portfolio')
.factory('User', function($rootScope){
  function User(){
  }

  User.hello = function(){
    console.log('hello from the User factory');
  }

  return User;
});
