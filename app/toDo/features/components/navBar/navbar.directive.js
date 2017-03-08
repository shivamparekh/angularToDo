angular
    .module('toDo.component.navbar')
    .directive('navbar', navBar);

function navBar() {

    return {

        restrict: 'E',
        scope: {
            
            navData: '@'
        },
        templateUrl: '/toDo/features/components/navbar/navbar.html',
        controller: NavBarCtrl,
        controllerAs: 'NavBarVM',
        bindToController: true

    };
}

function NavBarCtrl() {

    var vm = this;
    
}