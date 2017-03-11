/**
 * Created by vanbu on 10-03-2017.
 */

import {City} from './City';

export class CityService {

    static $inject = ['$http'];
    constructor(private $http: ng.IHttpService) {}

    getAllCities() {
        return this.$http.get('http://localhost:8090/demo/api/cities');
    }

   /* logout() {
        return this.$http.post('/api/logout', {});
    }*/
}

export class CityController {

    static $inject = ['cityService'];
    model: Object = new City();

    constructor(private cityService: CityService) {

    }



    getCities() {
     this.cityService.getAllCities().then(
         (response) => {
            this.model = response.data;
             console.log(this.model);
         },
         (response) => {
           console.log('error');
         });





    }
}

