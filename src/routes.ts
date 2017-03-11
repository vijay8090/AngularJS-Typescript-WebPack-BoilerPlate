

    export class RouteConfig {

        public static $inject = ['$stateProvider', '$urlRouterProvider'];

        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {

            const home = {
                name : 'Home',
                url: '/home',
                templateUrl: 'app/home/home.component.html'
            };

            const user = {
                name: 'User',
                url: '/user',
                templateUrl: 'app/user/user.component.html'
            };

            const help = {
                name: 'Help',
                url: '/help',
                templateUrl: 'app/help/help.component.html'
            };

            const login = {
                name: 'Login',
                url: '/login',
                templateUrl: 'app/login/login.component.html'
            };

            const admin = {
                name: 'Admin',
                url: '/admin',
                templateUrl: 'app/admin/admin.component.html'
            };

            const city = {
                name: 'City',
                url: '/city',
                templateUrl: 'app/city/city.component.html'
            };

            const error = {
                name: 'error',
                url: '/error',
                templateUrl: 'app/error/pagenotfound.component.html',
                resolve: {
                    errorObj: [function () {
                        return this.self.error;
                    }]
                },
                controller: function ($scope: ng.IScope, $stateParams: ng.ui.IStateParamsService, errorObj: Object) {
                    $scope.mainObj = errorObj;
                }
            };


            $stateProvider
                .state(home)
                .state(user)
                .state(admin)
                .state(help)
                .state(error)
                .state(city)
                .state(login);

            $urlRouterProvider.otherwise('/home');
        }
    }

