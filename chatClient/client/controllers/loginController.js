angular.module('chatClient')
  .controller('loginController', function($scope, $location, $rootScope) {

    $scope.getChatUserName = function() {
      console.log($scope.chatUserName);
      if ($rootScope.chatUserName !== undefined && $rootScope.chatUserName !== "" && $scope.chatUserName !== $rootScope.chatUserName) {
        alert("Logging out " + $rootScope.chatUserName);
        $rootScope.chatUserName = "";
      }
      $rootScope.chatUserName = $scope.chatUserName;
      $location.path("/")
    }
  });
