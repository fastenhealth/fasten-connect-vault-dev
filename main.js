(self["webpackChunkfasten_connect_vault"] = self["webpackChunkfasten_connect_vault"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 24789);
/* harmony import */ var _pages_auth_signin_vault_profile_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/auth-signin/vault-profile-signin.component */ 61097);
/* harmony import */ var _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guards/is-authenticated-auth-guard */ 16056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [
    { path: 'auth/signin', component: _pages_auth_signin_vault_profile_signin_component__WEBPACK_IMPORTED_MODULE_1__.VaultProfileSigninComponent },
    { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, canActivate: [_auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_2__.IsAuthenticatedAuthGuard] },
    //must be at bottom of list
    { path: '**', redirectTo: 'auth/signin' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);




class AppComponent {
    constructor(router, 
    // private toastService: ToastService,
    modalService) {
        this.router = router;
        this.modalService = modalService;
        this.title = 'fastenhealth';
        this.showHeader = false;
        this.showFooter = true;
    }
    ngOnInit() {
        // navbar backdrop for mobile only
        const navbarBackdrop = document.createElement('div');
        navbarBackdrop.classList.add('az-navbar-backdrop');
        document.querySelector('body')?.appendChild(navbarBackdrop);
        //determine if we should show the header
        this.router.events.subscribe(event => this.routerEvent(event));
    }
    routerEvent(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
            //modify header
            if (event.url?.startsWith('/auth') || event.url?.startsWith('/desktop')) {
                this.showHeader = false;
            }
            else {
                // console.log("NU")
                this.showHeader = true;
            }
            // close all open modals when route change
            this.modalService.dismissAll();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "az-content-wrapper"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2976:
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiMode": () => (/* binding */ ApiMode)
/* harmony export */ });
var ApiMode;
(function (ApiMode) {
    ApiMode["Live"] = "live";
    ApiMode["Test"] = "test";
})(ApiMode || (ApiMode = {}));


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 2898);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-highlightjs */ 97101);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-infinite-scroll */ 47364);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 43646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 64662);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 24789);
/* harmony import */ var _pages_auth_signin_vault_profile_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/auth-signin/vault-profile-signin.component */ 61097);
/* harmony import */ var _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-guards/is-authenticated-auth-guard */ 16056);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-interceptor.service */ 32993);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-image-cropper */ 10649);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-moment */ 20728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
























class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.fas, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__.far);
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconLibrary)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
            useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_8__.AuthInterceptorService,
            multi: true,
            deps: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService, _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router]
        },
        _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_6__.IsAuthenticatedAuthGuard,
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__.HIGHLIGHT_OPTIONS,
            useValue: {
                fullLibraryLoader: () => __webpack_require__.e(/*! import() */ "node_modules_highlight_js_es_index_js").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js */ 7722)),
            }
        }
    ], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_19__.NgChartsModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_20__.InfiniteScrollModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_21__.ImageCropperModule,
        ngx_moment__WEBPACK_IMPORTED_MODULE_22__.MomentModule,
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__.HighlightModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
        _pages_auth_signin_vault_profile_signin_component__WEBPACK_IMPORTED_MODULE_5__.VaultProfileSigninComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_19__.NgChartsModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_20__.InfiniteScrollModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_21__.ImageCropperModule,
        ngx_moment__WEBPACK_IMPORTED_MODULE_22__.MomentModule,
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_15__.HighlightModule] }); })();


/***/ }),

/***/ 16056:
/*!************************************************************!*\
  !*** ./src/app/auth-guards/is-authenticated-auth-guard.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsAuthenticatedAuthGuard": () => (/* binding */ IsAuthenticatedAuthGuard)
/* harmony export */ });
/* harmony import */ var _home_runner_work_fasten_connect_vault_fasten_connect_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);





class IsAuthenticatedAuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    var _this = this;
    return (0,_home_runner_work_fasten_connect_vault_fasten_connect_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let jwtPayload = yield _this.authService.GetJWTPayload();
      //check if the user is authenticated, if not, redirect to login
      if (!jwtPayload) {
        return yield _this.router.navigate(['/auth/signin']);
      } else if (jwtPayload.org_id == '' || jwtPayload.org_id == null) {
        console.log("User is not associated with an organization, redirecting to org signup", jwtPayload);
        return yield _this.router.navigate(['/auth/signup/org']);
      }
      // continue as normal
      return true;
    })();
  }
}
IsAuthenticatedAuthGuard.ɵfac = function IsAuthenticatedAuthGuard_Factory(t) {
  return new (t || IsAuthenticatedAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
IsAuthenticatedAuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: IsAuthenticatedAuthGuard,
  factory: IsAuthenticatedAuthGuard.ɵfac
});

/***/ }),

/***/ 64662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _environments_versions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/versions */ 28496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class FooterComponent {
    constructor() {
        this.appVersion = _environments_versions__WEBPACK_IMPORTED_MODULE_0__.versionInfo.version;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 1, consts: [[1, "az-footer", "ht-40", "page-footer", "fixed-bottom"], [1, "container", "ht-100p", "pd-t-0-f"], [1, "d-sm-flex", "justify-content-center", "justify-content-sm-between", "py-2", "w-100"], [1, "text-muted", "text-center", "text-sm-left", "d-block", "d-sm-inline-block"], [1, "float-none", "float-sm-right", "d-block", "mt-1", "mt-sm-0", "text-center"], ["href", "https://www.fastenhealth.com/connect"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Fasten Connect: Unified API For Medical Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Copyright \u00A9 Fasten Health, Inc. 2022 | ", ctx.appVersion, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 43646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _services_vault_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vault.service */ 43843);
/* harmony import */ var _services_vault_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/vault-config.service */ 47877);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);








const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function () { return ["fas", "table-columns"]; };
const _c2 = function () { return ["fas", "code"]; };
const _c3 = function (a0) { return { "on": a0 }; };
class HeaderComponent {
    constructor(authService, connectService, vaultConfigService, router) {
        this.authService = authService;
        this.connectService = connectService;
        this.vaultConfigService = vaultConfigService;
        this.router = router;
    }
    ngOnInit() {
        this.vaultConfigService.ConfigSubject.subscribe((config) => {
            console.log("Configuration changed:", config);
            if (config.user && config.user.org_id && !config.org) {
                console.log("attempt to download org information, and store in config");
                this.connectService.getOrg(config.user.org_id).subscribe((org) => {
                    console.log("org:", org);
                    this.vaultConfigService.config = { org: org };
                });
            }
        });
    }
    toggleHeaderMenu(event) {
        event.preventDefault();
        document.querySelector('body')?.classList.toggle('az-header-menu-show');
    }
    closeMenu(e) {
        e.target.closest('.dropdown')?.classList.remove('show');
        e.target.closest('.dropdown .dropdown-menu')?.classList.remove('show');
    }
    signOut(event) {
        this.authService.Signout().then(r => {
            return this.router.navigate(['/auth/signin']);
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_vault_service__WEBPACK_IMPORTED_MODULE_1__.VaultService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_vault_config_service__WEBPACK_IMPORTED_MODULE_2__.VaultConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 71, vars: 17, consts: [[1, "bg-danger", "text-white", "pd-5", 3, "hidden"], [1, "text-white", "float-right"], [1, "az-header"], [1, "container"], [1, "az-header-left"], ["routerLink", "/"], ["src", "assets/images/banner-transparent-trim.png", "alt", "fasten", 1, "az-logo", "az-img-logo"], ["href", "#", "id", "azMenuShow", 1, "az-header-menu-icon", "d-lg-none", 3, "click"], [1, "az-header-menu"], [1, "az-header-menu-header"], ["src", "assets/images/banner-transparent-trim.png", "alt", "fasten", 1, "az-img-logo"], ["href", "#", 1, "close", 3, "click"], [1, "nav"], ["ngbDropdown", "", 1, "nav-item", 3, "ngClass"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link"], ["dashboard", "routerLinkActive"], [3, "icon"], ["routerLink", "/developers", "routerLinkActive", "active", 1, "nav-link"], ["developers", "routerLinkActive"], [1, "pd-l-20"], [1, "mg-l-10", "az-toggle", "az-toggle-danger", 3, "ngClass", "click"], [1, "az-header-right"], ["ngbDropdown", "", 1, "dropdown", "az-header-notification"], ["id", "notificationsDropdown", "ngbDropdownToggle", "", 1, "new"], [1, "far", "fa-sm", "fa-bell"], ["ngbDropdownMenu", "", "aria-labelledby", "notificationsDropdown", 1, "dropdown-menu"], [1, "az-dropdown-header", "mg-b-20", "d-sm-none"], [1, "az-header-arrow", 3, "click"], [1, "icon", "ion-md-arrow-back"], [1, "az-notification-title"], [1, "az-notification-text"], [1, "dropdown-footer"], ["routerLink", "/background-jobs"], ["ngbDropdown", "", 1, "dropdown", "az-profile-menu"], ["id", "profileDropdown", "ngbDropdownToggle", "", 1, "az-img-user", "cursor-pointer"], ["src", "/assets/images/profile-image.svg", "alt", ""], ["ngbDropdownMenu", "", "aria-labelledby", "profileDropdown", 1, "dropdown-menu"], [1, "az-dropdown-header", "d-sm-none"], [1, "az-header-profile", "cursor-pointer", 3, "routerLink"], [1, "az-img-user"], ["alt", "", 3, "src"], ["routerLink", "account/settings", 1, "dropdown-item", "cursor-pointer"], [1, "fas", "fa-user-circle", 2, "font-size", "medium"], ["routerLink", "org/settings", 1, "dropdown-item", "cursor-pointer"], [1, "fas", "fa-hospital", 2, "font-size", "medium"], [1, "dropdown-item", "cursor-pointer"], [1, "fas", "fa-life-ring", 2, "font-size", "medium"], [1, "dropdown-item", "cursor-pointer", 3, "click"], [1, "fas", "fa-power-off", 2, "font-size", "medium"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Test Mode Enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "You're using test data. You will only be able to access sandbox accounts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "div", 4)(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener($event) { return ctx.toggleHeaderMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener($event) { return ctx.toggleHeaderMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ul", 12)(19, "li", 13)(20, "a", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u00A0 Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li", 13)(25, "a", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u00A0 Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "li", 19)(30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_30_listener() { return ctx.vaultConfigService.toggleApiMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 21)(33, "div", 22)(34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 25)(37, "div", 26)(38, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_38_listener($event) { return ctx.closeMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Background Jobs & Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 31)(45, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "View History");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 33)(48, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 36)(51, "div", 37)(52, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_52_listener($event) { return ctx.closeMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 38)(55, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, " Profile Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Org Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Get Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_68_listener($event) { return ctx.signOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](21);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.vaultConfigService.config$.apiMode == "live");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, _r0 == null ? null : _r0.isActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, _r1 == null ? null : _r1.isActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c3, ctx.vaultConfigService.config$.apiMode == "test"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/patient-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.vaultConfigService.config$.org == null ? null : ctx.vaultConfigService.config$.org.logo_uri, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.vaultConfigService.config$.user == null ? null : ctx.vaultConfigService.config$.user.name);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent], styles: [".az-toggle-danger.on[_ngcontent-%COMP%] {\n  background-color: #dc3545 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF6LXRvZ2dsZS1kYW5nZXIub24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 54843:
/*!***********************************************!*\
  !*** ./src/app/models/fasten/vaultProfile.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultProfile": () => (/* binding */ VaultProfile)
/* harmony export */ });
class VaultProfile {
    constructor() {
        //not sent to the server
        this.password_confirm = "";
        this.agree_terms = false;
    }
}


/***/ }),

/***/ 45567:
/*!****************************************!*\
  !*** ./src/app/models/vault-config.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vaultConfigDefaults": () => (/* binding */ vaultConfigDefaults)
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.constants */ 2976);
/**
 * AppConfig interface. Update this interface to strictly type your config
 * object.
 */

/**
 * Default configuration for the entire application. This object is used by
 * "PortalConfigService" to set the default configuration.
 */
const vaultConfigDefaults = {
    apiMode: _app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Test
};


/***/ }),

/***/ 61097:
/*!*********************************************************************!*\
  !*** ./src/app/pages/auth-signin/vault-profile-signin.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultProfileSigninComponent": () => (/* binding */ VaultProfileSigninComponent)
/* harmony export */ });
/* harmony import */ var _models_fasten_vaultProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/fasten/vaultProfile */ 54843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);






function VaultProfileSigninComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.message, "\n");
} }
function VaultProfileSigninComponent_h4_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Please sign in to continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VaultProfileSigninComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VaultProfileSigninComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VaultProfileSigninComponent_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email must be a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VaultProfileSigninComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VaultProfileSigninComponent_div_15_div_1_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VaultProfileSigninComponent_div_15_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, VaultProfileSigninComponent_div_15_div_3_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors["email"]);
} }
function VaultProfileSigninComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 17);
} }
function VaultProfileSigninComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.errorMsg, " ");
} }
const _c0 = function () { return { "height": "560px" }; };
class VaultProfileSigninComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loading = false;
        this.showMessage = false;
        this.submitted = false;
        this.existingVaultProfile = new _models_fasten_vaultProfile__WEBPACK_IMPORTED_MODULE_0__.VaultProfile();
        this.errorMsg = "";
        this.message = "";
    }
    ngOnInit() {
        const urlParams = new URLSearchParams(window.location.search);
        this.setMessage(urlParams.get('action') || "");
    }
    signinSubmit() {
        this.submitted = true;
        this.loading = true;
        this.authService.Signin(this.existingVaultProfile.email)
            .then(() => {
            this.loading = false;
            this.router.navigateByUrl('/dashboard');
        })
            .catch((err) => {
            this.loading = false;
            if (err?.name) {
                this.errorMsg = "email or password is incorrect";
            }
            else {
                this.errorMsg = "an unknown error occurred during sign-in";
            }
            // const toastNotification = new ToastNotification()
            // toastNotification.type = ToastType.Error
            // toastNotification.message = this.errorMsg
            // this.toastService.show(toastNotification)
        });
    }
    setMessage(action) {
        if (action === "email-changed") {
            this.showMessage = true;
            this.message = "Email successfully changed! Please sign in with your new email.";
        }
        else if (action === "password-changed") {
            this.showMessage = true;
            this.message = "Password successfully changed! Please sign in with your new password.";
        }
    }
}
VaultProfileSigninComponent.ɵfac = function VaultProfileSigninComponent_Factory(t) { return new (t || VaultProfileSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
VaultProfileSigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VaultProfileSigninComponent, selectors: [["app-auth-signin"]], decls: 20, vars: 9, consts: [["class", "az-signin-message", 4, "ngIf"], [1, "az-signin-wrapper"], [1, "az-card-signin", 3, "ngStyle"], ["src", "assets/images/banner-transparent-trim.png", "alt", "fasten", 1, "az-img-logo"], [1, "az-signin-header"], [4, "ngIf"], [3, "ngSubmit"], ["vaultProfileForm", "ngForm"], [1, "form-group"], ["name", "email", "required", "", "email", "", "minlength", "4", "type", "text", "placeholder", "Enter your email address", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-az-primary", "btn-block", 3, "disabled"], ["class", "spinner-border spinner-border-sm", "role", "status", "aria-hidden", "true", 4, "ngIf"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], [1, "az-signin-message"], [1, "alert", "alert-danger"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"]], template: function VaultProfileSigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, VaultProfileSigninComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, VaultProfileSigninComponent_h4_7_Template, 2, 0, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function VaultProfileSigninComponent_Template_form_ngSubmit_8_listener() { return ctx.signinSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VaultProfileSigninComponent_Template_input_ngModelChange_13_listener($event) { return ctx.existingVaultProfile.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, VaultProfileSigninComponent_div_15_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, VaultProfileSigninComponent_span_18_Template, 1, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, VaultProfileSigninComponent_div_19_Template, 4, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.existingVaultProfile.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r2.form.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMsg);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXVsdC1wcm9maWxlLXNpZ25pbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 24789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ 31208);


class DashboardComponent {
    constructor() {
        this.bounceRateChartData = [{
                label: 'This week',
                data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8, 12.9, 13.8, 10.2, 5.8, 7.6, 8.8, 5.6, 5.6, 6.3, 4.2, 3.6, 5.4, 6.5, 8.1, 10.9, 7.6, 9.7, 10.9, 9.5, 5.4, 4.9, .7, 2.3, 5.5, 10, 10.6, 8.3, 8.4, 8.5, 5.8],
                borderWidth: 2,
                fill: true
            }];
        this.bounceRateChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51'];
        this.bounceRateChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    display: false,
                    gridLines: {
                        drawBorder: false,
                        display: true,
                        drawTicks: false,
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                        min: 0,
                        max: 40,
                        stepSize: 10,
                    }
                },
                x: {
                    display: false,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: false,
                        drawTicks: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 10,
                        fontColor: "#a7afb7",
                        padding: 10,
                    }
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0
                }
            },
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            },
            backgroundColor: 'rgba(0, 204, 212, .2)',
            borderColor: 'rgb(0, 204, 212)',
        };
        //  Total users chart
        this.usersBarChartData = [{
                label: '# of Votes',
                data: [27.2, 29.9, 29.6, 25.7, 25.9, 29.3, 31.1, 27.9, 28.4, 25.4, 23.2, 18.2, 14, 12.7, 11, 13.7, 9.7, 12.6, 10.9, 12.7, 13.8],
                borderWidth: 1,
                fill: false
            }];
        this.usersBarChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
        this.usersBarChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    display: false,
                    ticks: {
                        display: false,
                    },
                    gridLines: {
                        drawBorder: false,
                        display: false
                    }
                },
                x: {
                    display: false,
                    barThickness: 5.5,
                    ticks: {
                        display: false,
                    },
                    gridLines: {
                        drawBorder: false,
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            backgroundColor: '#007bff',
            borderColor: '#007bff'
        };
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 201, vars: 8, consts: [[1, "az-content", "az-content-dashboard"], [1, "container"], [1, "az-content-body"], [1, "az-dashboard-one-title"], [1, "az-dashboard-title"], [1, "az-content-header-right"], [1, "media"], [1, "media-body"], ["role", "alert", 1, "alert", "alert-warning"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "row", "row-sm", "mg-b-20", "mg-lg-b-0"], [1, "col-lg-5", "col-xl-4"], [1, "row", "row-sm"], [1, "col-md-6", "col-lg-12", "mg-b-20", "mg-md-b-0", "mg-lg-b-20"], [1, "col-sm-6"], [1, "blurred", "card", "card-dashboard-two"], [1, "card-header"], [1, "icon", "ion-md-trending-up", "tx-success"], [1, "card-body"], [1, "bounce-rate-chart-wrapper"], ["baseChart", "", 3, "type", "datasets", "labels", "options"], [1, "col-sm-6", "mg-t-20", "mg-sm-t-0"], [1, "icon", "ion-md-trending-down", "tx-danger"], [1, "users-bar-chart-wrapper"], [1, "col-md-6", "col-lg-12"], [1, "blurred", "card", "card-dashboard-five"], [1, "card-title"], [1, "card-text"], [1, "card-body", "row", "row-sm"], [1, "col-6", "d-sm-flex", "align-items-center"], [1, "card-chart", "bg-primary"], ["data-peity", "{\"fill\": [\"#fff\"], \"width\": 20, \"height\": 20 }", 1, "peity-bar", 2, "display", "none"], ["height", "20", "width", "20", 1, "peity"], ["data-value", "6", "fill", "#fff", "x", "0.4", "y", "2.8571428571428577", "width", "3.2", "height", "17.142857142857142"], ["data-value", "4", "fill", "#fff", "x", "4.4", "y", "8.571428571428573", "width", "3.1999999999999993", "height", "11.428571428571427"], ["data-value", "7", "fill", "#fff", "x", "8.4", "y", "0", "width", "3.1999999999999993", "height", "20"], ["data-value", "5", "fill", "#fff", "x", "12.4", "y", "5.7142857142857135", "width", "3.1999999999999993", "height", "14.285714285714286"], ["data-value", "7", "fill", "#fff", "x", "16.4", "y", "0", "width", "3.200000000000003", "height", "20"], [1, "card-chart", "bg-purple"], ["data-peity", "{\"fill\": [\"#fff\"], \"width\": 21, \"height\": 20 }", 1, "peity-bar", 2, "display", "none"], ["height", "20", "width", "21", 1, "peity"], ["data-value", "7", "fill", "#fff", "x", "0.42000000000000004", "y", "0", "width", "3.3600000000000003", "height", "20"], ["data-value", "4", "fill", "#fff", "x", "4.62", "y", "8.571428571428573", "width", "3.3599999999999994", "height", "11.428571428571427"], ["data-value", "5", "fill", "#fff", "x", "8.82", "y", "5.7142857142857135", "width", "3.3599999999999994", "height", "14.285714285714286"], ["data-value", "7", "fill", "#fff", "x", "13.020000000000001", "y", "0", "width", "3.3599999999999977", "height", "20"], ["data-value", "2", "fill", "#fff", "x", "17.22", "y", "14.285714285714286", "width", "3.360000000000003", "height", "5.7142857142857135"], [1, "col-lg-7", "col-xl-8", "mg-t-20", "mg-lg-t-0"], [1, "blurred", "card", "card-table-one"], [1, "az-content-text", "mg-b-20"], [1, "table-responsive"], [1, "table"], [1, "wd-5p"], [1, "wd-45p"], ["src", "https://cdn.fastenhealth.com/logos/sources/e16b9952-8885-4905-b2e3-b0f04746ed5c.png", 2, "width", "2em"], ["src", "https://cdn.fastenhealth.com/logos/sources/41b42645-350f-475e-b21b-e7a1276fca4f.png", 2, "width", "2em"], ["src", "https://cdn.fastenhealth.com/logos/sources/a0c9ecff-a470-47b9-aa32-debfa2441005.png", 2, "width", "2em"], ["src", "https://cdn.fastenhealth.com/logos/sources/5863477c-a178-41fc-b9f4-c881f9e8dbca.png", 2, "width", "2em"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Updated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mar 24, 2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6)(15, "div", 7)(16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8)(21, "button", 9)(22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Under Construction!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " The Dashboard is still under development. We will notify you once you can start using it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11)(28, "div", 12)(29, "div", 13)(30, "div", 14)(31, "div", 13)(32, "div", 15)(33, "div", 16)(34, "div", 17)(35, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "33.50% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "18.02%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "API Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19)(43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "canvas", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22)(46, "div", 16)(47, "div", 17)(48, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "86 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "0.86%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Webhooks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19)(56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "canvas", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25)(59, "div", 26)(60, "div", 17)(61, "h6", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Connections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Total number of authorized patient connections for this billing period.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29)(66, "div", 30)(67, "div", 31)(68, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "6,4,7,5,7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "svg", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "rect", 34)(72, "rect", 35)(73, "rect", 36)(74, "rect", 37)(75, "rect", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div")(77, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Unique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "33");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 30)(82, "div", 39)(83, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "7,4,5,7,2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "svg", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "rect", 42)(87, "rect", 43)(88, "rect", 44)(89, "rect", 45)(90, "rect", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div")(92, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 47)(97, "div", 48)(98, "h6", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Authorized Connections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Recently connected healthcare insitutions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 50)(103, "table", 51)(104, "thead")(105, "tr")(106, "th", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "th", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Portal Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Synced Records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Patient Auth ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "tbody")(117, "tr")(118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td")(121, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Epic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td")(124, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "134");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " (1.51%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "6f3f3770-ad00-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tr")(132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td")(135, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "eClincalWorks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td")(138, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "290");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " (3.30%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "ae5e7f40-4e7c-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tr")(146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td")(149, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Medicare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td")(152, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "250");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " (3.00%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "b3af4ab6-9275-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "tr")(160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td")(163, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Epic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td")(166, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "216");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " (2.79%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "baccf6e8-f020-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "tr")(174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td")(177, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Epic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td")(180, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "216");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " (2.79%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "61a193cc-33ed-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "tr")(188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td")(191, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "United Healthcare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td")(194, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "197");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " (2.12%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "6a79f333-9408-...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "line")("datasets", ctx.bounceRateChartData)("labels", ctx.bounceRateChartLabels)("options", ctx.bounceRateChartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "bar")("datasets", ctx.usersBarChartData)("labels", ctx.usersBarChartLabels)("options", ctx.usersBarChartOptions);
    } }, dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__.BaseChartDirective], styles: [".blurred[_ngcontent-%COMP%] {\n  \n  filter: blur(3px);\n  \n  filter: url(\"/assets/blur.svg#gaussian_blur\");\n  \n  -webkit-filter: blur(3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG9DQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQ0FBQTtFQUNBLDZDQUFBO0VBRUEseURBQUE7RUFDQSx5QkFBQTtBQUZGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVycmVkIHtcblxuICAvKiBBbnkgYnJvd3NlciB3aGljaCBzdXBwb3J0cyBDU1MzICovXG4gIGZpbHRlcjogYmx1cigzcHgpO1xuXG4gIC8qIEZpcmVmb3ggdmVyc2lvbiAzNCBhbmQgZWFybGllciAqL1xuICBmaWx0ZXI6IHVybChcIi9hc3NldHMvYmx1ci5zdmcjZ2F1c3NpYW5fYmx1clwiKTtcblxuICAvKiBXZWJraXQgaW4gQ2hyb21lIDUyLCBTYWZhcmkgOSwgT3BlcmEgMzksIGFuZCBlYXJsaWVyICovXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XG59XG4iXX0= */"] });


/***/ }),

/***/ 32993:
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);







// based on https://stackoverflow.com/questions/46017245/how-to-handle-unauthorized-requestsstatus-with-401-or-403-with-new-httpclient
class AuthInterceptorService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    handleAuthError(err) {
        //handle your auth error or rethrow
        if (err.status === 401 || err.status === 403) {
            //navigate /delete cookies or whatever
            this.authService.Signout();
            this.router.navigateByUrl(`/auth/signin`);
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(err.message); // or EMPTY may be appropriate here
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
    }
    intercept(req, next) {
        console.log("Intercepting Request", req);
        //only intercept requests to the fasten API & lighthouse, all other requests should be sent as-is
        let reqUrl = new URL(req.url);
        let lighthouseUrl = new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.lighthouse_api_endpoint_base);
        let apiUrl = new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base);
        if (!((reqUrl.origin == apiUrl.origin && reqUrl.pathname.startsWith(apiUrl.pathname)) ||
            (reqUrl.origin == lighthouseUrl.origin && reqUrl.pathname.startsWith(lighthouseUrl.pathname)))) {
            return next.handle(req);
        }
        // Clone the request and ensure that cookies are sent
        const authReq = req.clone({ withCredentials: true });
        // catch the error, make specific functions for catching specific errors and you can chain through them with more catch operators
        return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(x => this.handleAuthError(x))); //here use an arrow function, otherwise you may get "Cannot read property 'navigate' of undefined" on angular 4.4.2/net core 2/webpack 2.70
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
AuthInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService),
/* harmony export */   "FASTEN_AUTH_VAULT_COOKIE_NAME": () => (/* binding */ FASTEN_AUTH_VAULT_COOKIE_NAME)
/* harmony export */ });
/* harmony import */ var _home_runner_work_fasten_connect_vault_fasten_connect_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _models_fasten_vaultProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/fasten/vaultProfile */ 54843);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ 78042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _vault_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vault-config.service */ 47877);








const FASTEN_AUTH_VAULT_COOKIE_NAME = 'fasten_connect_auth_vault';
class AuthService {
  constructor(_httpClient, vaultConfigService) {
    this._httpClient = _httpClient;
    this.vaultConfigService = vaultConfigService;
    this.IsAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
  }
  Signin(email) {
    var _this = this;
    return (0,_home_runner_work_fasten_connect_vault_fasten_connect_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let currentVaultProfile = new _models_fasten_vaultProfile__WEBPACK_IMPORTED_MODULE_1__.VaultProfile();
      currentVaultProfile.email = email;
      let resp = yield _this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.connect_api_endpoint_base}/bridge/vault_auth_begin`, currentVaultProfile, {
        withCredentials: true
      }).toPromise();
      return resp;
    })();
  }
  Signout() {
    var _this2 = this;
    return (0,_home_runner_work_fasten_connect_vault_fasten_connect_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.publishAuthenticationState(false);
      return _this2.deleteCookie(FASTEN_AUTH_VAULT_COOKIE_NAME);
      // // let remotePouchDb = new PouchDB(this.getRemoteUserDb(localStorage.getItem("current_user")), {skip_setup: true});
      // if(this.pouchDb){
      //   await this.pouchDb.logOut()
      // }
      // await this.Close()
    })();
  }
  GetJWTPayload() {
    var _this3 = this;
    return (0,_home_runner_work_fasten_connect_vault_fasten_connect_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let authToken = _this3.getCookie(FASTEN_AUTH_VAULT_COOKIE_NAME);
      if (!authToken) {
        return null;
      }
      let jwks = jose__WEBPACK_IMPORTED_MODULE_3__.createRemoteJWKSet(new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.jwks_uri));
      let issuerHost = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.connect_api_jwt_issuer_host;
      try {
        //audience and issuer must be the same. This token is only valid on the fasten connect api
        const {
          payload,
          protectedHeader
        } = yield jose__WEBPACK_IMPORTED_MODULE_3__.jwtVerify(authToken, jwks, {
          issuer: issuerHost,
          audience: issuerHost
        });
        // @ts-ignore
        _this3.vaultConfigService.config = {
          user: payload
        };
        return payload;
      } catch (e) {
        console.error("failed to verify jwt:", e, issuerHost);
        return null;
      }
    })();
  }
  IsAuthenticated() {
    var _this4 = this;
    return (0,_home_runner_work_fasten_connect_vault_fasten_connect_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let payload = yield _this4.GetJWTPayload();
      let isAuthenticated = payload != null;
      _this4.publishAuthenticationState(isAuthenticated);
      return isAuthenticated;
    })();
  }
  //https://stackoverflow.com/questions/34298133/angular-cookies
  getCookie(name) {
    const ca = decodeURIComponent(document.cookie).split(';');
    const caLen = ca.length;
    const cookieName = `${name}=`;
    let c;
    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) === 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }
  deleteCookie(name) {
    this.setCookie(name, '', -99999); // - 1 was not far back enough to actually remove the cookie, this sets the time before the epoch and will cause the cookie to be deleted.
  }
  setCookie(name, value, expireDays, path = '') {
    const d = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    const cpath = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}; SameSite=Lax`;
  }
  publishAuthenticationState(authenticated) {
    if (this.IsAuthenticatedSubject.value != authenticated) {
      this.IsAuthenticatedSubject.next(authenticated);
    }
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_vault_config_service__WEBPACK_IMPORTED_MODULE_4__.VaultConfigService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 47877:
/*!**************************************************!*\
  !*** ./src/app/services/vault-config.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultConfigService": () => (/* binding */ VaultConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _models_vault_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/vault-config */ 45567);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





class VaultConfigService {
    constructor() {
        this._defaultConfig = _models_vault_config__WEBPACK_IMPORTED_MODULE_0__.vaultConfigDefaults;
        this.ConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(this._defaultConfig);
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------
    /**
     * Setter & getter for config
     */
    set config(value) {
        // get the current config, merge the new values, and then submit.
        const mergedSettings = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({}, this.ConfigSubject.getValue(), value);
        // Store the value
        if (JSON.stringify(mergedSettings) !== JSON.stringify(this.ConfigSubject.getValue())) {
            console.log('updating settings:', mergedSettings);
            this.ConfigSubject.next(mergedSettings);
        }
    }
    get config$() {
        console.log('using cached settings:', this.ConfigSubject.getValue());
        return this.ConfigSubject.getValue();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Resets the config to the default
     */
    reset() {
        // Set the config
        this.config = this._defaultConfig;
    }
    toggleApiMode() {
        this.config = {
            apiMode: this.config$.apiMode === 'live' ? _app_constants__WEBPACK_IMPORTED_MODULE_2__.ApiMode.Test : _app_constants__WEBPACK_IMPORTED_MODULE_2__.ApiMode.Live
        };
    }
}
VaultConfigService.ɵfac = function VaultConfigService_Factory(t) { return new (t || VaultConfigService)(); };
VaultConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: VaultConfigService, factory: VaultConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43843:
/*!*******************************************!*\
  !*** ./src/app/services/vault.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultService": () => (/* binding */ VaultService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class VaultService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    updateUser(oldPass, oldEmail, newEmail, newPass = "") {
        const userUpdateJson = JSON.stringify({
            email: oldEmail,
            password: oldPass,
            newEmail: newEmail,
            newPassword: newPass
        });
        return this._httpClient.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/user`, userUpdateJson)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            console.log("Updated User", response);
            return response.data;
        }));
    }
    /**
     * Create a new organization and associate it with the current User
     * @param newOrg
     * @param logoBlob
     * @constructor
     */
    createOrg(newOrg, logoBlob) {
        const formData = new FormData();
        //add the org data to the form data
        const orgJson = JSON.stringify(newOrg);
        const orgJsonBlob = new Blob([orgJson], {
            type: 'application/json'
        });
        formData.append("org", orgJsonBlob);
        formData.append("logo", logoBlob);
        let resp = this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org`, formData);
        console.log(resp);
        return resp;
    }
    updateOrg(orgId, updateOrg, logoBlob) {
        const formData = new FormData();
        //add the org data to the form data
        const orgJson = JSON.stringify(updateOrg);
        const orgJsonBlob = new Blob([orgJson], {
            type: 'application/json'
        });
        formData.append("org", orgJsonBlob);
        if (logoBlob) {
            formData.append("logo", logoBlob);
        }
        return this._httpClient.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}`, formData)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            console.log("Updated Organization", response);
            return response.data;
        }));
    }
    getOrg(orgId) {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            console.log("Organization", response);
            return response.data;
        }));
    }
    sendOrgInvite(orgId, recipientEmail) {
        return this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/invite`, {
            recipient_email_address: recipientEmail,
            org_id: orgId
        });
    }
    // public createOrgCredentials(orgId: string, apiMode: ApiMode, redirectUrl: string, note: string): Observable<{ action: CRUDMode, org_credential: OrganizationCredential, private_key: string }> {
    //   return this._httpClient.post<ResponseWrapper>(`${environment.connect_api_endpoint_base}/org/${orgId}/credentials`, {
    //     api_mode: apiMode,
    //     redirect_uri: redirectUrl,
    //     note: note
    //   })
    //     .pipe(
    //       map((response: ResponseWrapper) => {
    //         console.log("Organization Credential", response)
    //         response.data.action = CRUDMode.Create
    //         return response.data as { action: CRUDMode, org_credential: OrganizationCredential, private_key: string };
    //       })
    //     );
    // }
    getOrgCredentials(orgId) {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/credentials`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            console.log("Organization Credentials", response);
            return response.data;
        }));
    }
}
VaultService.ɵfac = function VaultService_Factory(t) { return new (t || VaultService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
VaultService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VaultService, factory: VaultService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    name: "development",
    //specify the lighthouse base that we're going to use to authenticate against all our source/providers. Must not have trailing slash
    lighthouse_api_endpoint_base: 'https://lighthouse.fastenhealth.com',
    //used to specify the api server that we're going to use (can be relative or absolute). Must not have trailing slash
    // connect_api_endpoint_base: 'https://api.connect-dev.fastenhealth.com/v1',
    // if relative, must start with /
    connect_api_endpoint_base: 'https://api.connect-dev.fastenhealth.com/v1',
    connect_api_jwt_issuer_host: 'https://api.connect-dev.fastenhealth.com/v1',
    jwks_uri: 'https://cdn.fastenhealth.com/jwks/fasten-connect/dev.json',
    //Stripe pricing table (Test mode in Dev)
    stripe_customer_portal: 'https://billing.stripe.com/p/login/test_bIY7thbZL5g6gXC000'
    // stripe_customer_portal: 'https://billing.stripe.com/p/login/dR6aEYe5h4AYe2I144'
};


/***/ }),

/***/ 28496:
/*!**************************************!*\
  !*** ./src/environments/versions.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "versionInfo": () => (/* binding */ versionInfo)
/* harmony export */ });
// this file is automatically generated by git.version.ts script
const versionInfo = {
    version: 'dev',
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.name != "local") {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-ps": 46235,
	"./ar-ps.js": 46235,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku-kmr": 19619,
	"./ku-kmr.js": 19619,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map