var angular = require('./../../angular.js');
var controllers = require('./controllers');

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$httpProvider', 
	function($routeProvider, $httpProvider) {

	}
);

app.controller('MyCtrl1', controllers.MyCtrl1);
app.controller('MyCtrl1', controllers.MyCtrl2);

