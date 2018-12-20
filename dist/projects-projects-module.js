(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./src/app/main/dashboards/projects/projects.component.html":
/*!******************************************************************!*\
  !*** ./src/app/main/dashboards/projects/projects.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard-project\" class=\"page-layout simple right-sidebar\" fxLayout=\"row\">\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n      <!-- HEADER -->\n      <div class=\"header p-24 pb-0\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"column\" fxLayoutAlign.gt-xs=\"center start\">\n                <div class=\"white-fg\"  fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <mat-icon class=\" s-18\">home</mat-icon>\n                    <mat-icon class=\"s-16\">chevron_right</mat-icon>\n                    <span class=\"\">Projects</span>\n                    <mat-icon class=\" s-16\">chevron_right</mat-icon>\n                    <span class=\"\">Home</span>\n                </div>\n                <div class=\"h2 mt-16\">{{selectedProject.name}}</div>\n            </div>\n    \n            <a *ngIf=\"projectsData.allowedToViewRef\" mat-raised-button class=\"reference-button mat-white-bg mt-16 mt-sm-0\" (click)=\"refranceSelected(projectsData.referance)\"\n               >\n                <mat-icon class=\"mr-8\">link</mat-icon>\n                <span>Reference</span>\n            </a>\n          </div>\n\n          <div fxLayout=\"row\">\n\n              <div class=\"selected-project\">{{selectedProject.name}}</div>\n\n              <button mat-icon-button class=\"project-selector\" [matMenuTriggerFor]=\"projectsMenu\"\n                      aria-label=\"Select project\">\n                  <mat-icon>more_horiz</mat-icon>\n              </button>\n\n              <mat-menu #projectsMenu=\"matMenu\">\n                  <button mat-menu-item *ngFor=\"let project of listOfProjects\" (click)=\"selectedProjectFromList(project)\">\n                      <span>{{project.name}}</span>\n                  </button>\n              </mat-menu>\n          </div>\n      </div>\n      <!-- / HEADER -->\n \n      <!-- CONTENT -->\n      <div class=\"content\">\n\n          <mat-tab-group dynamicHeight>\n            <mat-tab label=\"Project Summary\">\n                <!-- WIDGET GROUP -->\n                <div class=\"widget-group grey-100-bg\" fxLayout=\"row wrap\" fxFlex=\"100\" *albumIfOnDom\n                     [@animateStagger]=\"{value:'50'}\">\n\n                     <div class=\"page-layout simple fullwidth\">\n\n                      <!-- summary-header -->\n                      <div class=\"summary-header\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                  \n                          <div class=\"hero-text\" fxLayout=\"column\"  fxLayoutAlign=\"center center\" fxFlex>\n                  \n                              <div class=\"h1\">{{projectsData.Description.title}}!</div>\n                              <div class=\"h3\">\n                                {{projectsData.location.State}}\n                                <mat-icon class=\"s-16 ml-4\">location_on</mat-icon>\n                             </div>\n                              <div class=\"h3\">\n                                 {{projectsData.Description.subTitle}}!\n                              </div>\n                  \n                          </div>\n                  \n                      </div>\n                      <!-- / summary-header -->\n                  \n                      <!-- CONTENT -->\n                      <div class=\"content\" fxLayout=\"column\">\n    \n                          <div class=\"price-tables\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n                              <div class=\"price-table mat-elevation-z2\" fxLayout=\"column\">\n                                  <div class=\"px-16 border-bottom p-16\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                                      <div class=\"h3\"  fxFlex=\"100\" fxFlex.gt-sm=\"50\">{{projectsData.widget6.title}}</div>\n                                      <mat-form-field  fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n                                          <mat-select class=\"simplified\" [(ngModel)]=\"widget6.currentProject\" aria-label=\"Change project\">\n                                              <mat-option *ngFor=\"let project of projectsData.widget6.projects | keys\"\n                                                          [value]=\"project.key\">\n                                                  {{project.value}}\n                                              </mat-option>\n                                          </mat-select>\n                                      </mat-form-field>\n                                  </div>\n                                  <div class=\"h-400\">\n                                      <ngx-charts-pie-chart\n                                          *albumIfOnDom\n                                          [scheme]=\"widget6.scheme\"\n                                          [results]=\"projectsData.widget6.mainChart[widget6.currentProject]\"\n                                          [legend]=\"widget6.showLegend\"\n                                          [explodeSlices]=\"widget6.explodeSlices\"\n                                          [labels]=\"widget6.labels\"\n                                          [doughnut]=\"widget6.doughnut\"\n                                          [gradient]=\"widget6.gradient\"\n                                          (select)=\"widget6.onSelect($event)\">\n                                      </ngx-charts-pie-chart>\n                                  </div>\n                              </div>\n                  \n                             \n                  \n                          </div>\n                  \n                          <div class=\"faq\" fxLayout=\"row wrap\">\n                  \n                              <div class=\"title\" fxFlex=\"100\">About Projects</div>\n                  \n                              <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" *ngFor=\"let descriptionByProj of projectsData.Description.descriptionByProj\">\n                                  <div class=\"question\">{{descriptionByProj.title}}</div>\n                                  <div class=\"answer\">\n                                     {{descriptionByProj.desc}}.\n                                  </div>\n                              </div>\n                  \n                          </div>\n                  \n                      </div>\n                  \n                  </div>\n                  \n                  \n                </div>\n                <!-- / WIDGET GROUP -->\n\n            </mat-tab>\n              <mat-tab label=\"Tasks Details\">\n\n                  <div class=\"widget-group grey-100-bg p-12\" fxLayout=\"row wrap\" fxFlex=\"100\" *albumIfOnDom\n                       [@animateStagger]=\"{value:'50'}\">\n                             <!-- WIDGET 2 -->\n      <album-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\n      fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"33\">\n  \n          <!-- Front -->\n          <div class=\"album-widget-front mat-white-bg mat-elevation-z2\">\n          <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\n              fxLayoutAlign=\"space-between center\">\n          <mat-form-field>\n              <mat-select class=\"simplified font-size-16\"\n                          [(ngModel)]=\"projectsData.widget1.currentRange\"\n                          aria-label=\"Change range\">\n                  <mat-option *ngFor=\"let range of projectsData.widget1.projects | keys\"\n                              [value]=\"range.key\">\n                      {{range.value}}\n                  </mat-option>\n              </mat-select>\n          </mat-form-field>\n          <button mat-icon-button albumWidgetToggle aria-label=\"more\">\n              <mat-icon>more_vert</mat-icon>\n          </button>\n          </div>\n  \n          <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <div class=\"light-blue-fg font-size-72 line-height-72\">\n              {{projectsData.widget1.data.count[projectsData.widget1.currentRange]}}\n          </div>\n          <div class=\"h3 secondary-text font-weight-500\">{{projectsData.widget1.data.label}}\n          </div>\n          </div>\n          </div>\n          <!-- / Front -->\n  \n          <!-- Back -->\n          <div class=\"album-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\n          <button mat-icon-button albumWidgetToggle class=\"album-widget-flip-button\"\n              aria-label=\"Flip widget\">\n          <mat-icon class=\"s-16\">close</mat-icon>\n          </button>\n  \n          <div>\n          {{projectsData.widget1.detail}}\n          </div>\n          </div>\n          <!-- / Back -->\n  \n          </album-widget>\n          <!-- / WIDGET 2 -->\n    <!-- WIDGET 1 -->\n    <album-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\n    fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"34\">\n\n        <!-- Front -->\n        <div class=\"album-widget-front mat-white-bg mat-elevation-z2\">\n        <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\n            fxLayoutAlign=\"space-between center\">\n  \n        </div>\n\n        <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <div class=\"blue-grey-fg font-size-72 line-height-72\">\n            {{projectsData.widget2.data.count}}\n        </div>\n        <div class=\"h3 secondary-text font-weight-500\">{{projectsData.widget2.data.label}}\n        </div>\n        </div>\n        <div class=\"py-8 mh-16 border-top\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n\n                <div class=\"py-8 border-right\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n                     fxFlex=\"100\" fxFlex.gt-sm=\"50\">\n                    <span class=\"mat-display-1 mb-0\">\n                            {{projectsData.widget2.data.enhancements}}\n                    </span>\n                    <span class=\"h4\">{{projectsData.widget2.data.enhancementslabel}}</span>\n                </div>\n\n                <div class=\"py-8\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"100\"\n                     fxFlex.gt-sm=\"50\">\n                    <span class=\"mat-display-1 mb-0\">\n                            {{projectsData.widget2.data.defects}}\n                    </span>\n                    <span class=\"h4\">{{projectsData.widget2.data.defectslabel}}</span>\n                </div>\n            </div>\n        </div>\n        <!-- / Front -->\n\n        </album-widget>\n        <!-- / WIDGET 1 -->\n\n     <!-- WIDGET 3 -->\n     <album-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\n     fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"33\">\n \n         <!-- Front -->\n         <div class=\"album-widget-front mat-white-bg mat-elevation-z2\">\n         <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\n             fxLayoutAlign=\"space-between center\">\n         <mat-form-field>\n             <mat-select class=\"simplified font-size-16\"\n                         [(ngModel)]=\"projectsData.widget3.currentRange\"\n                         aria-label=\"Change range\">\n                 <mat-option *ngFor=\"let range of projectsData.widget3.projects | keys\"\n                             [value]=\"range.key\">\n                     {{range.value}}\n                 </mat-option>\n             </mat-select>\n         </mat-form-field>\n         </div>\n \n         <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n         <div class=\"orange-fg font-size-72 line-height-72\">\n             {{projectsData.widget3.data.count[projectsData.widget3.currentRange]}}\n         </div>\n         <div class=\"h3 secondary-text font-weight-500\">{{projectsData.widget3.data.label}}\n         </div>\n         </div>\n         </div>\n         <!-- / Front -->\n         </album-widget>\n         <!-- / WIDGET 3 -->\n      <!-- WIDGET 5 -->\n<album-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" fxLayout=\"row\" fxFlex=\"100\"\n      class=\"widget widget5\">\n\n            <!-- Front -->\n            <div class=\"album-widget-front mat-white-bg mat-elevation-z2\">\n\n            <div class=\"px-16 border-bottom\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n\n                <div fxFlex class=\"py-16 h3\">Application Screen Shots</div>\n            </div>\n            <div class=\"p-24\" albumPerfectScrollbar>\n                    <div *ngIf=\"!projectsData.permissionToViewImage\" class=\"py-16 h3\">No Permissions to display original content, below are samples.</div>\n                    <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\n                        <div *ngFor=\"let image of projectsData.images\">\n                            <div *ngIf=\"projectsData.images.length > 0\"\n                                    class=\"product-image\" fxlayout=\"row\" fxLayoutAlign=\"center center\">\n                                <img class=\"media\" [src]=\"image.url\">\n                            </div>\n                        </div>\n                </div>\n                </div>\n            </div>\n            <!-- / Front -->\n\n</album-widget>\n<!-- / WIDGET 5 -->\n                  </div>\n                  <!-- / WIDGET GROUP -->\n\n              </mat-tab>\n              <mat-tab label=\"Team Members\">\n   <!-- WIDGET GROUP -->\n   <div class=\"widget-group grey-100-bg\" fxLayout=\"row wrap\" fxFlex=\"100\" *albumIfOnDom\n   [@animateStagger]=\"{value:'50'}\">\n\n  <!-- WIDGET 11 -->\n  <album-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"row\"\n               fxFlex=\"100\">\n\n      <!-- Front -->\n      <div class=\"album-widget-front mat-white-bg mat-elevation-z2\">\n\n          <div class=\"p-24 mb-8 border-bottom\" fxLayout=\"row\"\n               fxLayoutAlign=\"space-between center\">\n              <div class=\"h2\">{{projectsData.teamMembers.title}}</div>\n              <div class=\"text-boxed red-bg white-fg m-0\">\n                  {{projectsData.teamMembers.table.rows.length}}\n                  members\n              </div>\n          </div>\n\n          <mat-table #table [dataSource]=\"teamMembers.dataSource\">\n\n              <!-- Avatar Column -->\n              <ng-container matColumnDef=\"avatar\">\n                  <mat-header-cell fxFlex=\"96px\" *matHeaderCellDef></mat-header-cell>\n                  <mat-cell fxFlex=\"96px\" *matCellDef=\"let contact\">\n                      <img class=\"avatar\" *ngIf=\"contact.avatar\" [alt]=\"contact.name\"\n                           [src]=\"contact.avatar\"/>\n                  </mat-cell>\n              </ng-container>\n\n              <!-- Name Column -->\n              <ng-container matColumnDef=\"name\">\n                  <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-md> Name</mat-header-cell>\n                  <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-md>\n                      <p class=\"text-truncate\">...\n                         </p>\n                  </mat-cell>\n              </ng-container>\n\n              <!-- Role Column -->\n              <ng-container matColumnDef=\"role\">\n                  <mat-header-cell *matHeaderCellDef>Role\n                  </mat-header-cell>\n                  <mat-cell *matCellDef=\"let contact\">\n                      <p class=\"position text-truncate font-weight-600\">\n                          {{contact.role}}\n                      </p>\n                  </mat-cell>\n              </ng-container>\n\n              <!-- Office Column -->\n              <ng-container matColumnDef=\"office\">\n                  <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-md>Office\n                  </mat-header-cell>\n                  <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-md>\n                      <p class=\"office text-truncate\">\n                          {{contact.office}}\n                      </p>\n                  </mat-cell>\n              </ng-container>\n\n                <!-- Active Column -->\n                <ng-container matColumnDef=\"status\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header>Current Status at Project</mat-header-cell>\n                    <mat-cell *matCellDef=\"let contact\" >\n                        <mat-icon *ngIf=\"contact.status\" class=\"active-icon mat-green-600-bg s-16\" style=\"border-radius: 50%\">check</mat-icon>\n                        <mat-icon *ngIf=\"!contact.status\" class=\"active-icon mat-red-500-bg s-16\" style=\"border-radius: 50%\">close</mat-icon>\n                    </mat-cell>\n                </ng-container>\n\n              <mat-header-row\n                  *matHeaderRowDef=\"projectsData.teamMembers.table.columns\"></mat-header-row>\n              <mat-row *matRowDef=\"let contact; columns: projectsData.teamMembers.table.columns;\">\n              </mat-row>\n          </mat-table>\n      </div>\n      <!-- / Front -->\n\n  </album-widget>\n  <!-- / WIDGET 11 -->\n\n</div>\n<!-- / WIDGET GROUP -->\n\n              </mat-tab>\n          </mat-tab-group>\n\n      </div>\n      <!-- / CONTENT -->\n\n  </div>\n  <!-- / CENTER -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/dashboards/projects/projects.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/main/dashboards/projects/projects.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#dashboard-project > .sidebar {\n  width: 280px;\n  min-width: 280px;\n  max-width: 280px; }\n#dashboard-project > .center > .header {\n  height: 160px;\n  min-height: 160px;\n  max-height: 160px;\n  background: #595959;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #595959, #b67878);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  position: relative;\n  color: #FFFFFF; }\n#dashboard-project > .center > .header .selected-project {\n    background: rgba(0, 0, 0, 0.12);\n    color: #FFFFFF;\n    padding: 8px 16px;\n    height: 40px;\n    line-height: 24px;\n    font-size: 16px; }\n#dashboard-project > .center > .header .project-selector {\n    margin-left: 1px;\n    border-radius: 0;\n    background: rgba(0, 0, 0, 0.12); }\n#dashboard-project > .center > .header .project-selector mat-icon {\n      color: #FFFFFF; }\n#dashboard-project > .center > .content {\n  flex: 1; }\n#dashboard-project > .center > .content mat-tab-group {\n    height: 100%; }\n#dashboard-project > .center > .content mat-tab-group .mat-tab-body-wrapper {\n      flex-grow: 1; }\n#dashboard-project > .center > .content .mat-tab-label-container {\n    padding: 0 24px; }\n#dashboard-project .widget.widget5 .gridline-path.gridline-path-horizontal {\n  display: none; }\n#dashboard-project .summary-header {\n  padding: 24px;\n  height: 600px;\n  min-height: 600px;\n  background: #00f260;\n  background: linear-gradient(to right, #00f260, #0575e6); }\n@media (max-width: 599px) {\n    #dashboard-project .summary-header {\n      height: 550px;\n      min-height: 400px; } }\n#dashboard-project .summary-header .hero-text {\n    margin: 80px 24px; }\n@media (max-width: 599px) {\n      #dashboard-project .summary-header .hero-text {\n        margin: 32px 24px; } }\n#dashboard-project .summary-header .hero-text .h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 400;\n      letter-spacing: 0.01em;\n      text-align: center; }\n@media (max-width: 599px) {\n        #dashboard-project .summary-header .hero-text .h1 {\n          font-size: 32px; } }\n#dashboard-project .summary-header .hero-text .h3 {\n      color: rgba(255, 255, 255, 0.75);\n      max-width: 480px;\n      text-align: center;\n      margin-top: 16px;\n      font-weight: 300;\n      letter-spacing: 0.05em; }\n@media (max-width: 599px) {\n        #dashboard-project .summary-header .hero-text .h3 {\n          font-size: 14px; } }\n#dashboard-project .price-tables {\n  flex: 1 0 auto;\n  margin-top: -192px; }\n@media (max-width: 599px) {\n    #dashboard-project .price-tables {\n      margin-top: -128px; } }\n#dashboard-project .price-tables .price-table {\n    margin: 12px; }\n#dashboard-project .faq {\n  flex: 1 0 auto;\n  margin: 96px auto;\n  max-width: 840px; }\n#dashboard-project .faq .title {\n    font-size: 32px;\n    font-weight: 300;\n    text-align: center;\n    margin-bottom: 64px;\n    padding: 0 16px; }\n#dashboard-project .faq .item {\n    padding: 24px; }\n#dashboard-project .faq .item .question {\n      font-size: 18px;\n      margin-bottom: 8px; }\n#dashboard-project .faq .item .answer {\n      font-size: 16px;\n      line-height: 1.5;\n      color: rgba(0, 0, 0, 0.54); }\n#dashboard-project .product-image {\n  overflow: hidden;\n  width: 250px;\n  height: 128px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n#dashboard-project .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n"

/***/ }),

/***/ "./src/app/main/dashboards/projects/projects.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/dashboards/projects/projects.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectsComponent, FilesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDataSource", function() { return FilesDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _album_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@album/components/sidebar/sidebar.service */ "./src/@album/components/sidebar/sidebar.service.ts");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.service */ "./src/app/main/dashboards/projects/projects.service.ts");
/* harmony import */ var _album_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@album/animations */ "./src/@album/animations/index.ts");
/* harmony import */ var _fake_db_shared_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../fake-db/shared-db.service */ "./src/app/fake-db/shared-db.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectsComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {AlbumSidebarService} _albumSidebarService
     * @param {ProjectDashboardService} _projectDashboardService
     * @param {MyService} myService
     */
    function ProjectsComponent(_albumSidebarService, _projectDashboardService, _myService) {
        this._albumSidebarService = _albumSidebarService;
        this._projectDashboardService = _projectDashboardService;
        this._myService = _myService;
        this.teamMembers = {};
        this.widget6 = {};
        this.dateNow = Date.now();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Load widgets
    // -----------------------------------------------------------------------------------------------------
    ProjectsComponent.prototype.loadwidget = function () {
        this.widget6 = {
            currentProject: this.projectsData.widget6.currentProject,
            legend: false,
            explodeSlices: false,
            labels: true,
            doughnut: true,
            gradient: false,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#D48D34', '#4D4E62', '#8E9ADA'],
            },
            onSelect: function (ev) {
            }
        };
        this.teamMembers.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.teamMembers.onContactsChanged.next(this.projectsData.teamMembers.table.rows);
        this.teamMembers.dataSource = new FilesDataSource(this.teamMembers);
    };
    /**
     * On init
     */
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listOfProjects = this._projectDashboardService.listOfProjects;
        this.projectSelectOnDashboard = this._myService.id;
        if (!!this.projectSelectOnDashboard && this.projectSelectOnDashboard !== null) {
            var project = this._projectDashboardService.listOfProjects.filter(function (fi) { return fi.id === _this.projectSelectOnDashboard; });
            this.selectedProject = project[0];
        }
        else {
            this.selectedProject = this.listOfProjects[0];
        }
        this.selectedProjectFromList(this.selectedProject);
        this._myService.id = undefined;
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    ProjectsComponent.prototype.projectDataBasedOnSelection = function (project) {
        this.selectedProject = project;
        var filteredProject = this._projectDashboardService.projectsData.projects.filter(function (fi) { return fi.projectId === project.id; });
        this.projectsData = filteredProject[0];
        console.log(this.projectSelectOnDashboard, '--test');
        // this._myService.clearMessage();
        this.loadwidget();
    };
    ProjectsComponent.prototype.selectedProjectFromList = function (project) {
        this.projectDataBasedOnSelection(project);
    };
    ProjectsComponent.prototype.refranceSelected = function (url) {
        window.open(url, '_blank');
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/main/dashboards/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/main/dashboards/projects/projects.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _album_animations__WEBPACK_IMPORTED_MODULE_5__["albumAnimations"],
        }),
        __metadata("design:paramtypes", [_album_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["AlbumSidebarService"],
            _projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsDashboardService"],
            _fake_db_shared_db_service__WEBPACK_IMPORTED_MODULE_6__["MyService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    function FilesDataSource(_widget11) {
        var _this = _super.call(this) || this;
        _this._widget11 = _widget11;
        return _this;
    }
    FilesDataSource.prototype.connect = function () {
        return this._widget11.onContactsChanged;
    };
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/main/dashboards/projects/projects.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/dashboards/projects/projects.module.ts ***!
  \*************************************************************/
/*! exports provided: ProjectsDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsDashboardModule", function() { return ProjectsDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.service */ "./src/app/main/dashboards/projects/projects.service.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/main/dashboards/projects/projects.component.ts");
/* harmony import */ var _node_modules_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _node_modules_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _album_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@album/shared.module */ "./src/@album/shared.module.ts");
/* harmony import */ var _album_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@album/components */ "./src/@album/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '**',
        component: _projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
        resolve: {
            data: _projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsDashboardService"]
        }
    }
];
var ProjectsDashboardModule = /** @class */ (function () {
    function ProjectsDashboardModule() {
    }
    ProjectsDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _node_modules_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                _album_shared_module__WEBPACK_IMPORTED_MODULE_6__["AlbumSharedModule"],
                _album_components__WEBPACK_IMPORTED_MODULE_7__["AlbumSidebarModule"],
                _album_components__WEBPACK_IMPORTED_MODULE_7__["AlbumWidgetModule"]
            ],
            providers: [
                _projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsDashboardService"]
            ]
        })
    ], ProjectsDashboardModule);
    return ProjectsDashboardModule;
}());



/***/ }),

/***/ "./src/app/main/dashboards/projects/projects.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/dashboards/projects/projects.service.ts ***!
  \**************************************************************/
/*! exports provided: ProjectsDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsDashboardService", function() { return ProjectsDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsDashboardService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function ProjectsDashboardService(_httpClient) {
        this._httpClient = _httpClient;
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ProjectsDashboardService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getListOfProjects(),
                _this.geProjectsData()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get projects
     *
     * @returns {Promise<any>}
     */
    ProjectsDashboardService.prototype.getListOfProjects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/projects-dashboard-listofProjects')
                .subscribe(function (response) {
                _this.listOfProjects = response;
                resolve(response);
            }, reject);
        });
    };
    /**
     * Get widgets
     *
     * @returns {Promise<any>}
     */
    ProjectsDashboardService.prototype.geProjectsData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/projects-dashboard-data')
                .subscribe(function (response) {
                _this.projectsData = response;
                resolve(response);
            }, reject);
        });
    };
    ProjectsDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectsDashboardService);
    return ProjectsDashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=projects-projects-module.js.map