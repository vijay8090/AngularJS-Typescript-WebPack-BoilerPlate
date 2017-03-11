
    export class HomeController {

       // static $inject = ['$scope'];

        public firstName: String = 'Ajay';
        public lastName: String = 'Kumar';

       /* constructor($scope: ng.IScope) {

        }*/

        public init(): void {
            this.firstName = 'vijay';
            this.lastName = 'anbu';
        }
    }


    export class HomeService {

        public firstName: String = 'Ajay';
        public lastName: String = 'Kumar';

        constructor() {

        }

    }

