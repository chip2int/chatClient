angular.module('chatClient')
  .factory('getPostChatMessages', function() {
    return {
      messages: [{
        'user': 'Tom',
        'message': 'Hello'
      }, {
        'user': 'Nell',
        'message': 'Bye'
      }, {
        'user': 'Tom',
        'message': 'What?'
      }, {
        'user': 'Kat',
        'message': 'Salut!'
      }, {
        'user': 'Tom',
        'message': 'Today is the day!'
      }, {
        'user': 'Nell',
        'message': 'Sunday??'
      }, ],

      postMessage: function(message) {
        // Post to the chat server
        this.messages.push(message);
      },

      getMessages: function() {
        // Get messages from the chat server
        // Ideally the messages would be retrieved on a regular basis
        return this.messages;
      }
    }
  })
