angular.module('chatClient')
  .controller('mainController', function($scope, $location, $rootScope, getPostChatMessages) {

    $scope.chatUserName = $rootScope.chatUserName;

    $scope.addChatMessage = function() {
      var message = {
        'user': $scope.chatUserName,
        'message': $scope.chatMessage
      };

      getPostChatMessages.postMessage(message);
      $scope.chatMessage = "";
    }

    $scope.messages = getPostChatMessages.getMessages();

    $scope.logout = function() {
      $scope.chatUserName = "";
      $rootScope.chatUserName = "";
      $location.path('/login');
    }
  });
