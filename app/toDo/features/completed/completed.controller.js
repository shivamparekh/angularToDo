angular
	.module('toDo.completed')
	.controller('CompletedCtrl', CompletedCtrl);

function CompletedCtrl($scope, $http) {

	var vm = this;

	vm.content = [];

	$http({

		method: 'GET',
		url: '/api/table'

	}).then(function(response){

		console.log(response);

		response.data.forEach(function(element){

			vm.content.push(element);

		});


	

}