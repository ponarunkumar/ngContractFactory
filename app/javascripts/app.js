

var app = angular.module('campaignApp', []);

var truffleContract = require("truffle-contract");
var campaignJson = require("../../build/contracts/Campaign.json");
var Campaign = truffleContract(campaignJson);
// configure preferences for the angular app

app.config(function($locationProvider){
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});

// define an angular controller with some angular features

app.controller("campaignController",
	['$scope', '$location', '$http', '$q', '$window', '$timeout',
		function($scope, $location, $http, $q, $window, $timeout) {

			Campaign.deployed()
			.then(function(_instance){
				$scope.contract = _instance;
				console.log("The contract:", $scope.contract);
			})

}]);