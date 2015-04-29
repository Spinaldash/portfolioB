'use strict';

angular.module('web-portfolio')
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('portfolio', {url:'/', templateUrl:'/views/pages/portfolio.html', controller:'PortfolioCtrl'})
      .state('about', {url:'/about', templateUrl:'views/pages/about.html'})
      .state('contact', {url:'/contact', templateUrl:'views/pages/contact.html'});
      // .state('register', {url:'/register', templateUrl:'/views/users/users.html', controller:'UsersCtrl'})
      // .state('login', {url:'/login', templateUrl:'/views/users/users.html', controller:'UsersCtrl'})
      //
      // .state('trades', {url:'/trades', templateUrl:'/views/trades/trades_index.html', controller:'TradesCtrl'})
      //
      // .state('items', {url:'/items', templateUrl:'/views/items/items.html', abstract:true})
      // .state('items.new', {url:'/new', templateUrl:'/views/items/items_new.html', controller:'ItemsCtrl'})
      // .state('items.show', {url:'/show/{itemId}', templateUrl:'/views/items/items_show.html', controller:'ItemsCtrl'})
      // .state('items.index', {url:'/', templateUrl:'/views/items/items_index.html', controller:'ItemsCtrl'})
      // .state('items.inventory', {url:'/inventory', templateUrl:'/views/items/items_inventory.html', controller:'ItemsCtrl'});
  });
  // .run(['$rootScope', 'User', function($rootScope, User){
  //   User.status().then(function(response){
  //     $rootScope.userName = response.data.userName;
  //     $rootScope.userId = response.data.userId;
  //   });
  // }]);
