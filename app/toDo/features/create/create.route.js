angular
    .module('toDo.create')
    .config(CreateConfig);

function CreateConfig($stateProvider) {

    $stateProvider.state({
    	
        name: 'create',
        url: '/create',
        templateUrl: 'toDo/features/create/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'CreateVM'

    });
}