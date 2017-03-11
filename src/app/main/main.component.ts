/**
 * Created by vanbu on 10-03-2017.
 */

/**
 * Created by vanbu on 09-03-2017.
 */

export class MainController {

    static $inject = ['$rootScope', '$scope', '$location', '$state'];

    // private $location: ng.ILocationService;

    constructor(private $rootScope: ng.IRootScopeService,
                private $scope: ng.IScope,
                private $location: ng.ILocationService,
                private $state: ng.ui.IStateService) {

        // this.$location = $location;

        $rootScope.$on('$stateChangeStart', function (event, next, current) {
            // removeGlobalMsg();
        });

        $rootScope.$on('$stateChangeSuccess', function (event, current, previous) {

            const newLocation = $location.path();
            $scope.newLocation = newLocation;

        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, errorMsg) {

            // alert('ROUTE CHANGE ERROR: ' + errorMsg);
            event.preventDefault();
            // let errorState: IState =  $state.get('error');
            // errorState.data = {code: 123, description: errorMsg};
            // $state.get().get('error').params.error = {code: 123, description: errorMsg}
            return $state.go('error');
        });
    }

    public getClass(path: String): String {
        return (this.$location.path().substr(0, path.length) === path) ? 'active' : '';
    }
}
