angular 
	.module('toDo.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl($http, $scope) {

	var vm = this;

	content.getContent(vm.elements);
	
	vm.update = function(id) {

		content.updateItem(id, true)

	}

	
}