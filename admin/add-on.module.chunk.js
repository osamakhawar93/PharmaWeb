webpackJsonp(["add-on.module"],{

/***/ "../../../../../src/app/theme/forms/add-on/add-on-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOnRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_on_component__ = __webpack_require__("../../../../../src/app/theme/forms/add-on/add-on.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__add_on_component__["a" /* AddOnComponent */],
        data: {
            title: 'Group Add-ons',
            icon: 'icon-layers',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - add-ons',
            status: true
        }
    }
];
var AddOnRoutingModule = (function () {
    function AddOnRoutingModule() {
    }
    AddOnRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AddOnRoutingModule);
    return AddOnRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/forms/add-on/add-on.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Input group card start -->\r\n    <app-card [title]=\"'Addon\\'s Group'\" [cardOptionBlock]=\"true\">\r\n      <!-- Basic group add-ons start -->\r\n      <div class=\"m-b-20\">\r\n        <h4 class=\"sub-title\">Basic Group Add-ons</h4>\r\n        <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Simple Add-on</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\" id=\"basic-addon1\">@</span>\r\n              <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Placeholder</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\" id=\"basic-addon2\">%</span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Left addon\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Right Add-on</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Right addon\">\r\n              <span class=\"input-group-addon\" id=\"basic-addon3\">$</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Both-side Add-on</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Both-side addon\">\r\n              <span class=\"input-group-addon\">.20</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Muliple Add-ons</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <span class=\"input-group-addon\">.20</span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Multiple addons\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Basic group add-ons end -->\r\n      <!-- Icon Group Addons start -->\r\n      <div>\r\n        <h4 class=\"sub-title\">Icon Group Addons</h4>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Left Icon</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\" id=\"basic-addon4\"><i class=\"icofont icofont-ui-volume\"></i></span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Left addon\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Right Icon</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Right addon\">\r\n              <span class=\"input-group-addon\" id=\"basic-addon5\"><i class=\"icofont icofont-ui-wifi\"></i></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Both-side Icons Addon</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-rounded-left\"></i></span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Right add-on\">\r\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-rounded-right\"></i></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Icon Group Addons end -->\r\n    </app-card>\r\n    <!-- Input group card end -->\r\n    <!-- Input Group Sizes & Colors card start -->\r\n    <app-card [title]=\"'Addon\\'s Group Sizes & Colors'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <h4 class=\"sub-title\">Group Addons Sizes</h4>\r\n          <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group input-group-lg\">\r\n                <span class=\"input-group-addon\" id=\"basic-addon6\">@</span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-lg\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-10\">\r\n              <div class=\"input-group\">\r\n                <span class=\"input-group-addon\" id=\"basic-addon7\">@</span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-8\">\r\n              <div class=\"input-group input-group-sm\">\r\n                <span class=\"input-group-addon\" id=\"basic-addon8\">%</span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-sm\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <h4 class=\"sub-title\">Color Addons</h4>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group input-group-primary\">\r\n                                            <span class=\"input-group-addon\">\r\n                                       <i class=\"icofont icofont-presentation\"></i>\r\n                                       </span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-primary\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"input-group input-group-warning\">\r\n                                            <span class=\"input-group-addon\">\r\n                                       <i class=\"icofont icofont-queen\"></i>\r\n                                       </span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-warning\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"input-group input-group-default\">\r\n                                            <span class=\"input-group-addon\">\r\n                                       <i class=\"icofont icofont-shield\"></i>\r\n                                       </span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-default\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"input-group input-group-danger\">\r\n                                            <span class=\"input-group-addon\">\r\n                                       <i class=\"icofont icofont-volume-down\"></i>\r\n                                       </span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-danger\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"input-group input-group-success\">\r\n                                            <span class=\"input-group-addon\">\r\n                                       <i class=\"icofont icofont-volume-off\"></i>\r\n                                       </span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-success\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"input-group input-group-inverse\">\r\n                                            <span class=\"input-group-addon\">\r\n                                       <i class=\"icofont icofont-wifi\"></i>\r\n                                       </span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-inverse\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"input-group input-group-info\">\r\n                                            <span class=\"input-group-addon\">\r\n                                       <i class=\"icofont icofont-signal\"></i>\r\n                                       </span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"input-group-info\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Input Group Sizes & Colors card end -->\r\n    <!-- Input Group With Components card start -->\r\n    <app-card [title]=\"'Addon\\'s With Components'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row m-b-20\">\r\n        <div class=\"col-sm-12 col-lg-6\">\r\n          <h4 class=\"sub-title\">Icon Group with Buttons</h4>\r\n          <p>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group input-group-button\">\r\n                                            <span class=\"input-group-addon\" id=\"basic-addon9\">\r\n                                       <button class=\"btn btn-primary\">Left Button</button>\r\n                                       </span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Left Button\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group input-group-button\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Right Button\">\r\n                <span class=\"input-group-addon\" id=\"basic-addon10\">\r\n                                       <button class=\"btn btn-primary\">Right Button</button>\r\n                                       </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group input-group-button\">\r\n                                            <span class=\"input-group-addon\" id=\"basic-addon11\">\r\n                                       <button class=\"btn btn-primary\">Left Click</button>\r\n                                       </span>\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Both side addons\">\r\n                <span class=\"input-group-addon\" id=\"basic-addon12\">\r\n                                       <button class=\"btn btn-primary\">Right Click</button>\r\n                                       </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12 col-lg-6\">\r\n          <h4 class=\"sub-title\">Icon Group with Dropdowns</h4>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group input-group-dropdown\">\r\n                <div ngbDropdown class=\"input-group-btn\">\r\n                  <button ngbDropdownToggle type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    Left Action\r\n                  </button>\r\n                  <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\r\n                    <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Separated link</a>\r\n                  </div>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group input-group-dropdown\">\r\n                <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\r\n                <div ngbDropdown class=\"input-group-btn\">\r\n                  <button ngbDropdownToggle type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    Right Action\r\n                  </button>\r\n                  <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\r\n                    <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Separated link</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group input-group-dropdown\">\r\n                <div ngbDropdown class=\"input-group-btn\">\r\n                  <button ngbDropdownToggle type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    click\r\n                  </button>\r\n                  <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\r\n                    <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Separated link</a>\r\n                  </div>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\r\n                <div ngbDropdown class=\"input-group-btn\">\r\n                  <button ngbDropdownToggle type=\"button\" class=\"btn btn-secondary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    click\r\n                  </button>\r\n                  <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Another action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Something else here</a>\r\n                    <div role=\"separator\" class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"javascript:;\">Separated link</a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n          <h4 class=\"sub-title\">Icon Group with Checkbox</h4>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                                            <span class=\"input-group-addon\">\r\n                                       <input type=\"checkbox\" aria-label=\"Checkbox for following text input\">\r\n                                       </span>\r\n                <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <h4 class=\"sub-title\">Icon Group with Radio</h4>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"input-group\">\r\n                                            <span class=\"input-group-addon\">\r\n                                       <input type=\"radio\" aria-label=\"Radio button for following text input\">\r\n                                       </span>\r\n                <input type=\"text\" class=\"form-control\" aria-label=\"Text input with dropdown button\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Input Group With Components card end -->\r\n    <app-card [title]=\"'Addon\\'s Group Alignment'\" [cardOptionBlock]=\"true\">\r\n      <h4>Addon's Group Alignment</h4>\r\n      <span>Add class of <code>.form-control</code> with <code>&lt;input&gt;</code> tag</span>\r\n      <form>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Normal Text</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-ui-volume\"></i></span>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Normal Text\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Bold Text</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-queen\"></i></span>\r\n              <input type=\"text\" class=\"form-control form-control-bold\" placeholder=\".form-control-bold\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Capitalize Text</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-presentation\"></i></span>\r\n              <input type=\"text\" class=\"form-control form-control-capitalize\" placeholder=\".form-control-capitalize\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Uppercase Text</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-wifi\"></i></span>\r\n              <input type=\"text\" class=\"form-control form-control-uppercase\" placeholder=\".form-control-uppercase\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Lowercase Text</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-shield\"></i></span>\r\n              <input type=\"text\" class=\"form-control form-control-lowercase\" placeholder=\".form-control-lowercase\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Varient Text</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-ui-volume\"></i></span>\r\n              <input type=\"text\" class=\"form-control form-control-variant\" placeholder=\".form-control-variant\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Left-Align Text</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-presentation\"></i></span>\r\n              <input type=\"text\" class=\"form-control form-control-left\" placeholder=\".form-control-left\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Center-Align Text</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-queen\"></i></span>\r\n              <input type=\"text\" class=\"form-control form-control-center\" placeholder=\".form-control-center\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">Right-Align Text</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-shield\"></i></span>\r\n              <input type=\"text\" class=\"form-control form-control-right\" placeholder=\".form-control-right\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <label class=\"col-sm-4 col-lg-2 col-form-label\">RTL Text</label>\r\n          <div class=\"col-sm-8 col-lg-10\">\r\n            <div class=\"input-group\">\r\n              <span class=\"input-group-addon\"><i class=\"icofont icofont-ui-volume\"></i></span>\r\n              <input type=\"text\" class=\"form-control form-control-rtl\" placeholder=\".form-control-rtl\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/forms/add-on/add-on.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/forms/add-on/add-on.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddOnComponent = (function () {
    function AddOnComponent() {
    }
    AddOnComponent.prototype.ngOnInit = function () {
    };
    AddOnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-on',
            template: __webpack_require__("../../../../../src/app/theme/forms/add-on/add-on.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/forms/add-on/add-on.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddOnComponent);
    return AddOnComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/forms/add-on/add-on.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOnModule", function() { return AddOnModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_on_component__ = __webpack_require__("../../../../../src/app/theme/forms/add-on/add-on.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_on_routing_module__ = __webpack_require__("../../../../../src/app/theme/forms/add-on/add-on-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AddOnModule = (function () {
    function AddOnModule() {
    }
    AddOnModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__add_on_routing_module__["a" /* AddOnRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__add_on_component__["a" /* AddOnComponent */]]
        })
    ], AddOnModule);
    return AddOnModule;
}());



/***/ })

});
//# sourceMappingURL=add-on.module.chunk.js.map