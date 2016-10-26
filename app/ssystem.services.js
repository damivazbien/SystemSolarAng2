"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var SSolarService = (function () {
    function SSolarService(http) {
        this.http = http;
        this.planetsUrl = 'https://apisystemsolar.azurewebsites.net/api/solarsystem'; // URL to web api
    }
    SSolarService.prototype.getPlanets = function () {
        return this.http.get(this.planetsUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //error 
    SSolarService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SSolarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SSolarService);
    return SSolarService;
}());
exports.SSolarService = SSolarService;
//# sourceMappingURL=ssystem.services.js.map