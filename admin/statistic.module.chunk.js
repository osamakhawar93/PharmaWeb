webpackJsonp(["statistic.module"],{

/***/ "../../../../../src/app/theme/widget/statistic/statistic-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistic_component__ = __webpack_require__("../../../../../src/app/theme/widget/statistic/statistic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__statistic_component__["a" /* StatisticComponent */],
        data: {
            title: 'Widget',
            status: false
        }
    }
];
var StatisticRoutingModule = (function () {
    function StatisticRoutingModule() {
    }
    StatisticRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], StatisticRoutingModule);
    return StatisticRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/theme/widget/statistic/statistic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <!-- notification counter start -->\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-blue notification-card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-4 notify-icon\"><i class=\"fa fa-envelope\"></i></div>\r\n            <div class=\"col-8 notify-cont\">\r\n              <h4>123</h4>\r\n              <p>Unread Mails</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-green notification-card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-4 notify-icon\"><i class=\"fa fa-camera\"></i></div>\r\n            <div class=\"col-8 notify-cont\">\r\n              <h4>123</h4>\r\n              <p>Image Upload</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-yellow notification-card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-4 notify-icon\"><i class=\"fa fa-comments\"></i></div>\r\n            <div class=\"col-8 notify-cont\">\r\n              <h4>123</h4>\r\n              <p>Total Messages</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-pink notification-card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-4 notify-icon\"><i class=\"fa fa-shopping-cart\"></i></div>\r\n            <div class=\"col-8 notify-cont\">\r\n              <h4>123</h4>\r\n              <p>Orders Post</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- notification counter end -->\r\n\r\n    <!-- order-card start -->\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-blue order-card\">\r\n        <div class=\"card-block\">\r\n          <h6>Orders Received</h6>\r\n          <h2 class=\"text-right\"><i class=\"icon-shopping-cart f-left\"></i><span>486</span></h2>\r\n          <p class=\"m-b-0\">Completed Orders<span class=\"f-right\">351</span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-green order-card\">\r\n        <div class=\"card-block\">\r\n          <h6>Total Sales</h6>\r\n          <h2 class=\"text-right\"><i class=\"icon-tag f-left\"></i><span>1641</span></h2>\r\n          <p class=\"m-b-0\">This Month<span class=\"f-right\">213</span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-yellow order-card\">\r\n        <div class=\"card-block\">\r\n          <h6>Revenue</h6>\r\n          <h2 class=\"text-right\"><i class=\"icon-reload f-left\"></i><span>$42,562</span></h2>\r\n          <p class=\"m-b-0\">This Month<span class=\"f-right\">$5,032</span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card bg-c-pink order-card\">\r\n        <div class=\"card-block\">\r\n          <h6>Total Profit</h6>\r\n          <h2 class=\"text-right\"><i class=\"icon-wallet f-left\"></i><span>$9,562</span></h2>\r\n          <p class=\"m-b-0\">This Month<span class=\"f-right\">$542</span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- order-card end -->\r\n\r\n    <!-- transection start -->\r\n    <div class=\"col-lg-12 col-xl-4\">\r\n      <div class=\"card trnasiction-card\">\r\n        <div class=\"card-header bg-c-pink\">\r\n          <h5 class=\"text-white\">Not Complete<span class=\"d-block\">Cycle ends in 22 days</span></h5>\r\n          <div class=\"card-header-right\">\r\n            <div class=\"transection-preogress running-75\">\r\n              <p class=\"m-b-0\">44%</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block text-center\">\r\n          <div class=\"trnasiction-profile\">\r\n            <h4>RT</h4></div>\r\n          <h6>Registered Respiratory <span class=\"d-block\">Therapist</span></h6>\r\n          <p>RT 334445566</p>\r\n        </div>\r\n        <div class=\"b-t-default transection-footer row\">\r\n          <div class=\"col-6  b-r-default\"><a href=\"javascript:\" class=\"\"><i class=\"fa fa-plus-circle m-r-10\"></i>Report CE</a></div>\r\n          <div class=\"col-6\"><a href=\"javascript:\" class=\"\"><i class=\"fa fa-eye m-r-10\"></i>Transcript</a></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-xl-4\">\r\n      <div class=\"card trnasiction-card\">\r\n        <div class=\"card-header bg-c-green\">\r\n          <h5 class=\"text-white\">Not Complete<span class=\"d-block\">Next cycle starts Feb 2 2017</span></h5>\r\n          <div class=\"card-header-right\">\r\n            <div class=\"transection-preogress complited\">\r\n              <span class=\"fa fa-check f-20\"></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block text-center\">\r\n          <div class=\"trnasiction-profile bg-c-green\">\r\n            <h4>RN</h4></div>\r\n          <h6>Registered Nurse<span class=\"d-block\">Nurse</span></h6>\r\n          <p>RN 334445566</p>\r\n        </div>\r\n        <div class=\"b-t-default transection-footer row\">\r\n          <div class=\"col-6  b-r-default\"><a href=\"javascript:\" class=\"\"><i class=\"fa fa-plus-circle m-r-10\"></i>Report CE</a></div>\r\n          <div class=\"col-6\"><a href=\"javascript:\" class=\"\"><i class=\"fa fa-eye m-r-10\"></i>Transcript</a></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-xl-4\">\r\n      <div class=\"card trnasiction-card\">\r\n        <div class=\"card-header bg-c-green\">\r\n          <h5 class=\"text-white\">Not Complete<span class=\"d-block\">Next cycle starts Feb 2 2017</span></h5>\r\n          <div class=\"card-header-right\">\r\n            <div class=\"transection-preogress complited\">\r\n              <span class=\"fa fa-check f-20\"></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block text-center\">\r\n          <div class=\"trnasiction-profile bg-c-green\">\r\n            <h4>MT</h4></div>\r\n          <h6>Massage<span class=\"d-block\">Therapist</span></h6>\r\n          <p>MT 334445566</p>\r\n        </div>\r\n        <div class=\"b-t-default transection-footer row\">\r\n          <div class=\"col-6  b-r-default\"><a href=\"javascript:\" class=\"\"><i class=\"fa fa-plus-circle m-r-10\"></i>Report CE</a></div>\r\n          <div class=\"col-6\"><a href=\"javascript:\" class=\"\"><i class=\"fa fa-eye m-r-10\"></i>Transcript</a></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- transection end -->\r\n\r\n    <!-- user start -->\r\n    <div class=\"col-md-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block user-radial-card\">\r\n          <div data-label=\"50%\" class=\"radial-bar radial-bar-90 radial-bar-lg radial-bar-danger\">\r\n            <img src=\"assets/images/avatar-2.jpg\" alt=\"User-Image\">\r\n          </div>\r\n          <span class=\"f-36 text-c-pink\">3,6</span>\r\n          <p>From 6 GB</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block user-radial-card\">\r\n          <div data-label=\"50%\" class=\"radial-bar radial-bar-40 radial-bar-lg radial-bar-success\">\r\n            <img src=\"assets/images/avatar-2.jpg\" alt=\"User-Image\">\r\n          </div>\r\n          <span class=\"f-36 text-c-green\">85%</span>\r\n          <p>From 6 GB</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block user-radial-card\">\r\n          <div data-label=\"50%\" class=\"radial-bar radial-bar-60 radial-bar-lg radial-bar-primary\">\r\n            <img src=\"assets/images/avatar-2.jpg\" alt=\"User-Image\">\r\n          </div>\r\n          <span class=\"f-36 text-c-blue\">73%</span>\r\n          <p>From 6 GB</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-3\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block user-radial-card\">\r\n          <div data-label=\"50%\" class=\"radial-bar radial-bar-35 radial-bar-lg radial-bar-warning\">\r\n            <img src=\"assets/images/avatar-2.jpg\" alt=\"User-Image\">\r\n          </div>\r\n          <span class=\"f-36 text-c-yellow\">6</span>\r\n          <p>From 6 GB</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- user end -->\r\n\r\n    <!-- social statustic start -->\r\n    <div class=\"col-md-12 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <i class=\"fa fa-envelope text-c-blue d-block f-40\"></i>\r\n          <h4 class=\"m-t-20\"><span class=\"text-c-blue\">8.62k</span> Subscribers</h4>\r\n          <p class=\"m-b-20\">Your main list is growing</p>\r\n          <button class=\"btn btn-primary btn-sm btn-round\">Manage List</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <i class=\"fa fa-twitter text-c-green d-block f-40\"></i>\r\n          <h4 class=\"m-t-20\"><span class=\"text-c-green\">+40</span> Followers</h4>\r\n          <p class=\"m-b-20\">Your main list is growing</p>\r\n          <button class=\"btn btn-success btn-sm btn-round\">Check them out</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <i class=\"fa fa-puzzle-piece text-c-pink d-block f-40\"></i>\r\n          <h4 class=\"m-t-20\">Business Plan</h4>\r\n          <p class=\"m-b-20\">This is your current active plan</p>\r\n          <button class=\"btn btn-danger btn-sm btn-round\">Upgrade to VIP</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- social statustic end -->\r\n\r\n    <!-- statustic with progress start -->\r\n    <div class=\"col-md-6 col-lg-3\">\r\n      <div class=\"card statustic-card\">\r\n        <div class=\"card-header\">\r\n          <h5>Articles</h5>\r\n        </div>\r\n        <div class=\"card-block text-center\">\r\n          <span class=\"d-block text-c-blue f-36\">56</span>\r\n          <p class=\"m-b-0\">Total</p>\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar bg-c-blue\" style=\"width:56%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-blue\">\r\n          <h6 class=\"text-white m-b-0\">Draft: 22</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-3\">\r\n      <div class=\"card statustic-card\">\r\n        <div class=\"card-header\">\r\n          <h5>Categories</h5>\r\n        </div>\r\n        <div class=\"card-block text-center\">\r\n          <span class=\"d-block text-c-green f-36\">14</span>\r\n          <p class=\"m-b-0\">Total</p>\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar bg-c-green\" style=\"width:14%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-green\">\r\n          <h6 class=\"text-white m-b-0\">Used: 14</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-3\">\r\n      <div class=\"card statustic-card\">\r\n        <div class=\"card-header\">\r\n          <h5>Tickets</h5>\r\n        </div>\r\n        <div class=\"card-block text-center\">\r\n          <span class=\"d-block text-c-pink f-36\">85</span>\r\n          <p class=\"m-b-0\">Total</p>\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar bg-c-pink\" style=\"width:85%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-pink\">\r\n          <h6 class=\"text-white m-b-0\">Closed Today: 85</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-lg-3\">\r\n      <div class=\"card statustic-card\">\r\n        <div class=\"card-header\">\r\n          <h5>Forums</h5>\r\n        </div>\r\n        <div class=\"card-block text-center\">\r\n          <span class=\"d-block text-c-yellow f-36\">42</span>\r\n          <p class=\"m-b-0\">Total</p>\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar bg-c-yellow\" style=\"width:42%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-yellow\">\r\n          <h6 class=\"text-white m-b-0\">Unanswered: 42</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- statustic with progress end -->\r\n\r\n    <!-- users visite and profile start -->\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n      <div class=\"card user-card\">\r\n        <div class=\"card-header\">\r\n          <h5>Profile</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"usre-image\">\r\n            <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n          </div>\r\n          <h6 class=\"f-w-600 m-t-25 m-b-10\">Alessa Robert</h6>\r\n          <p class=\"text-muted\">Active | Male | Born 23.05.1992</p>\r\n          <hr/>\r\n          <p class=\"text-muted m-t-15\">Activity Level: 87%</p>\r\n          <ul class=\"list-unstyled activity-leval\">\r\n            <li class=\"active\"></li>\r\n            <li class=\"active\"></li>\r\n            <li class=\"active\"></li>\r\n            <li></li>\r\n            <li></li>\r\n          </ul>\r\n          <div class=\"bg-c-blue counter-block m-t-10 p-20\">\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <i class=\"icon-comments\"></i>\r\n                <p>1256</p>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <i class=\"icon-user\"></i>\r\n                <p>8562</p>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <i class=\"icon-bag\"></i>\r\n                <p>189</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <p class=\"m-t-15 text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>\r\n          <hr/>\r\n          <div class=\"row justify-content-center user-social-link\">\r\n            <div class=\"col-auto\"><a href=\"javascript:\"><i class=\"fa fa-facebook text-facebook\"></i></a></div>\r\n            <div class=\"col-auto\"><a href=\"javascript:\"><i class=\"fa fa-twitter text-twitter\"></i></a></div>\r\n            <div class=\"col-auto\"><a href=\"javascript:\"><i class=\"fa fa-dribbble text-dribbble\"></i></a></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- SEO-card start -->\r\n    <div class=\"col-xl-5 col-lg-12\">\r\n      <div class=\"card seo-card\">\r\n        <img src=\"assets/images/widget/seoimg1.jpg\" alt=\"seo bg\" class=\"img-fluid\">\r\n        <div class=\"overlay-bg bg-c-blue\"></div>\r\n        <div class=\"card-block seo-content\">\r\n          <span class=\"label label-success\">Traffic</span>\r\n          <h4 class=\"m-t-10\">Devices and resolutinon</h4>\r\n          <p class=\"m-b-0 m-t-20\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-lg-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"card seo-card\">\r\n            <img src=\"assets/images/widget/seoimg2.jpg\" alt=\"seo bg\" class=\"img-fluid\">\r\n            <div class=\"overlay-bg\"></div>\r\n            <div class=\"card-block seo-content\">\r\n              <h6>New Users</h6>\r\n              <p class=\"m-b-5 m-t-30\"><i class=\"fa fa-caret-up text-c-green m-r-10\"></i> +52%</p>\r\n              <p class=\"m-b-0\">Calculated in 7 days</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"card seo-card\">\r\n            <img src=\"assets/images/widget/seoimg3.jpg\" alt=\"seo bg\" class=\"img-fluid\">\r\n            <div class=\"overlay-bg\"></div>\r\n            <div class=\"card-block seo-content\">\r\n              <h6>Bounce Rate</h6>\r\n              <p class=\"m-b-5 m-t-30\"><i class=\"fa fa-caret-down text-c-pink m-r-10\"></i> -82%</p>\r\n              <p class=\"m-b-0\">Calculated in 7 days</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- SEO-card end -->\r\n\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Summary</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\">\r\n              <h2 class=\"d-inline-block text-c-blue m-r-10\">46</h2>\r\n              <div class=\"d-inline-block\">\r\n                <p class=\"m-b-0\"><i class=\"fa fa-caret-up m-r-10 text-c-green\"></i>100%</p>\r\n                <p class=\"text-muted\">New Installation</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <h2 class=\"d-inline-block text-c-green m-r-10\">897</h2>\r\n              <div class=\"d-inline-block\">\r\n                <p class=\"m-b-0\"><i class=\"fa fa-caret-down m-r-10 text-c-pink\"></i>10%</p>\r\n                <p class=\"text-muted\">Total Users</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <h2 class=\"d-inline-block text-c-pink m-r-10\">8456</h2>\r\n              <div class=\"d-inline-block\">\r\n                <p class=\"m-b-0\"><i class=\"fa fa-caret-up m-r-10 text-c-green\"></i>87%</p>\r\n                <p class=\"text-muted\">Total Views</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- users visite and profile end -->\r\n\r\n\r\n    <!-- Whether card start -->\r\n    <div class=\"col-lg-8 col-md-12\">\r\n      <div class=\"card wather-card\">\r\n        <div class=\"sparcle\">\r\n          <p class=\"text-white f-right m-t-25 m-r-25\"><i class=\"fa fa-map-marker m-r-10\"></i>Hong Kong <small class=\"m-l-10\">am 10:00</small></p>\r\n          <img src=\"assets/images/widget/sparcle-1.png\" alt=\"User-Image\" class=\"img-fluid s-img-1\">\r\n          <img src=\"assets/images/widget/sparcle-2.png\" alt=\"User-Image\" class=\"img-fluid s-img-2\">\r\n          <img src=\"assets/images/widget/mountain.png\" alt=\"User-Image\" class=\"img-fluid mountain\">\r\n          <div class=\"sun\"></div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"progress-label\">\r\n                <span>-6°c</span>\r\n              </div>\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar bg-c-blue\">\r\n                  <div class=\"turmo-bar\" style=\"width:60%\"></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <p class=\"m-b-0\"><span class=\"text-c-blue\">Air Quality:</span> Excellent</p>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <p class=\"m-b-0\"><span class=\"text-c-blue\">Relative Humidity:</span> 12%</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"row justify-content-end m-t-10 \">\r\n                <div class=\"col-auto\">\r\n                  <i class=\"icon-shine f-30 text-c-blue\"></i>\r\n                  <p class=\"text-c-blue m-b-5\">-2°c</p>\r\n                  <h6 class=\"m-b-0\">12:00</h6>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <i class=\"icon-bolt f-30 text-c-blue\"></i>\r\n                  <p class=\"text-c-blue m-b-5\">-5°c</p>\r\n                  <h6 class=\"m-b-0\">16:00</h6>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <i class=\"icon-cloud f-30 text-c-blue\"></i>\r\n                  <p class=\"text-c-blue m-b-5\">-6°c</p>\r\n                  <h6 class=\"m-b-0\">18:00</h6>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Popular</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"popular-img-block\">\r\n            <img class=\"img-fluid\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-1\">\r\n            <img class=\"img-fluid\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-2\">\r\n            <img class=\"img-fluid\" src=\"assets/images/mega-menu/03.jpg\" alt=\"Gallery-3\">\r\n            <img class=\"img-fluid\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-4\">\r\n            <img class=\"img-fluid\" src=\"assets/images/mega-menu/03.jpg\" alt=\"Gallery-5\">\r\n            <img class=\"img-fluid\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-6\">\r\n            <img class=\"img-fluid\" src=\"assets/images/mega-menu/03.jpg\" alt=\"Gallery-4\">\r\n            <img class=\"img-fluid\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-5\">\r\n            <img class=\"img-fluid\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-6\">\r\n            <img class=\"img-fluid\" src=\"assets/images/mega-menu/01.jpg\" alt=\"Gallery-4\">\r\n            <img class=\"img-fluid\" src=\"assets/images/mega-menu/02.jpg\" alt=\"Gallery-5\">\r\n            <img class=\"img-fluid\" src=\"assets/images/mega-menu/03.jpg\" alt=\"Gallery-6\">\r\n          </div>\r\n          <div class=\"text-center m-t-15\">\r\n            <button class=\"btn btn-outline-primary btn-round btn-sm\">Load More</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Whether card end -->\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/widget/statistic/statistic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#seo-card1 canvas,\n#seo-card2 canvas {\n  height: 150px !important;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px; }\n  @media only screen and (max-width: 768px) {\n    #seo-card1 canvas,\n    #seo-card2 canvas {\n      padding-bottom: 30px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/widget/statistic/statistic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticComponent; });
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

var StatisticComponent = (function () {
    function StatisticComponent() {
    }
    StatisticComponent.prototype.ngOnInit = function () {
    };
    StatisticComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-statistic',
            template: __webpack_require__("../../../../../src/app/theme/widget/statistic/statistic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/widget/statistic/statistic.component.scss"), __webpack_require__("../../../../../src/assets/icon/icofont/css/icofont.scss"), __webpack_require__("../../../../../src/assets/charts/radial/css/radial.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], StatisticComponent);
    return StatisticComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/widget/statistic/statistic.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticModule", function() { return StatisticModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistic_component__ = __webpack_require__("../../../../../src/app/theme/widget/statistic/statistic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__statistic_routing_module__ = __webpack_require__("../../../../../src/app/theme/widget/statistic/statistic-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var StatisticModule = (function () {
    function StatisticModule() {
    }
    StatisticModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__statistic_routing_module__["a" /* StatisticRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_chartjs__["ChartModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__statistic_component__["a" /* StatisticComponent */]]
        })
    ], StatisticModule);
    return StatisticModule;
}());



/***/ })

});
//# sourceMappingURL=statistic.module.chunk.js.map