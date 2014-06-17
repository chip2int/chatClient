chatClient
==========

This project is a chat client built using Angular.js.

The chatClient displays chat messages from a server. The chat messages for this project are obtained through a
locally hardcoded object, which has the chat user name and the chat message.

The chatClient provides a login page and when the user name is entered, the main view with the chat messages are displayed.

Code has also been added to protect the routes. When the main page is accessed by changing the url, the user is forced back
to the login page. Similarly, when the user after logging in, changes to the url to the login view, the entered user
name is display, if this is changed, then the previous user is automatically logged out.


To display the application, Python server is being used.

To start the application execute
  python -m SimpleHTTPServer
  
and the application is displayed at http://localhost:8000.

New chat messages are displayed at the bottom of the screen and the scrolling is implemeted as an Angular directive.
