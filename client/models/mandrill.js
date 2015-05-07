'use strict'

angular.module('web-portfolio')
.factory('Mandrill', function($rootScope, $http, $state){
  function Mandrill(){
  }

  Mandrill.sendMail = function(message){
    console.log('Send Mail is running:', message);
    $http.post('https://mandrillapp.com/api/1.0/messages/send.json', {
      'key': 'cVnY-pVWtCDoUBWzfHlp3g',
      'message': {
        'from_email': message.email,
        'to': [
            {
              'email': 'blueavenger@gmail.com',
              'type': 'to'
            },
          ],
        'autotext': 'true',
        'subject': message.name + ' Contacting from michaeljperez.net',
        'html': message.body
    }})
    .then(function(response){
      swal({
        title:'Thank you!',
        text:'You successfully sent an email to mjosephvp@gmail.com',
        type: 'success',
      }, function() {
        $state.go('portfolio');
      });
    })
    .catch(function(response){
      swal('Sorry!', 'Something went wrong. Please try again.', 'error')
    });
  }

  return Mandrill;
});
