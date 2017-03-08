angular

    .module('toDo', [

        // global dependencies

        'ui.router',

        'toDo.completed',

		'toDo.create',
		
		'toDo.list',

        'toDo.component.navbar'

    ])

    .config(appConfig);

function appConfig($urlRouterProvider) {

    // Here we configure the application

    // If the URL does not exist as a route, redirect to /

    $urlRouterProvider.otherwise('/');
}