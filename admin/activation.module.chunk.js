webpackJsonp(["activation.module"],{

/***/ "../../../../../src/app/theme/auth/activation/activation-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activation_component__ = __webpack_require__("../../../../../src/app/theme/auth/activation/activation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__activation_component__["a" /* ActivationComponent */],
        data: {
            title: 'Activation'
        }
    }
];
var ActivationRoutingModule = (function () {
    function ActivationRoutingModule() {
    }
    ActivationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */]]
        })
    ], ActivationRoutingModule);
    return ActivationRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/auth/activation/activation.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login p-fixed d-flex text-center bg-primary common-img-bg\">\r\n  <!-- Container-fluid starts -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <div class=\"login-card card-block auth-body mr-auto ml-auto\">\r\n          <form class=\"md-float-material\">\r\n            <div class=\"text-center\">\r\n              <img src=\"assets/images/logo.png\" alt=\"Gradient Able\">\r\n            </div>\r\n            <div class=\"auth-box\" id=\"activationDiv\">\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <h3 class=\"text-left txt-primary\">Activation</h3>\r\n                </div>\r\n              </div>\r\n              <hr/>\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" name=\"Username\" [(ngModel)]=\"Username\" placeholder=\"Your Username\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <p id=\"username\" class=\"error\">Username is Required</p>\r\n              <div class=\"input-group\">\r\n                <input type=\"password\" class=\"form-control\" name=\"Password\" [(ngModel)]=\"Password\" placeholder=\"Password\">\r\n                <span class=\"md-line\"></span>\r\n              </div>\r\n              <p id=\"password\" class=\"error\">Password is Required</p>\r\n              <!-- <div class=\"row m-t-25 text-left\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"checkbox-fade fade-in-primary d-\">\r\n                    <label>\r\n                      <input type=\"checkbox\" value=\"\" (click)=\"rememberMe()\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                      <span class=\"text-inverse\">Remember me</span>\r\n                    </label>\r\n                  </div>\r\n                  <div class=\"forgot-phone text-right f-right\">\r\n                    <a [routerLink]=\"['/forgot']\" class=\"text-right f-w-600 text-inverse\"> Forgot Password?</a>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n              <div class=\"preloader3 loader-block\" id=\"loader\">\r\n                <div class=\"circ1\"></div>\r\n                <div class=\"circ2\"></div>\r\n                <div class=\"circ3\"></div>\r\n                <div class=\"circ4\"></div>\r\n              </div>\r\n              <div class=\"row m-t-30\">\r\n                <div class=\"col-md-12\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\" (click)=\"activate()\">Activate</button>\r\n                </div>\r\n              </div>\r\n              <p id=\"serviceErrors\" class=\"error\"></p>\r\n              <hr/>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                  <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                  <p class=\"text-inverse text-left\"><b>Your Ideofuzion Team</b></p>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- this loader will be displaying untill GUID is not found -->\r\n\r\n            <div class=\"preloader3 loader-block\" id=\"loaderDiv\">\r\n              <h3 style=\"margin:0px auto\">Trying To Find GUID</h3>\r\n            </div>\r\n            <!-- this loader will be displaying untill GUID is incorrect -->\r\n            <div class=\"preloader3 loader-block\" id=\"loaderIncorrectDiv\">\r\n              <h3 style=\"margin:0px auto\">Your Page Link is Not Authenticated</h3>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n        <!-- Authentication card end -->\r\n      </div>\r\n      <!-- end of col-sm-12 -->\r\n    </div>\r\n    <!-- end of row -->\r\n  </div>\r\n  <!-- end of container-fluid -->\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/auth/activation/activation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n  font-size: 11px;\n  text-align: right;\n  color: red;\n  display: none; }\n\n.input-custom {\n  display: bock !important; }\n\n#loader {\n  display: none;\n  height: 0px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/auth/activation/activation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_validation_class__ = __webpack_require__("../../../../../src/app/theme/models/validation.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AddChemistService__ = __webpack_require__("../../../../../src/app/theme/services/AddChemistService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivationComponent = (function () {
    function ActivationComponent(_addChemistService, router, route) {
        this._addChemistService = _addChemistService;
        this.router = router;
        this.route = route;
        this.remember_Me_Value = false;
        this.Username = "";
        this.Password = "";
        this.runner = false;
    }
    ActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#loaderDiv').show();
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#activationDiv').hide();
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#loaderIncorrectDiv').hide();
        var guid = this.route.snapshot.queryParams["guid"];
        this._addChemistService.getUserByGUID(guid).subscribe(function (response) {
            if (response.data == null || response.data == undefined) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#loaderDiv').hide();
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#loaderIncorrectDiv').show();
            }
            else {
                _this.UserId = response.data.Id;
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#activationDiv').show();
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#loaderIncorrectDiv').hide();
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#loaderDiv').hide();
            }
        });
    };
    ActivationComponent.prototype.rememberMe = function () {
        this.remember_Me_Value = true;
    }; // End of Remember Me Function
    ActivationComponent.prototype.activate = function () {
        var _this = this;
        if (this.runner == false) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.error').hide();
            __WEBPACK_IMPORTED_MODULE_2_jquery__('#loader').show();
            this.runner = true;
            console.log(__WEBPACK_IMPORTED_MODULE_3__models_validation_class__["a" /* ValidationModel */].validateString(this.Username));
            if (__WEBPACK_IMPORTED_MODULE_3__models_validation_class__["a" /* ValidationModel */].validateString(this.Username)) {
                this.runner = false;
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#username').show();
                return;
            }
            if (__WEBPACK_IMPORTED_MODULE_3__models_validation_class__["a" /* ValidationModel */].validateString(this.Password)) {
                this.runner = false;
                __WEBPACK_IMPORTED_MODULE_2_jquery__('#password').show();
                return;
            }
            var body = {
                UserId: this.UserId,
                UserName: this.Username,
                Password: this.Password
            };
            this._addChemistService.addUserAfterAuth(body).subscribe(function (response) {
                console.log(response);
                if (response.code == 200) {
                    _this.router.navigateByUrl('');
                }
            });
        }
    };
    ActivationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activation',
            template: __webpack_require__("../../../../../src/app/theme/auth/activation/activation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/auth/activation/activation.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_AddChemistService__["a" /* AddchemistService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_AddChemistService__["a" /* AddchemistService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ActivationComponent);
    return ActivationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/auth/activation/activation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationModule", function() { return ActivationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activation_component__ = __webpack_require__("../../../../../src/app/theme/auth/activation/activation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activation_routing_module__ = __webpack_require__("../../../../../src/app/theme/auth/activation/activation-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ActivationModule = (function () {
    function ActivationModule() {
    }
    ActivationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__activation_routing_module__["a" /* ActivationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_0__activation_component__["a" /* ActivationComponent */]]
        })
    ], ActivationModule);
    return ActivationModule;
}());



/***/ })

});
//# sourceMappingURL=activation.module.chunk.js.map