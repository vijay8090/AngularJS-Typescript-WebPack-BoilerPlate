/**
 * Created by vanbu on 10-03-2017.
 */

import * as angular from 'angular';
import * as CityComponent from './city.component';

export let cityModule = angular.module('cityModule', []);

cityModule.controller('CityCtrl', CityComponent.CityController);
cityModule.service('cityService', CityComponent.CityService);

