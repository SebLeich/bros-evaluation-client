(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_startpage_startpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/startpage/startpage.component */ "./src/app/components/startpage/startpage.component.ts");
/* harmony import */ var _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/questionnaire/questionnaire.component */ "./src/app/components/questionnaire/questionnaire.component.ts");






const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: _components_startpage_startpage_component__WEBPACK_IMPORTED_MODULE_2__["StartpageComponent"] },
    { path: "questionnaire", component: _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_3__["QuestionnaireComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_root_root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/root/root.component */ "./src/app/components/root/root.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_startpage_startpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/startpage/startpage.component */ "./src/app/components/startpage/startpage.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/questionnaire/questionnaire.component */ "./src/app/components/questionnaire/questionnaire.component.ts");
/* harmony import */ var _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/newsfeed/newsfeed.component */ "./src/app/components/newsfeed/newsfeed.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_root_root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_root_root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _components_startpage_startpage_component__WEBPACK_IMPORTED_MODULE_8__["StartpageComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
        _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_10__["QuestionnaireComponent"],
        _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_11__["NewsfeedComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_root_root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _components_startpage_startpage_component__WEBPACK_IMPORTED_MODULE_8__["StartpageComponent"],
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                    _components_questionnaire_questionnaire_component__WEBPACK_IMPORTED_MODULE_10__["QuestionnaireComponent"],
                    _components_newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_11__["NewsfeedComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]
                ],
                providers: [],
                bootstrap: [_components_root_root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");





class NavbarComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    gotoHome() {
        this.router.navigate(["/home"]);
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 14, vars: 0, consts: [[1, "body"], [1, "icon", 3, "click"], [1, "label"], [1, "spacer"], [1, "icon-container"], ["matTooltip", "Sprachauswahl", 1, "language"], [1, "flag-icon", "flag-icon-de"], ["matTooltip", "Registrieren Sie sich", 1, "register-icon"], ["matTooltip", "Melden Sie sich an", 1, "login-icon"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_mat_icon_click_1_listener() { return ctx.gotoHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Business Role-Object Specification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "group_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"]], styles: [".body[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #f0f0f0;\r\n    display: flex;\r\n    align-self: center;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    color: #d74081;\r\n    padding: 8px;\r\n    font-size: 40px;\r\n    height: auto;\r\n    width: auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\r\n    background-color: #d74081;\r\n    color: white;\r\n    transition: .6s;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    font-size: 20px;\r\n    margin-left: 7px;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\r\n\r\n.icon-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.icon-container[_ngcontent-%COMP%]   .flag-icon[_ngcontent-%COMP%] {\r\n    height: 15px;\r\n    width: 15px;\r\n    position: absolute;\r\n    right: 10px;\r\n    bottom: 10px;\r\n    border-radius: 3px;\r\n    overflow: hidden;\r\n    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n.language[_ngcontent-%COMP%] {\r\n    color: #3b7399;\r\n    padding: 12px;\r\n    font-size: 30px;\r\n    height: auto;\r\n    width: auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.register-icon[_ngcontent-%COMP%] {\r\n    color: #3b7399;\r\n    padding: 9px;\r\n    font-size: 36px;\r\n    height: auto;\r\n    width: auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.login-icon[_ngcontent-%COMP%] {\r\n    color: #799c7d;\r\n    padding: 12px;\r\n    font-size: 30px;\r\n    height: auto;\r\n    width: auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.language[_ngcontent-%COMP%]:hover, .register-icon[_ngcontent-%COMP%]:hover, .login-icon[_ngcontent-%COMP%]:hover {\r\n    color: #d74081;\r\n    transition: .5s;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUdoQiw0Q0FBNEM7QUFDaEQ7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvZHkgLmljb24ge1xyXG4gICAgY29sb3I6ICNkNzQwODE7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJvZHkgLmljb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3NDA4MTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IC42cztcclxufVxyXG5cclxuLmJvZHkgLmxhYmVsIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gICAgZmxleDogMTtcclxufVxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pY29uLWNvbnRhaW5lciAuZmxhZy1pY29uIHtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG4ubGFuZ3VhZ2Uge1xyXG4gICAgY29sb3I6ICMzYjczOTk7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJlZ2lzdGVyLWljb24ge1xyXG4gICAgY29sb3I6ICMzYjczOTk7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubG9naW4taWNvbiB7XHJcbiAgICBjb2xvcjogIzc5OWM3ZDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubGFuZ3VhZ2U6aG92ZXIsIC5yZWdpc3Rlci1pY29uOmhvdmVyLCAubG9naW4taWNvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2Q3NDA4MTtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");



class NavigationComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 31, vars: 0, consts: [[1, "body"], [1, "label"], [1, "icon"], [1, "headline"], [1, "text"], [1, "sub-title"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "pie_chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Zur Umfrage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Nehmen Sie direkt an der Umfrage teil und helfen Sie dabei, BROS zu evaluieren. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "account_tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00DCber BROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Erfahren Sie mehr \u00FCber die Business Role-Object Specification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "table_chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00DCber SEQUAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Lernen Sie den verwendeten Evaluationsansatz SEQUAL kennen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".body[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n    background-color: white;\r\n    height: 100%;\r\n}\r\n.label[_ngcontent-%COMP%] {\r\n    padding: 10px 15px;\r\n    cursor: pointer;\r\n    display: flex;\r\n}\r\n.label[_ngcontent-%COMP%]:hover {\r\n    background-color: #c61862;\r\n    color: white;\r\n    transition: .6s;\r\n}\r\n.label[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: auto;\r\n    font-size: 30px;\r\n    margin-right: 7px;\r\n    color: #ba6f8f;\r\n}\r\n.label[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-self: center;\r\n    font-size: 1.2rem;\r\n}\r\n.label[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\r\n    padding: 5px 0px;\r\n    color: #595959;\r\n    font-size: .8rem;\r\n}\r\n.label[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%], .label[_ngcontent-%COMP%]:hover   .sub-title[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmxhYmVsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNjE4NjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAuNnM7XHJcbn1cclxuLmxhYmVsIC5pY29uIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICBjb2xvcjogI2JhNmY4ZjtcclxufVxyXG4ubGFiZWwgLmhlYWRsaW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4ubGFiZWwgLnN1Yi10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgY29sb3I6ICM1OTU5NTk7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG59XHJcbi5sYWJlbDpob3ZlciAuaWNvbiwgLmxhYmVsOmhvdmVyIC5zdWItdGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/newsfeed/newsfeed.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/newsfeed/newsfeed.component.ts ***!
  \***********************************************************/
/*! exports provided: NewsfeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedComponent", function() { return NewsfeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NewsfeedComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NewsfeedComponent.ɵfac = function NewsfeedComponent_Factory(t) { return new (t || NewsfeedComponent)(); };
NewsfeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsfeedComponent, selectors: [["app-newsfeed"]], decls: 22, vars: 0, consts: [[1, "body"], [1, "news"], [1, "headline"], [1, "date"], [1, "sub-title"]], template: function NewsfeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fragebogen f\u00FCr die Evaluation verf\u00FCgbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "23. Mai 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ab sofort k\u00F6nnen Sie den Fragebogen f\u00FCr die Evaluation der Business Role-Object Specification bearbeiten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Framed.io wurde bereitgestellt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "31. Juli 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Framed.io ist ein Web-Editor f\u00FCr die Modellierung von BROS Modellen und kann ab sofort online genutzt werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "BROS Release");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "01. Februar 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Die Spezifikationen von der rollenbasierten Modellierungssprache BROS wurden released. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".body[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n    background-color: white;\r\n    padding: 3px;\r\n    height: 100%;\r\n}\r\n.news[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    background-color: #fff9c1;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    margin-bottom: 3px;\r\n}\r\n.news[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%] {\r\n\r\n}\r\n.news[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\r\n    font-size: .7rem;\r\n    color: #3b7399;\r\n}\r\n.news[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    font-size: .7rem;\r\n    color: grey;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzZmVlZC9uZXdzZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUVBOztBQUVBO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3NmZWVkL25ld3NmZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ubmV3cyB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOWMxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG59XHJcblxyXG4ubmV3cyAuaGVhZGxpbmUge1xyXG5cclxufVxyXG5cclxuLm5ld3MgLmRhdGUge1xyXG4gICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgIGNvbG9yOiAjM2I3Mzk5O1xyXG59XHJcblxyXG4ubmV3cyAuc3ViLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IC43cmVtO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsfeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newsfeed',
                templateUrl: './newsfeed.component.html',
                styleUrls: ['./newsfeed.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/questionnaire/questionnaire.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/questionnaire/questionnaire.component.ts ***!
  \*********************************************************************/
/*! exports provided: QuestionnaireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionnaireComponent", function() { return QuestionnaireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class QuestionnaireComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
QuestionnaireComponent.ɵfac = function QuestionnaireComponent_Factory(t) { return new (t || QuestionnaireComponent)(); };
QuestionnaireComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionnaireComponent, selectors: [["app-questionnaire"]], decls: 2, vars: 0, template: function QuestionnaireComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "questionnaire works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb25uYWlyZS9xdWVzdGlvbm5haXJlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionnaireComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-questionnaire',
                templateUrl: './questionnaire.component.html',
                styleUrls: ['./questionnaire.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/root/root.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/root/root.component.ts ***!
  \***************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class RootComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RootComponent.ɵfac = function RootComponent_Factory(t) { return new (t || RootComponent)(); };
RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RootComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "body"]], template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".body[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb290L3Jvb3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jvb3Qvcm9vdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './root.component.html',
                styleUrls: ['./root.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/startpage/startpage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/startpage/startpage.component.ts ***!
  \*************************************************************/
/*! exports provided: StartpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartpageComponent", function() { return StartpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../newsfeed/newsfeed.component */ "./src/app/components/newsfeed/newsfeed.component.ts");





class StartpageComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    gotoQuestionnaire() {
        this.router.navigate(["/questionnaire"]);
    }
    ngOnInit() {
    }
}
StartpageComponent.ɵfac = function StartpageComponent_Factory(t) { return new (t || StartpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
StartpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartpageComponent, selectors: [["app-startpage"]], decls: 32, vars: 0, consts: [[1, "body"], [1, "main-content"], [1, "tile", "evaluate-bros"], [1, "content"], [1, "tile-headline"], [1, "button", 3, "click"], [1, "tile", "about-bros"], [1, "highlighted"], [1, "tile", "about-sequal"]], template: function StartpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Evaluation von BROS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Helfen Sie uns dabei, BROS zu evaluieren und die St\u00E4rken und Schw\u00E4chen unseres Ansatzes kennenzulernen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartpageComponent_Template_div_click_9_listener() { return ctx.gotoQuestionnaire(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Zum Fragebogen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Business Role-Object Specification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "BROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Die Business Role-Object Specification ist ein rollenbasierter Modellierungsansatz. Als solcher nutzt er sowohl statische Strukturkomponenten als auch dynamische Prozesskomponenten. Dadurch ist BROS in der Lage, die Kommunikation innerhalb einer Dom\u00E4ne abzubilden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartpageComponent_Template_div_click_19_listener() { return ctx.gotoQuestionnaire(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Weitere Informationen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Semiotic Quality Framework ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SEQUAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartpageComponent_Template_div_click_28_listener() { return ctx.gotoQuestionnaire(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Weitere Informationen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-newsfeed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, ">");
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _newsfeed_newsfeed_component__WEBPACK_IMPORTED_MODULE_3__["NewsfeedComponent"]], styles: [".body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: calc(100vh - 50px);\r\n    background-color: #8d8d8d;\r\n}\r\n.main-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: 1;\r\n    overflow-y: scroll;\r\n    flex-direction: column;\r\n}\r\n.evaluate-bros[_ngcontent-%COMP%] {\r\n    background: url(/assets/bros.JPG);\r\n}\r\n.about-bros[_ngcontent-%COMP%] {\r\n    background: url(/assets/abros.png);\r\n}\r\n.tile[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    background-size: cover;\r\n    display: flex;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    border: 2px solid white;\r\n}\r\n.tile[_ngcontent-%COMP%]:not(:last-child) {\r\n    border-bottom: none;\r\n}\r\n.tile[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    flex: 2;\r\n    padding: 50px 20px;\r\n}\r\n.tile.evaluate-bros[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    background-color: #d74081ed;\r\n    color: white;\r\n}\r\n.tile.about-bros[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    background-color: #0a598ed1;\r\n    color: white;\r\n}\r\n.tile.about-sequal[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    background-color: #0a8e8cd1;\r\n    color: white;\r\n}\r\n.tile[_ngcontent-%COMP%]   .tile-headline[_ngcontent-%COMP%] {\r\n    font-size: 1.3rem;\r\n    margin-bottom: 20px;\r\n    text-transform: uppercase;\r\n}\r\n.spacer[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    border: 1px solid #dbdbdb;\r\n    border-left: 5px solid #ffffffed;\r\n}\r\n.tile[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    padding: 3px 8px;\r\n    background-color: #0000006e;\r\n    color: #ffffff;\r\n    border-radius: 3px;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    font-size: .9rem;\r\n}\r\n.highlighted[_ngcontent-%COMP%] {\r\n    padding: 0px 2px;\r\n    background-color: #ffd00080;\r\n    border-radius: 3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFydHBhZ2Uvc3RhcnRwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksT0FBTztJQUNQLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLE9BQU87SUFDUCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0YXJ0cGFnZS9zdGFydHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZDhkOGQ7XHJcbn1cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmV2YWx1YXRlLWJyb3Mge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYnJvcy5KUEcpO1xyXG59XHJcbi5hYm91dC1icm9zIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2Ficm9zLnBuZyk7XHJcbn1cclxuLnRpbGUge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi50aWxlOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4udGlsZSAuY29udGVudCB7XHJcbiAgICBmbGV4OiAyO1xyXG4gICAgcGFkZGluZzogNTBweCAyMHB4O1xyXG59XHJcbi50aWxlLmV2YWx1YXRlLWJyb3MgLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3NDA4MWVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50aWxlLmFib3V0LWJyb3MgLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNTk4ZWQxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50aWxlLmFib3V0LXNlcXVhbCAuY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE4ZThjZDE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnRpbGUgLnRpbGUtaGVhZGxpbmUge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uc3BhY2VyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZmZmZmZmZWQ7XHJcbn1cclxuLnRpbGUgLmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDZlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxufVxyXG4uaGlnaGxpZ2h0ZWQge1xyXG4gICAgcGFkZGluZzogMHB4IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQwMDA4MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-startpage',
                templateUrl: './startpage.component.html',
                styleUrls: ['./startpage.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sebastian\Documents\Repository\bros-evaluation-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map