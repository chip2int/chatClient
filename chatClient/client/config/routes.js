angular.module('chatClient')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'mainController',
        templateUrl: 'client/views/main.html',
        resolve: {
          data: function($rootScope, $location) {
            console.log("in config " + $rootScope.chatUserName);
            if ($rootScope.chatUserName === undefined || $rootScope.chatUserName === "") {
              $location.path('/login');
            }
          }
        }
      })
      .when('/login', {
        controller: 'loginController',
        templateUrl: 'client/views/login.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
