export declare class DemoController {
    private $rootScope;
    private $scope;
    private $location;
    private $state;
    static $inject: (string | typeof DemoController)[];
    constructor($rootScope: ng.IRootScopeService, $scope: ng.IScope, $location: ng.ILocationService, $state: ng.ui.IStateService);
    getClass(path: String): String;
}
