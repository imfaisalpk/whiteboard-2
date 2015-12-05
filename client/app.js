angular.module('whiteboard', [
  'whiteboard.board',
  'whiteboard.services.board',
  'whiteboard.services.draw',
  'ngRoute'
])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'board.html',
        controller: 'BoardCtrl',
        controllerAs: 'board'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}])
// .controller('BoardCtrl', function ($scope, Draw) {
//   $scope.canvasClick = function () {
//     console.log('Clicked a Canvas!')
//   };
//   $scope.circleClick = function () {
//     console.log('Clicked a Circle?')
//   };
// });
