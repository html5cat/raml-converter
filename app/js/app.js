'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.codemirror',
  'ramlEditorApp'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

// angular.module('ramlEditorApp')
//       .factory('MyFileSystem', function ($q, config, eventService) {
//         var service = {};

//         service.directory = function (path) {
//           var deferred = $q.defer();

//           // Your magic goes here:
//            // Do deferred.resolve(data); to fulfull the promise or
//            // deferred.reject(error); to reject it.

//            return deferred.promise;
//         };

//         service.load = function (path, name) {
//           var deferred = $q.defer();

//           // Your magic goes here:
//            // Do deferred.resolve(data); to fulfull the promise or
//            // deferred.reject(error); to reject it.

//            return deferred.promise;
//         };

//         service.remove = function (path, name) {
//           var deferred = $q.defer();

//           // Your magic goes here:
//            // Do deferred.resolve(data); to fulfull the promise or
//            // deferred.reject(error); to reject it.

//            return deferred.promise;
//         };

//         service.save = function (path, name, contents) {
//           var deferred = $q.defer();

//           // Your magic goes here:
//            // Do deferred.resolve(data); to fulfull the promise or
//            // deferred.reject(error); to reject it.

//            return deferred.promise;
//         };

//         return service;
//       })
//       .run(function (MyFileSystem, config, eventService) {
//         // Set MyFileSystem as the filesystem to use
//         config.set('fsFactory', 'MyFileSystem');

//         // In case you want to send notifications to the user
//         // (for instance, that he must login to save).
//         // The expires flags means whether
//         // it should be hidden after a period of time or the
//         // user should dismiss it manually.
//         eventService.broadcast('event:notification',
//           {message: 'File saved.', expires: true});

//       });

// angular.bootstrap(document.getElementById('ramlEditor'), ['ramlEditorApp']);

