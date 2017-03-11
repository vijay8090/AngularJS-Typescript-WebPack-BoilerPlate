/**
 * Created by vanbu on 10-03-2017.
 */

import * as angular from 'angular';
import {MainController} from './main.component';

export let mainModule = angular.module('mainModule', []);

mainModule.controller('MainCtrl',  MainController);
