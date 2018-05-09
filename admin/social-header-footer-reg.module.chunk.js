webpackJsonp(["social-header-footer-reg.module"],{

/***/ "../../../../../src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHeaderFooterRegRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_header_footer_reg_component__ = __webpack_require__("../../../../../src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__social_header_footer_reg_component__["a" /* SocialHeaderFooterRegComponent */],
        data: {
            title: 'Social Header & Footer Registration'
        }
    }
];
var SocialHeaderFooterRegRoutingModule = (function () {
    function SocialHeaderFooterRegRoutingModule() {
    }
    SocialHeaderFooterRegRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], SocialHeaderFooterRegRoutingModule);
    return SocialHeaderFooterRegRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"pcoded\" class=\"pcoded\"\r\n     [attr.nav-type]=\"navType\"\r\n     [attr.theme-layout]=\"themeLayout\"\r\n     [attr.vertical-placement]=\"verticalPlacement\"\r\n     [attr.vertical-layout]=\"verticalLayout\"\r\n     [attr.pcoded-device-type]=\"pcodedDeviceType\"\r\n     [attr.vertical-nav-type]=\"verticalNavType\"\r\n     [attr.vertical-effect]=\"verticalEffect\"\r\n     [attr.vnavigation-view]=\"vnavigationView\"\r\n     [attr.fream-type]=\"freamType\"\r\n     [attr.sidebar-img]=\"sidebarImg\"\r\n     [attr.sidebar-img-type]=\"sidebarImgType\"\r\n     [attr.layout-type]=\"layoutType\"\r\n     (window:resize)=\"onResize($event)\"\r\n>\r\n  <div class=\"pcoded-overlay-box\"></div>\r\n  <div class=\"pcoded-container navbar-wrapper\">\r\n    <nav class=\"navbar header-navbar pcoded-header\" [attr.header-theme]=\"headerTheme\" [attr.pcoded-header-position]=\"pcodedHeaderPosition\">\r\n      <div class=\"navbar-wrapper\">\r\n        <div class=\"navbar-logo\">\r\n          <a [routerLink]=\"['/dashboard/default/']\">\r\n            <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\" />\r\n          </a>\r\n          <a href=\"javascript:\" class=\"mobile-options\" (click)=\"toggleHeaderNavRight()\">\r\n            <i class=\"icon-more\"></i>\r\n          </a>\r\n        </div>\r\n        <div class=\"navbar-container container-fluid\">\r\n          <ul class=\"nav-left\">\r\n            <li>\r\n              <div class=\"sidebar_toggle\"><a href=\"javascript:\"><i class=\"icon-menu\"></i></a></div>\r\n            </li>\r\n            <li class=\"header-search\">\r\n              <div id=\"main-search\" class=\"main-search morphsearch-search\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon search-close\" (click)=\"searchOff()\"><i class=\"icon-close\"></i></span>\r\n                  <input class=\"form-control\" [style.width]=\"searchWidthString\">\r\n                  <span class=\"input-group-addon search-btn\" (click)=\"searchOn()\"><i class=\"icon-search\"></i></span>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li appToggleFullScreen>\r\n              <a href=\"javascript:\">\r\n                <i class=\"icon-fullscreen\"></i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <ul [@mobileHeaderNavRight]=\"navRight\" [ngClass]=\"navRight\" class=\"nav-right\">\r\n            <li (clickOutside)=\"notificationOutsideClick('live')\" class=\"header-notification\" [ngClass]=\"liveNotificationClass\" (click)=\"toggleLiveNotification()\">\r\n              <a href=\"javascript:\">\r\n                <i class=\"icon-bell\"></i>\r\n                <span class=\"badge bg-c-pink\"></span>\r\n              </a>\r\n              <ul [@notificationBottom]=\"liveNotification\" class=\"show-notification\">\r\n                <li>\r\n                  <h6>Notifications</h6>\r\n                  <label class=\"label label-danger\">New</label>\r\n                </li>\r\n                <li>\r\n                  <div class=\"media\">\r\n                    <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n                      <h5 class=\"notification-user\">John Doe</h5>\r\n                      <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                      <span class=\"notification-time\">30 minutes ago</span>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"media\">\r\n                    <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n                      <h5 class=\"notification-user\">Joseph William</h5>\r\n                      <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                      <span class=\"notification-time\">30 minutes ago</span>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"media\">\r\n                    <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n                      <h5 class=\"notification-user\">Sara Soudein</h5>\r\n                      <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                      <span class=\"notification-time\">30 minutes ago</span>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li (clickOutside)=\"notificationOutsideClick('profile')\" class=\"user-profile header-notification\" [ngClass]=\"profileNotificationClass\" (click)=\"toggleProfileNotification()\">\r\n              <a href=\"javascript:\">\r\n                <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n                <span>John Doe</span>\r\n                <i class=\"icon-angle-down\"></i>\r\n              </a>\r\n              <ul [@notificationBottom]=\"profileNotification\" class=\"show-notification profile-notification\">\r\n                <li>\r\n                  <a href=\"javascript:\">\r\n                    <i class=\"icon-settings\"></i> Settings\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a [routerLink]=\"['/user/profile/']\">\r\n                    <i class=\"icon-user\"></i> Profile\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a [routerLink]=\"['/email/inbox/']\">\r\n                    <i class=\"icon-email\"></i> My Messages\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a [routerLink]=\"['/authentication/lock-screen/']\">\r\n                    <i class=\"icon-lock\"></i> Lock Screen\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a [routerLink]=\"['/authentication/login/']\">\r\n                    <i class=\"icon-layout-sidebar-left\"></i> Logout\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    <section class=\"login header d-flex pos-relative text-center bg-primary common-img-bg\">\r\n      <!-- Container-fluid starts -->\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <!-- Authentication card start -->\r\n            <div class=\"signup-card card-block auth-body mr-auto ml-auto\">\r\n              <form class=\"md-float-material\">\r\n                <div class=\"text-center\">\r\n                  <img src=\"assets/images/logo.png\" alt=\"Gradient Able\">\r\n                </div>\r\n                <div class=\"auth-box\">\r\n                  <div class=\"row m-b-20\">\r\n                    <div class=\"col-md-12\">\r\n                      <h3 class=\"text-center txt-primary\">Sign up. It is fast and easy.</h3>\r\n                    </div>\r\n                  </div>\r\n                  <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in easily with your social account:</p>\r\n                  <div class=\"row m-b-5\">\r\n                    <div class=\"col-sm-6\">\r\n                      <button type=\"button\" class=\"btn btn-facebook m-b-5\"><i class=\"fa fa-facebook\"></i>Sign in with facebook</button>\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                      <button type=\"button\" class=\"btn btn-twitter m-b-0\"><i class=\"fa fa-twitter\"></i>Sign in with twitter</button>\r\n                    </div>\r\n                  </div>\r\n                  <p class=\"text-inverse b-b-default text-left p-b-5\">Sign in with your regular account</p>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Choose Username\">\r\n                    <span class=\"md-line\"></span>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Your Email Address\">\r\n                    <span class=\"md-line\"></span>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Choose Password\">\r\n                    <span class=\"md-line\"></span>\r\n                  </div>\r\n                  <div class=\"input-group\">\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                    <span class=\"md-line\"></span>\r\n                  </div>\r\n                  <div class=\"row m-t-15 text-left\">\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"checkbox-fade fade-in-primary\">\r\n                        <label>\r\n                          <input type=\"checkbox\" value=\"\">\r\n                          <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                          <span class=\"text-inverse\">I read and accept <a href=\"javascript:\">Terms &amp; Conditions.</a></span>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"checkbox-fade fade-in-primary\">\r\n                        <label>\r\n                          <input type=\"checkbox\" value=\"\">\r\n                          <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                          <span class=\"text-inverse\">Send me the <a href=\"javascript:\">Newsletter</a> weekly.</span>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row m-t-15\">\r\n                    <div class=\"col-md-12\">\r\n                      <button type=\"button\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-10\">Sign up now</button>\r\n                    </div>\r\n                  </div>\r\n                  <hr/>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-10\">\r\n                      <p class=\"text-inverse text-left m-b-0\">Thank you and enjoy our website.</p>\r\n                      <p class=\"text-inverse text-left\"><b>Your Authentication Team</b></p>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                      <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"Gradient Able\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n              <!-- end of form -->\r\n            </div>\r\n            <!-- Authentication card end -->\r\n          </div>\r\n          <!-- end of col-sm-12 -->\r\n        </div>\r\n        <!-- end of row -->\r\n      </div>\r\n      <!-- end of container-fluid -->\r\n    </section>\r\n    <div class=\"footer bg-inverse\">\r\n      <p class=\"text-center\">Copyright &copy; 2017 GRADIENT ABLE ADMIN , All rights reserved.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialHeaderFooterRegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialHeaderFooterRegComponent = (function () {
    function SocialHeaderFooterRegComponent() {
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.pcodedDeviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.vnavigationView = 'view1';
        this.freamType = 'theme1';
        this.sidebarImg = 'false';
        this.sidebarImgType = 'img1';
        this.layoutType = 'light';
        this.headerTheme = 'themelight5';
        this.pcodedHeaderPosition = 'fixed';
        this.liveNotification = 'an-off';
        this.profileNotification = 'an-off';
        this.searchWidth = 0;
        this.navRight = 'nav-on';
        this.windowWidth = window.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
    }
    SocialHeaderFooterRegComponent.prototype.ngOnInit = function () {
    };
    SocialHeaderFooterRegComponent.prototype.onResize = function (event) {
        this.windowWidth = event.target.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
    };
    SocialHeaderFooterRegComponent.prototype.setHeaderAttributes = function (windowWidth) {
        if (windowWidth < 992) {
            this.navRight = 'nav-off';
        }
        else {
            this.navRight = 'nav-on';
        }
    };
    SocialHeaderFooterRegComponent.prototype.toggleHeaderNavRight = function () {
        this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
    };
    SocialHeaderFooterRegComponent.prototype.toggleLiveNotification = function () {
        this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'active' : '';
    };
    SocialHeaderFooterRegComponent.prototype.toggleProfileNotification = function () {
        this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'active' : '';
    };
    SocialHeaderFooterRegComponent.prototype.notificationOutsideClick = function (ele) {
        if (ele === 'live' && this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        else if (ele === 'profile' && this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
    };
    SocialHeaderFooterRegComponent.prototype.searchOn = function () {
        var _this = this;
        document.querySelector('#main-search').classList.add('open');
        var searchInterval = setInterval(function () {
            if (_this.searchWidth >= 200) {
                clearInterval(searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth + 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    SocialHeaderFooterRegComponent.prototype.searchOff = function () {
        var _this = this;
        var searchInterval = setInterval(function () {
            if (_this.searchWidth <= 0) {
                document.querySelector('#main-search').classList.remove('open');
                clearInterval(searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth - 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    SocialHeaderFooterRegComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-social-header-footer-reg',
            template: __webpack_require__("../../../../../src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('notificationBottom', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('an-off, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('an-animate', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        overflow: 'hidden',
                        height: __WEBPACK_IMPORTED_MODULE_1__angular_animations__["AUTO_STYLE"],
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('an-off <=> an-animate', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('mobileHeaderNavRight', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('nav-off, void', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('nav-on', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        height: __WEBPACK_IMPORTED_MODULE_1__angular_animations__["AUTO_STYLE"],
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('nav-off <=> nav-on', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SocialHeaderFooterRegComponent);
    return SocialHeaderFooterRegComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialHeaderFooterRegModule", function() { return SocialHeaderFooterRegModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_header_footer_reg_component__ = __webpack_require__("../../../../../src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__social_header_footer_reg_routing_module__ = __webpack_require__("../../../../../src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SocialHeaderFooterRegModule = (function () {
    function SocialHeaderFooterRegModule() {
    }
    SocialHeaderFooterRegModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__social_header_footer_reg_routing_module__["a" /* SocialHeaderFooterRegRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__social_header_footer_reg_component__["a" /* SocialHeaderFooterRegComponent */]]
        })
    ], SocialHeaderFooterRegModule);
    return SocialHeaderFooterRegModule;
}());



/***/ })

});
//# sourceMappingURL=social-header-footer-reg.module.chunk.js.map