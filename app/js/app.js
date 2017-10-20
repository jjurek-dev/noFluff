angular
    .module('noFluffApp', [
        'noFluffApp.controller',
        'noFluffApp.service',
        'ui.router',
        'ngMaterial',
        'ngMessages'])
    .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'tpl/mainTpl.ng.html'
            })
            .state('add', {
                url: '/add',
                views: {
                    '@': {
                        templateUrl: 'tpl/addTpl.ng.html',
                        controller: 'noFluffController',
                        controllerAs: 'ctrl'
                    }
                }
            });
        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('home');
        });
        $mdThemingProvider.theme('default')
            .primaryPalette('grey');
    }).run(function($rootScope){
        $rootScope.$on('$locationChangeSuccess', function() {
            window.scrollTo(0, 0);
        });
    });