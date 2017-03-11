import * as angular from 'angular';
import {RouteConfig} from './routes';

import './app/main/main.module';
import './app/home/home.module';
import './app/city/city.module';


export let mainApp = angular.module('HidApp', [
    'ui.router',
    'mainModule',
    'homeModule',
    'cityModule'
    ]);


mainApp.config(RouteConfig);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['HidApp']);
});
