"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DemoController = (function () {
    function DemoController($rootScope, $scope, $location, $state) {
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$location = $location;
        this.$state = $state;
        $rootScope.$on('$stateChangeStart', function (event, next, current) {
        });
        $rootScope.$on('$stateChangeSuccess', function (event, current, previous) {
            var newLocation = $location.path();
            $scope.newLocation = newLocation;
        });
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, errorMsg) {
            event.preventDefault();
            return $state.go('error');
        });
    }
    DemoController.prototype.getClass = function (path) {
        return (this.$location.path().substr(0, path.length) === path) ? 'active' : '';
    };
    return DemoController;
}());
DemoController.$inject = ['$rootScope', '$scope', '$location', '$state', DemoController];
exports.DemoController = DemoController;
//# sourceMappingURL=C:/Users/vanbu/WebstormProjects/webpack1/src/app/shared/demo.component.js.map