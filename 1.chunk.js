webpackJsonpac__name_([1],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__barrel_module__ = __webpack_require__(350);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BarrelModule", function() { return __WEBPACK_IMPORTED_MODULE_0__barrel_module__["a"]; });



/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarrelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);


/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
console.log('`Barrel` component loaded asynchronously');
var BarrelComponent = (function () {
    function BarrelComponent() {
    }
    BarrelComponent.prototype.ngOnInit = function () {
        console.log('hello `Barrel` component');
    };
    return BarrelComponent;
}());
BarrelComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'barrel',
        template: "\n    <h1>Hello from Barrel</h1>\n    <span>\n      <a [routerLink]=\" ['./child-barrel'] \">\n        Child Barrel\n      </a>\n    </span>\n    <router-outlet></router-outlet>\n  ",
    })
], BarrelComponent);



/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarrelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__barrel_routes__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__barrel_component__ = __webpack_require__(343);







console.log('`Barrel` bundle loaded asynchronously');
var BarrelModule = (function () {
    function BarrelModule() {
    }
    return BarrelModule;
}());
BarrelModule.routes = __WEBPACK_IMPORTED_MODULE_5__barrel_routes__["a" /* routes */];
BarrelModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            /**
             * Components / Directives/ Pipes
             */
            __WEBPACK_IMPORTED_MODULE_6__barrel_component__["a" /* BarrelComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_5__barrel_routes__["a" /* routes */]),
        ],
    })
], BarrelModule);



/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__barrel_component__ = __webpack_require__(343);

var routes = [
    { path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__barrel_component__["a" /* BarrelComponent */] },
            { path: 'child-barrel', loadChildren: function() { return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 352))  .then( function(module) { return module['ChildBarrelModule']; } ); } }
        ] },
];


/***/ })

});
//# sourceMappingURL=1.chunk.js.map