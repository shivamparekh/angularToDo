angular
    .module('toDo.list')
    .config(ListConfig);

function ListConfig($stateProvider) {

    $stateProvider.state({
    	
        name: 'list',
        url: '/',
        templateUrl: 'toDo/features/list/list.html',
        controller: 'ListCtrl',
        controllerAs: 'ListVM'

    });
}