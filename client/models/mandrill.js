'use strict'

angular.module('web-portfolio')
.factory('Mandrill', function($rootScope, $http){
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
      console.log('response is:', response);
    })
    .catch(function(response){
      console.log('response is:', response);
    })
  }

  return Mandrill;
});
