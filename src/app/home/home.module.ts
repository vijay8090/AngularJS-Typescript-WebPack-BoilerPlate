import * as angular from 'angular';
import {HomeController} from './home.component';

export let homeModule = angular.module('homeModule', []);

homeModule.controller('HomeCtrl', HomeController);
