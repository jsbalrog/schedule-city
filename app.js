angular.module('scheduleApp', ['firebase'])

.controller('mainController', function($scope, $firebase) {

  // connect to Firebase
  var ref = new Firebase('http://torid-fire-7656.firebaseIO.com/days');
  var fb = $firebase(ref);

  var syncObject = fb.$asObject();
  syncObject.$bindTo($scope, 'days');

  // function to set the default data
  $scope.reset = function() {
    fb.$set({
      monday: {
        name: 'Monday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      },
      tuesday: {
        name: 'Tuesday',
        slots: {
          0900: {
            time: '9:00am',
            booked: false
          },
          0110: {
            time: '11:00am',
            booked: false
          }
        }
      }
    });
  };

});
