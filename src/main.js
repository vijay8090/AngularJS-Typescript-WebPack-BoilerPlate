"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular_1 = require("angular");
var routes_1 = require("./routes");
var demo_component_1 = require("./app/shared/demo.component");
var HomeModule_1 = require("./app/home/HomeModule");
exports.homeModule = angular_1.module('homeModule', []);
exports.homeModule.controller('HomeCtrl', HomeModule_1.HomeController);
exports.mainApp = angular_1.module('HidApp', [
    'ui.router',
    'homeModule'
]);
exports.mainApp.controller('DemoCtrl', demo_component_1.DemoController.$inject);
exports.mainApp.config(routes_1.RouteConfig);
//# sourceMappingURL=C:/Users/vanbu/WebstormProjects/webpack1/src/main.js.map