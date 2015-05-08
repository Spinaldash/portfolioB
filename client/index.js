'use strict';

angular.module('web-portfolio', ['firebase', 'ui.router', 'ngAnimate']);

(function($){
  $(function(){
    $('.button-collapse').sideNav({
      menuWidth: 240, // Default is 240
      edge: 'left',
      closeOnClick: false
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
