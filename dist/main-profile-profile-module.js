(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-profile-profile-module"],{

/***/ "./src/app/main/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"profile\" class=\"page-layout simple tabbed\">\n\n    <!-- HEADER -->\n    <div class=\"header p-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\n         fxLayoutAlign.gt-sm=\"space-between end\">\n\n        <div class=\"user-info\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\n             fxLayoutAlign.gt-sm=\"start center\">\n            <img class=\"profile-image avatar huge\" src=\"./assets/images/samples/kar.JPG\"\n                 [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n            <div class=\"name\" [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">KarthiK Nathani\n            </div>\n        </div>\n\n        <!-- <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" [@animate]=\"{value:'*',params:{delay:'200ms'}}\">\n            <button mat-raised-button color=\"accent\" aria-label=\"Follow\" (click)=\"openDoc()\">View Resume</button>\n            \n        </div> -->\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT -->\n    <div class=\"content\">\n\n        <mat-tab-group dynamicHeight=\"true\">\n\n            <mat-tab label=\"About Me\">\n                <profile-about></profile-about>\n            </mat-tab>\n        </mat-tab-group>\n\n    </div>\n    <!-- / CONTENT -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/profile/profile.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/main/profile/profile.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#profile .header {\n  height: 320px;\n  min-height: 320px;\n  max-height: 320px;\n  background-image: url('slide4.jpg'); }\n#profile .header .profile-image {\n    margin-right: 24px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .profile-image {\n        margin: 0 0 16px 0; } }\n#profile .header .name {\n    font-size: 34px;\n    color: #FFFFFF; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .name {\n        margin-bottom: 32px; } }\n#profile .header .actions button {\n    text-transform: none;\n    padding: 0 16px;\n    height: 32px;\n    line-height: 32px;\n    margin: 0 0 0 8px; }\n#profile .content {\n  flex: 1; }\n#profile .content mat-tab-group {\n    height: 100%; }\n#profile .content mat-tab-group .mat-tab-body-wrapper {\n      flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/main/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _album_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@album/animations */ "./src/@album/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function ProfileComponent() {
    }
    ProfileComponent.prototype.openDoc = function () {
        var url = '../../../../../assets/documents/karthik_N Angular@UX&UI.pdf';
        window.open(url, '_blank');
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/main/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/main/profile/profile.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _album_animations__WEBPACK_IMPORTED_MODULE_1__["albumAnimations"]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/profile/profile.module.ts":
/*!************************************************!*\
  !*** ./src/app/main/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/main/profile/profile.component.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.service */ "./src/app/main/profile/profile.service.ts");
/* harmony import */ var _tabs_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/about/about.component */ "./src/app/main/profile/tabs/about/about.component.ts");
/* harmony import */ var _album_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@album/shared.module */ "./src/@album/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'profile',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        resolve: {
            profile: _profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
        }
    }
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
                _tabs_about_about_component__WEBPACK_IMPORTED_MODULE_5__["ProfileAboutComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _album_shared_module__WEBPACK_IMPORTED_MODULE_6__["AlbumSharedModule"]
            ],
            providers: [
                _profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/main/profile/profile.service.ts":
/*!*************************************************!*\
  !*** ./src/app/main/profile/profile.service.ts ***!
  \*************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function ProfileService(_httpClient) {
        this._httpClient = _httpClient;
        this.aboutOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ProfileService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getAbout(),
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get about
     */
    ProfileService.prototype.getAbout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/profile-about')
                .subscribe(function (about) {
                _this.about = about;
                _this.aboutOnChanged.next(_this.about);
                resolve(_this.about);
            }, reject);
        });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/main/profile/tabs/about/about.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main/profile/tabs/about/about.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"p-24\" fxLayout=\"row wrap\">\n\n    <div class=\"about-content\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"65\">\n\n        <div class=\"profile-box info-box general\" fxLayout=\"column\">\n\n            <header class=\"mat-blue-grey-bg\">\n                <div class=\"title\">General Information</div>\n            </header>\n\n            <div class=\"content\">\n                <div class=\"info-line\">\n                    <div class=\"title\">Locations</div>\n                    <div class=\"info location\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                         *ngFor=\"let location of about.general.locations\">\n                        <span>{{location}}</span>\n                        <mat-icon class=\"s-16 ml-4\">location_on</mat-icon>\n                    </div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">About Me</div>\n                    <div class=\"info\">{{about.general.about}}</div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"profile-box info-box work\" fxLayout=\"column\">\n\n            <header class=\"mat-blue-grey-bg\">\n                <div class=\"title\">Work</div>\n            </header>\n\n            <div class=\"content\">\n                <div class=\"info-line\">\n                    <div class=\"title\">Occupation</div>\n                    <div class=\"info\">{{about.work.occupation}}</div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">Skills</div>\n                    <div class=\"info\">{{about.work.skills}}</div>\n                </div>\n\n                <div class=\"info-line\">\n                    <div class=\"title\">Jobs</div>\n                    <table class=\"info jobs\">\n                        <tr class=\"job\" *ngFor=\"let job of about.work.jobs\">\n                            <td class=\"company\">{{job.company}}</td>\n                            <td class=\"date\">{{job.date}}</td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"profile-box info-box contact\" fxLayout=\"column\">\n\n            <header class=\"mat-blue-grey-bg\">\n                <div class=\"title\">Contact</div>\n            </header>\n\n            <div class=\"content\">\n                <div class=\"info-line\">\n                    <div class=\"title\">Address</div>\n                    <div class=\"info\">{{about.contact.address}}</div>\n                </div>\n                <div class=\"info-line\">\n                    <div class=\"title\">Website</div>\n                    <div class=\"info\" *ngFor=\"let website of about.contact.websites\">\n                        <span>{{website}}</span>\n                    </div>\n                </div>\n                <div class=\"info-line\">\n                    <div class=\"title\">Emails</div>\n                    <div class=\"info\" *ngFor=\"let email of about.contact.emails\">\n                        <span>{{email}}</span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"about-sidebar\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"35\">\n        <div class=\"profile-box groups\" fxLayout=\"column\">\n\n            <header class=\"mat-blue-bg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                <div class=\"title\">Developer Communities</div>\n            </header>\n\n            <div class=\"content\">\n\n                <div class=\"group\" *ngFor=\"let group of about.groups\" fxLayout=\"row\"\n                     fxLayoutAlign=\"space-between center\">\n\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                        <img [src]=\"group.logo\" class=\"logo\" style=\"width: 79px;height: 79px;\" alt=\"{{group.name}}\"/>\n\n                        <div>\n                            <div class=\"name\">{{group.name}}</div>\n                            <div class=\"category\">{{group.category}}</div>\n                        </div>\n                    </div>\n\n                    <!-- <button (click)=\"openInNewTab(group.url)\"  mat-icon-button aria-label=\"More\">\n                        <mat-icon>more_vert</mat-icon>\n                    </button> -->\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/profile/tabs/about/about.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main/profile/tabs/about/about.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #about {\n  max-width: 1200px; }\n:host #about .about-content .general .location mat-icon {\n    line-height: 13px !important; }\n:host #about .about-content .work .job .company {\n    padding: 0 16px 0 0;\n    font-weight: 500; }\n:host #about .about-content .work .job .date {\n    color: rgba(0, 0, 0, 0.54); }\n:host #about .about-sidebar {\n    padding-left: 32px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #about .about-sidebar {\n        padding: 8px; } }\n:host #about .about-sidebar .friends .content .friend {\n      padding: 4px; }\n:host #about .about-sidebar .groups .content .group {\n      margin-bottom: 16px; }\n:host #about .about-sidebar .groups .content .group:last-child {\n        margin-bottom: 0; }\n:host #about .about-sidebar .groups .content .group .logo {\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        margin-right: 16px; }\n:host #about .about-sidebar .groups .content .group .name {\n        font-weight: 500;\n        font-size: 15px; }\n:host #about .about-sidebar .groups .content .group .category,\n      :host #about .about-sidebar .groups .content .group .members {\n        color: rgba(0, 0, 0, 0.54); }\n:host #about .about-sidebar .groups .content .group .members {\n        margin-top: 16px; }\n:host .profile-box {\n  margin-bottom: 16px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n:host .profile-box header {\n    padding: 16px; }\n:host .profile-box header .title {\n      font-size: 17px; }\n:host .profile-box header .more {\n      cursor: pointer; }\n:host .profile-box .content {\n    padding: 16px;\n    background-color: #FFF; }\n:host .profile-box footer {\n    padding: 8px;\n    border-top: 1px solid rgba(0, 0, 0, 0.08);\n    background-color: rgba(0, 0, 0, 0.06); }\n:host .profile-box.info-box .info-line {\n    margin-bottom: 24px; }\n:host .profile-box.info-box .info-line .title {\n      font-size: 15px;\n      font-weight: 500;\n      padding-bottom: 4px; }\n:host .profile-box.info-box .info-line:last-child {\n      margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/main/profile/tabs/about/about.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/profile/tabs/about/about.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAboutComponent", function() { return ProfileAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _album_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@album/animations */ "./src/@album/animations/index.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../profile.service */ "./src/app/main/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileAboutComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ProfileService} _profileService
     */
    function ProfileAboutComponent(_profileService) {
        this._profileService = _profileService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ProfileAboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._profileService.aboutOnChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (about) {
            _this.about = about;
        });
    };
    /**
     * On destroy
     */
    ProfileAboutComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ProfileAboutComponent.prototype.openInNewTab = function (url) {
        window.open(url, '_blank');
    };
    ProfileAboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/main/profile/tabs/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/main/profile/tabs/about/about.component.scss")],
            animations: _album_animations__WEBPACK_IMPORTED_MODULE_3__["albumAnimations"]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]])
    ], ProfileAboutComponent);
    return ProfileAboutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=main-profile-profile-module.js.map