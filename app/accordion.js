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
var Accordion = (function () {
    function Accordion() {
        this.groups = [];
    }
    Accordion.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    Accordion.prototype.closeOthers = function (openGroup) {
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    Accordion = __decorate([
        core_1.Component({
            selector: 'accordion',
            template: "\n            <ng-content></ng-content>\n          ",
            host: {
                'class': 'panel-group'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Accordion);
    return Accordion;
}());
exports.Accordion = Accordion;
var AccordionGroup = (function () {
    function AccordionGroup(accordion) {
        this.accordion = accordion;
        this._isOpen = false;
        this.accordion.addGroup(this);
    }
    Object.defineProperty(AccordionGroup.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        set: function (value) {
            this._isOpen = value;
            if (value) {
                this.accordion.closeOthers(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionGroup.prototype.toggleOpen = function (event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AccordionGroup.prototype, "heading", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], AccordionGroup.prototype, "isOpen", null);
    AccordionGroup = __decorate([
        core_1.Component({
            selector: 'accordion-group',
            template: "\n                <div [ngClass]=\"{'panel-open': isOpen}\">\n                  <div class=\"panel-heading\" (click)=\"toggleOpen($event)\">\n                    <h4>\n                      <span>{{heading}}</span>\n                    </h4>\n                  </div>\n                  <div [hidden]=\"!isOpen\">\n                    <div class=\"panel-body\">\n                        <ng-content></ng-content>\n                    </div>\n                  </div>\n                </div>\n          "
        }), 
        __metadata('design:paramtypes', [Accordion])
    ], AccordionGroup);
    return AccordionGroup;
}());
exports.AccordionGroup = AccordionGroup;
//# sourceMappingURL=accordion.js.map