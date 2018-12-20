(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-dashboards-dashboards-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/Subject.js":
/*!***************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Subject.js ***!
  \***************************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]; });


//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./src/app/fake-db/shared-db.service.ts":
/*!**********************************************!*\
  !*** ./src/app/fake-db/shared-db.service.ts ***!
  \**********************************************/
/*! exports provided: MyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyService", function() { return MyService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MyService = /** @class */ (function () {
    function MyService() {
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    MyService.prototype.sendMessage = function (message) {
        this.subject.next({ id: message });
    };
    MyService.prototype.clearMessage = function () {
        this.subject.next();
    };
    MyService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    MyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MyService);
    return MyService;
}());



/***/ }),

/***/ "./src/app/main/dashboards/dashboards.module.ts":
/*!******************************************************!*\
  !*** ./src/app/main/dashboards/dashboards.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _album_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@album/shared.module */ "./src/@album/shared.module.ts");
/* harmony import */ var _fake_db_shared_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fake-db/shared-db.service */ "./src/app/fake-db/shared-db.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'dashboards/professional',
        loadChildren: './professional/professional.module#ProfessionalDashboardModule'
    },
    {
        path: 'dashboards/projects',
        loadChildren: './projects/projects.module#ProjectsDashboardModule'
    },
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _album_shared_module__WEBPACK_IMPORTED_MODULE_2__["AlbumSharedModule"]
            ],
            providers: [
                _fake_db_shared_db_service__WEBPACK_IMPORTED_MODULE_3__["MyService"]
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-dashboards-dashboards-module.js.map