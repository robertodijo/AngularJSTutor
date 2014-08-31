/**
 * 
 */
var myAppModule=angular.module('myApp', []);

var messages = {};
messages.greetingText="Roberto";
messages.long="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac pellentesque lacus, nec molestie enim. Duis vitae molestie augue.  Nunc vestibulum pharetra vehicula. Aenean non quam volutpat, placerat metus ac,  consectetur libero.";
messages.short="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
messages.introduction = messages.long;
myAppModule.controller('TextController',
function($scope){
	$scope.messages=messages;
});