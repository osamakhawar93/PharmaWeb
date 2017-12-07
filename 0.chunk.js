webpackJsonpac__name_([0],{

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_module__ = __webpack_require__(361);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModule", function() { return __WEBPACK_IMPORTED_MODULE_0__detail_module__["a"]; });



/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);


/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
console.log('`Detail` component loaded asynchronously');
var DetailComponent = (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
        console.log('hello `Detail` component');
    };
    return DetailComponent;
}());
DetailComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'detail',
        template: "\n    <h1>Hello from Detail</h1>\n    <span>\n      <a [routerLink]=\" ['./child-detail'] \">\n        Child Detail\n      </a>\n    </span>\n    <router-outlet></router-outlet>\n  ",
    })
], DetailComponent);



/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_routes__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_component__ = __webpack_require__(357);







console.log('`Detail` bundle loaded asynchronously');
var DetailModule = (function () {
    function DetailModule() {
    }
    return DetailModule;
}());
DetailModule.routes = __WEBPACK_IMPORTED_MODULE_5__detail_routes__["a" /* routes */];
DetailModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            /**
             * Components / Directives/ Pipes
             */
            __WEBPACK_IMPORTED_MODULE_6__detail_component__["a" /* DetailComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_5__detail_routes__["a" /* routes */]),
        ],
    })
], DetailModule);



/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__detail_component__ = __webpack_require__(357);

var routes = [
    { path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__detail_component__["a" /* DetailComponent */] },
            { path: 'child-detail', loadChildren: function() { return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 363))  .then( function(module) { return module['ChildDetailModule']; } ); } }
        ] },
];


/***/ })

});
//# sourceMappingURL=0.chunk.js.map