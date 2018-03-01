(function() {
    angular
        .module('app')
        .config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
                // home page
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'MainCtrl'
                })
                // states selector
                .when('/states', {
                    templateUrl: 'views/states.html',
                    controller: 'StatesCtrl'
                });

            $locationProvider.html5Mode(true);
    }
})();
