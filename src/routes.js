"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RouteConfig = (function () {
    function RouteConfig($stateProvider, $urlRouterProvider) {
        var home = {
            name: 'Home',
            url: '/home',
            templateUrl: 'app/home/home.component.html'
        };
        var user = {
            name: 'User',
            url: '/user',
            templateUrl: 'app/user/user.component.html'
        };
        var help = {
            name: 'Help',
            url: '/help',
            templateUrl: 'app/help/help.component.html'
        };
        var login = {
            name: 'Login',
            url: '/login',
            templateUrl: 'app/login/login.component.html'
        };
        var admin = {
            name: 'Admin',
            url: '/admin',
            templateUrl: 'app/admin/admin.component.html'
        };
        var error = {
            name: 'error',
            url: '/error',
            templateUrl: 'app/error/pagenotfound.component.html',
            resolve: {
                errorObj: [function () {
                        return this.self.error;
                    }]
            },
            controller: function ($scope, $stateParams, errorObj) {
                $scope.mainObj = errorObj;
            }
        };
        $stateProvider
            .state(home)
            .state(user)
            .state(admin)
            .state(help)
            .state(error)
            .state(login);
        $urlRouterProvider.otherwise('/home');
    }
    return RouteConfig;
}());
RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
exports.RouteConfig = RouteConfig;
//# sourceMappingURL=C:/Users/vanbu/WebstormProjects/webpack1/src/routes.js.map