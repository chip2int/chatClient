angular.module('chatClient')
  .directive('scrollBottom', function() {
    return {
      restrict: 'EAC',
      link: function(scope, element, attributes) {
        scope.$watch(function() {
          element[0].scrollTop = element[0].scrollHeight;
        })
      }
    }
  })
