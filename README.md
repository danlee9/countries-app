Countries App
=========================

Angular App that displays informations about the countries of the world.

Information obtained from http://www.geonames.org/export/web-services.html

Deployed to GHpages: http://danlee9.github.io/countries-app

Demonstrates the following:

```
1. Package management by npm and bower
2. Streaming build system by javascript task runner gulp
3. Animations with angular-animate and CSS transitions
4. Routing and route resolves with angular-route
5. Promises with $q
6. Promise chaining with both .then and .success
7. Services to make $http requests to the the geonames webservices API
8. HTML partials with data instantiated from geonames API
9. Use of angular services like $route, $location, $timeout, and $rootScope
```

 Steps to Run Project (must have have nodejs installed)

```
 git clone https://github.com/danlee9/countries-app.git
 cd countries-app
 npm install
 bower install
 gulp build
 npm install -g http-server
 cd app or cd build
 http-server
```
