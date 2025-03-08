(self["webpackChunkfasten_connect_vault"] = self["webpackChunkfasten_connect_vault"] || []).push([["main"],{

/***/ 4473:
/*!*********************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/app-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_vault_signin_vault_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/vault-signin/vault-signin.component */ 9290);
/* harmony import */ var _pages_vault_signin_code_vault_signin_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/vault-signin-code/vault-signin-code.component */ 1642);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ 3176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    // @Input routing
    // https://www.freecodecamp.org/news/use-input-for-angular-route-parameters/
    // https://angular.love/router-data-as-components-inputs-in-angular-v16
    { path: 'auth/signin', component: _pages_vault_signin_vault_signin_component__WEBPACK_IMPORTED_MODULE_0__.VaultSigninComponent },
    { path: 'auth/signin/code', component: _pages_vault_signin_code_vault_signin_code_component__WEBPACK_IMPORTED_MODULE_1__.VaultSigninCodeComponent },
    { path: '', redirectTo: '/auth/signin', pathMatch: 'full' },
    //must be at bottom of list
    { path: '**', redirectTo: 'auth/signin' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes),
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule // this is the magic. I'm assuming to put it second is better (though putting it first didn't seem to have any immediate negative effect)
        , _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule // this is the magic. I'm assuming to put it second is better (though putting it first didn't seem to have any immediate negative effect)
    ], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 6371:
/*!****************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/app.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





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
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 1, consts: [["id", "test-mode-banner", 1, "mx-auto", "w-full", "max-w-[440px]", "bg-[#DC3545]", "text-white", "text-center", "py-2", "px-4", "font-medium", "text-sm", "flex", "items-center", "justify-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["d", "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"], ["d", "M6.453 15h11.094"], ["d", "M8.5 2h7"], [3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 2)(3, "path", 3)(4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " You are using Fasten in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "mode\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.router.url == "/auth/signin" ? "marketing-container" : "mx-auto w-full max-w-[440px] bg-white rounded-lg shadow-lg");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3974:
/*!****************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/app.constants.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiMode": () => (/* binding */ ApiMode),
/* harmony export */   "ORG_CREDENTIAL_PUBLIC_ID": () => (/* binding */ ORG_CREDENTIAL_PUBLIC_ID)
/* harmony export */ });
var ApiMode;
(function (ApiMode) {
    ApiMode["Live"] = "live";
    ApiMode["Test"] = "test";
})(ApiMode || (ApiMode = {}));
const ORG_CREDENTIAL_PUBLIC_ID = 'public_test_rei2un7aagh5pquwikxh2dsyq23bsdyu4l8vm9eq29ftu';


/***/ }),

/***/ 2924:
/*!*************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/app.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4473);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6371);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 2898);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 5688);
/* harmony import */ var _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-guards/is-authenticated-auth-guard */ 869);
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-interceptor.service */ 928);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-moment */ 728);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-code-input */ 3891);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/spinner/spinner.component */ 4285);
/* harmony import */ var _pages_vault_signin_vault_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/vault-signin/vault-signin.component */ 9290);
/* harmony import */ var _pages_vault_signin_code_vault_signin_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/vault-signin-code/vault-signin-code.component */ 1642);
/* harmony import */ var _components_connected_apps_tab_connected_apps_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/connected-apps-tab/connected-apps-tab.component */ 6842);
/* harmony import */ var _components_connected_accounts_tab_connected_accounts_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/connected-accounts-tab/connected-accounts-tab.component */ 8593);
/* harmony import */ var _components_settings_tab_settings_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/settings-tab/settings-tab.component */ 2192);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);























class AppModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.fas, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_12__.far);
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconLibrary)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HTTP_INTERCEPTORS,
            useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptorService,
            multi: true,
            // deps: [AuthService, Router]
        },
        _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_3__.IsAuthenticatedAuthGuard,
    ], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule,
        ngx_moment__WEBPACK_IMPORTED_MODULE_19__.MomentModule,
        angular_code_input__WEBPACK_IMPORTED_MODULE_20__.CodeInputModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_21__.InfiniteScrollModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__.SpinnerComponent,
        _pages_vault_signin_vault_signin_component__WEBPACK_IMPORTED_MODULE_6__.VaultSigninComponent,
        _pages_vault_signin_code_vault_signin_code_component__WEBPACK_IMPORTED_MODULE_7__.VaultSigninCodeComponent,
        _components_connected_apps_tab_connected_apps_tab_component__WEBPACK_IMPORTED_MODULE_8__.ConnectedAppsTabComponent,
        _components_connected_accounts_tab_connected_accounts_tab_component__WEBPACK_IMPORTED_MODULE_9__.ConnectedAccountsTabComponent,
        _components_settings_tab_settings_tab_component__WEBPACK_IMPORTED_MODULE_10__.SettingsTabComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule,
        ngx_moment__WEBPACK_IMPORTED_MODULE_19__.MomentModule,
        angular_code_input__WEBPACK_IMPORTED_MODULE_20__.CodeInputModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_21__.InfiniteScrollModule] }); })();


/***/ }),

/***/ 869:
/*!******************************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/auth-guards/is-authenticated-auth-guard.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsAuthenticatedAuthGuard": () => (/* binding */ IsAuthenticatedAuthGuard)
/* harmony export */ });
/* harmony import */ var _home_runner_work_fasten_connect_frontend_ngx_fasten_connect_frontend_ngx_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 4213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class IsAuthenticatedAuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    var _this = this;
    return (0,_home_runner_work_fasten_connect_frontend_ngx_fasten_connect_frontend_ngx_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let jwtPayload = yield _this.authService.GetJWTPayload();
      //check if the user is authenticated, if not, redirect to login
      if (!jwtPayload) {
        return yield _this.router.navigate(['/auth/signin']);
      } else if (!jwtPayload.has_verified_identity) {
        console.log("Profile does not have a verified identity, redirecting to id verification step", jwtPayload);
        return yield _this.router.navigate(['/auth/identity-verification']);
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

/***/ 8593:
/*!*********************************************************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/components/connected-accounts-tab/connected-accounts-tab.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectedAccountsTabComponent": () => (/* binding */ ConnectedAccountsTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ConnectedAccountsTabComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConnectedAccountsTabComponent.ɵfac = function ConnectedAccountsTabComponent_Factory(t) { return new (t || ConnectedAccountsTabComponent)(); };
ConnectedAccountsTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConnectedAccountsTabComponent, selectors: [["connected-accounts-tab"]], decls: 38, vars: 0, consts: [["id", "overview", 1, "tab-content", "p-6", "pb-12"], [1, "space-y-6"], [1, "space-y-4"], [1, "text-2xl", "font-semibold", "text-gray-900"], [1, "flex", "items-center", "justify-between", "p-4", "bg-white", "border", "border-gray-200", "rounded-lg", "hover:border-gray-300"], [1, "flex", "items-center", "gap-3"], ["src", "https://logo.clearbit.com/mayoclinic.org", "alt", "Mayo Clinic", 1, "w-10", "h-10", "rounded", "object-contain"], [1, "font-medium"], [1, "flex", "items-center", "gap-2"], [1, "px-3", "py-1", "text-sm", "font-medium", "bg-[#EEF2FF]", "text-[#5B47FB]", "rounded-full"], [1, "text-gray-400", "hover:text-gray-500"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["d", "M9 18l6-6-6-6"], ["src", "https://logo.clearbit.com/clevelandclinic.org", "alt", "Cleveland Clinic", 1, "w-10", "h-10", "rounded", "object-contain"], ["src", "https://logo.clearbit.com/questdiagnostics.com", "alt", "Quest Diagnostics", 1, "w-10", "h-10", "rounded", "object-contain"], [1, "px-3", "py-1", "text-sm", "font-medium", "bg-yellow-100", "text-yellow-800", "rounded-full"]], template: function ConnectedAccountsTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Connected Health Systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mayo Clinic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ACTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4)(17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cleveland Clinic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8)(22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ACTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4)(28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Quest Diagnostics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8)(33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "EXPIRED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25uZWN0ZWQtYWNjb3VudHMtdGFiLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6842:
/*!*************************************************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/components/connected-apps-tab/connected-apps-tab.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectedAppsTabComponent": () => (/* binding */ ConnectedAppsTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ConnectedAppsTabComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConnectedAppsTabComponent.ɵfac = function ConnectedAppsTabComponent_Factory(t) { return new (t || ConnectedAppsTabComponent)(); };
ConnectedAppsTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConnectedAppsTabComponent, selectors: [["connected-apps-tab"]], decls: 56, vars: 0, consts: [[1, "tab-content", "p-6", "pb-12"], [1, "space-y-6"], [1, "space-y-4"], [1, "text-2xl", "font-semibold", "text-gray-900"], [1, "text-gray-600"], [1, "flex", "items-center", "justify-between", "p-4", "bg-white", "border", "border-gray-200", "rounded-lg", "hover:border-gray-300"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded", "bg-indigo-50", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-6", "h-6", "text-indigo-600"], ["d", "M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"], ["points", "18 2 22 6 12 16 8 16 8 12 18 2"], [1, "font-medium"], [1, "flex", "items-center", "gap-2"], [1, "px-3", "py-1", "text-sm", "font-medium", "bg-[#EEF2FF]", "text-[#5B47FB]", "rounded-full"], [1, "text-gray-400", "hover:text-gray-500"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["d", "M9 18l6-6-6-6"], [1, "w-10", "h-10", "rounded", "bg-emerald-50", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-6", "h-6", "text-emerald-600"], ["d", "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"], ["x", "8", "y", "2", "width", "8", "height", "4", "rx", "1", "ry", "1"], [1, "w-10", "h-10", "rounded", "bg-sky-50", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "w-6", "h-6", "text-sky-600"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "flex", "items-center", "justify-between", "p-4", "bg-white", "border", "border-gray-200", "rounded-lg", "hover:border-gray-300", "cursor-pointer"], [1, "w-10", "h-10", "rounded", "bg-gray-100", "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-6", "h-6", "text-gray-500"], ["d", "M12 5v14M5 12h14"], [1, "font-medium", "text-gray-700"]], template: function ConnectedAppsTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Connected Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View and manage apps that have access to your medical records");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9)(12, "polygon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Acme Labs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12)(16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ACTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5)(22, "div", 6)(23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 19)(26, "rect", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Example PHR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12)(30, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ACTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5)(36, "div", 6)(37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 23)(40, "polyline", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Clear Claims");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12)(44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ACTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25)(50, "div", 6)(51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "svg", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Add an app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25uZWN0ZWQtYXBwcy10YWIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2192:
/*!*************************************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/components/settings-tab/settings-tab.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsTabComponent": () => (/* binding */ SettingsTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SettingsTabComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsTabComponent.ɵfac = function SettingsTabComponent_Factory(t) { return new (t || SettingsTabComponent)(); };
SettingsTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsTabComponent, selectors: [["settings-tab"]], decls: 52, vars: 0, consts: [["id", "settings", 1, "tab-content", "p-6", "pb-12"], [1, "space-y-8"], [1, "text-2xl", "font-semibold", "text-gray-900"], [1, "text-gray-600", "mt-1"], [1, "space-y-4"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "block", "text-sm", "font-medium", "text-gray-700"], ["type", "text", "value", "Jason Kulatunga", 1, "mt-1.5", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "shadow-sm", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:ring-opacity-20"], ["type", "email", "value", "j***@fastenhealth.com", 1, "mt-1.5", "block", "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "shadow-sm", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:ring-opacity-20"], [1, "w-full", "bg-[#5B47FB]", "hover:bg-[#4936E8]", "text-white", "font-medium", "py-2.5", "px-4", "rounded-lg", "transition-colors"], [1, "flex", "items-center", "justify-between", "p-4", "bg-gray-50", "rounded-lg"], [1, "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-600"], [1, "inline-flex", "items-center", "px-4", "py-2", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-sm", "text-[#5B47FB]", "hover:text-[#4936E8]", "hover:border-[#5B47FB]", "hover:bg-[#EEF2FF]", "font-medium", "transition-all", "whitespace-nowrap"], [1, "text-lg", "font-semibold", "text-red-600"], [1, "flex", "items-center", "justify-between", "p-4", "bg-red-50", "rounded-lg"], [1, "font-medium", "text-red-700"], [1, "text-sm", "text-red-600"], [1, "inline-flex", "items-center", "px-4", "py-2", "bg-white", "border", "border-red-200", "rounded-lg", "shadow-sm", "text-red-600", "hover:text-red-700", "hover:border-red-300", "hover:bg-red-50", "font-medium", "transition-all"]], template: function SettingsTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Account Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Manage your account preferences and security settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Profile Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "div")(12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div")(16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Save Changes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4)(22, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4)(25, "div", 10)(26, "div")(27, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Update your password to maintain account security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10)(34, "div")(35, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Passkey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Set up a passkey for passwordless sign-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Set up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4)(42, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Danger Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15)(45, "div")(46, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Delete Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Permanently delete your account and all data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy10YWIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4285:
/*!***************************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/components/spinner/spinner.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "mr-2", "h-5", "w-5", "animate-spin", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 1)(2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3176:
/*!***************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/dashboard-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule),
/* harmony export */   "dashboardRoutes": () => (/* binding */ dashboardRoutes)
/* harmony export */ });
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 5688);
/* harmony import */ var _components_connected_apps_tab_connected_apps_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connected-apps-tab/connected-apps-tab.component */ 6842);
/* harmony import */ var _components_connected_accounts_tab_connected_accounts_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/connected-accounts-tab/connected-accounts-tab.component */ 8593);
/* harmony import */ var _components_settings_tab_settings_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/settings-tab/settings-tab.component */ 2192);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const dashboardRoutes = [
    { path: 'dashboard',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
        children: [
            { path: '', redirectTo: 'apps', pathMatch: 'full' },
            { path: 'apps', pathMatch: 'full', component: _components_connected_apps_tab_connected_apps_tab_component__WEBPACK_IMPORTED_MODULE_1__.ConnectedAppsTabComponent },
            { path: 'accounts', pathMatch: 'full', component: _components_connected_accounts_tab_connected_accounts_tab_component__WEBPACK_IMPORTED_MODULE_2__.ConnectedAccountsTabComponent },
            { path: 'settings', pathMatch: 'full', component: _components_settings_tab_settings_tab_component__WEBPACK_IMPORTED_MODULE_3__.SettingsTabComponent }
        ]
    },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(dashboardRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5277:
/*!******************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/models/fasten/vault-profile.ts ***!
  \******************************************************************************/
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

/***/ 5688:
/*!**************************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 20, vars: 18, consts: [["id", "step-dashboard", 1, "step-view", "h-[600px]", "flex", "flex-col", "bg-white"], [1, "flex-none"], [1, "p-6", "border-b", "border-gray-200"], [1, "flex", "justify-center"], [1, "az-logo", "text-2xl"], [1, "border-b", "border-gray-200"], ["aria-label", "Tabs", 1, "flex", "justify-between", "px-6"], ["data-tab", "overview", 1, "tab-btn", "px-3", "py-4", "text-sm", "font-medium", "border-b-2", 3, "routerLink", "routerLinkActive"], ["applink", "routerLinkActive"], ["data-tab", "accounts", 1, "tab-btn", "px-3", "py-4", "text-sm", "font-medium", "border-b-2", 3, "routerLink", "routerLinkActive"], ["accountlink", "routerLinkActive"], ["data-tab", "settings", 1, "tab-btn", "px-3", "py-4", "text-sm", "font-medium", "border-b-2", 3, "routerLink", "routerLinkActive"], ["settingslink", "routerLinkActive"], [1, "flex-1", "bg-gray-50", "overflow-hidden"], [1, "h-[calc(600px-132px)]", "overflow-y-auto"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "nav", 6)(8, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Accounts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13)(18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-transparent", !_r0.isActive)("hover:text-gray-700", !_r0.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/apps")("routerLinkActive", "active border-[#5B47FB] text-[#5B47FB]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-transparent", !_r1.isActive)("hover:text-gray-700", !_r1.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/accounts")("routerLinkActive", "active border-[#5B47FB] text-[#5B47FB]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-transparent", !_r2.isActive)("hover:text-gray-700", !_r2.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard/settings")("routerLinkActive", "active border-[#5B47FB] text-[#5B47FB]");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1642:
/*!******************************************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/pages/vault-signin-code/vault-signin-code.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultSigninCodeComponent": () => (/* binding */ VaultSigninCodeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-code-input */ 3891);






function VaultSigninCodeComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
  }
}
class VaultSigninCodeComponent {
  constructor(routerService, authService) {
    this.routerService = routerService;
    this.authService = authService;
    this.loading = false;
    this.errorMsg = "";
    this.currentEmail = "test@example.com";
    this.codeExpirySeconds = 300;
    this.timeRemaining$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(0, 1000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(n => (this.codeExpirySeconds - n) * 1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeWhile)(n => n >= 0));
    this.currentEmail = this.routerService.getCurrentNavigation()?.extras.state?.["currentEmail"];
  }
  ngOnInit() {}
  onCodeCompleted(code) {
    this.loading = true;
    console.log("submit finish", this.currentEmail, code);
    this.authService.VaultAuthFinish(this.currentEmail, code).then(() => {
      this.loading = false;
      //this will attempt to redirect to Dashboard, then fallback to ID verification if not provided
      this.routerService.navigateByUrl("dashboard");
    }).catch(err => {
      console.error(err);
      this.loading = false;
      if (err?.name) {
        this.errorMsg = "code is incorrect";
      } else {
        this.errorMsg = "an unknown error occurred during sign-in";
      }
      // const toastNotification = new ToastNotification()
      // toastNotification.type = ToastType.Error
      // toastNotification.message = this.errorMsg
      // this.toastService.show(toastNotification)
    });
  }
}
VaultSigninCodeComponent.ɵfac = function VaultSigninCodeComponent_Factory(t) {
  return new (t || VaultSigninCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
VaultSigninCodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: VaultSigninCodeComponent,
  selectors: [["app-vault-signin-code"]],
  inputs: {
    currentEmail: "currentEmail"
  },
  decls: 28,
  vars: 10,
  consts: [["id", "step-verification", 1, "step-view", "p-8", "space-y-6"], [1, "text-center", "space-y-2"], [1, "text-2xl", "font-semibold", "text-gray-900"], ["id", "verification-hint", 1, "text-gray-600"], [1, "space-y-6"], ["id", "verification-inputs", 1, "flex", "justify-between", "gap-2"], [3, "isCodeHidden", "codeLength", "codeCompleted"], ["id", "verification-error", "class", "text-sm text-red-500 text-center", 4, "ngIf"], [1, "text-center", "space-y-4"], [1, "text-sm", "text-gray-600"], ["id", "verification-countdown", 1, "font-semibold", "text-gray-900"], [1, "space-x-2"], ["id", "resend-code", 1, "text-[#5B47FB]", "hover:text-[#4936E8]", "text-sm", "font-medium"], [1, "text-gray-300"], ["id", "use-other-method", 1, "text-[#5B47FB]", "hover:text-[#4936E8]", "text-sm", "font-medium", 2, "display", "none"], ["id", "verification-error", 1, "text-sm", "text-red-500", "text-center"]],
  template: function VaultSigninCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Enter authentication code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "from your email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " A code was sent to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "div", 5)(12, "code-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("codeCompleted", function VaultSigninCodeComponent_Template_code_input_codeCompleted_12_listener($event) {
        return ctx.onCodeCompleted($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, VaultSigninCodeComponent_p_13_Template, 2, 1, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8)(15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Code expires in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11)(22, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Resend code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Use another method ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isCodeHidden", false)("codeLength", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMsg);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](19, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 8, ctx.timeRemaining$), "mm:ss"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, angular_code_input__WEBPACK_IMPORTED_MODULE_7__.CodeInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: ["code-input[_ngcontent-%COMP%] {\n  --item-width: 2.5rem;\n  --item-height: 2.5rem;\n  --item-border: 1px solid #d1d5db;\n  --item-border-radius: 0.5rem;\n  --item-font-size: 1.25rem;\n  --item-font-weight: 600;\n  --item-color: #111827;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhdWx0LXNpZ25pbi1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJ2YXVsdC1zaWduaW4tY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNvZGUtaW5wdXQge1xuICAtLWl0ZW0td2lkdGg6IDIuNXJlbTtcbiAgLS1pdGVtLWhlaWdodDogMi41cmVtO1xuICAtLWl0ZW0tYm9yZGVyOiAxcHggc29saWQgI2QxZDVkYjtcbiAgLS1pdGVtLWJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgLS1pdGVtLWZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgLS1pdGVtLWZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0taXRlbS1jb2xvcjogIzExMTgyNztcbiAgLy8tLWl0ZW0tYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgLy8tLWl0ZW0tYm9yZGVyLWhhcy12YWx1ZTogbm9uZTtcbiAgLy8tLWl0ZW0tYm9yZGVyLWJvdHRvbS1oYXMtdmFsdWU6IDJweCBzb2xpZCAjODg4ODg4O1xuICAvLy0taXRlbS1ib3JkZXItZm9jdXNlZDogbm9uZTtcbiAgLy8tLWl0ZW0tYm9yZGVyLWJvdHRvbS1mb2N1c2VkOiAycHggc29saWQgIzgwOTA3MDtcbiAgLy8tLWl0ZW0tc2hhZG93LWZvY3VzZWQ6IG5vbmU7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 9290:
/*!********************************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/pages/vault-signin/vault-signin.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultSigninComponent": () => (/* binding */ VaultSigninComponent)
/* harmony export */ });
/* harmony import */ var _models_fasten_vault_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/fasten/vault-profile */ 5277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/config.service */ 3673);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 4213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ 4285);








function VaultSigninComponent_p_44_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VaultSigninComponent_p_44_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Email must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VaultSigninComponent_p_44_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Email must be a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VaultSigninComponent_p_44_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 67)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r7.errorMsg, " ");
} }
function VaultSigninComponent_p_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "svg", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "path", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, VaultSigninComponent_p_44_span_3_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, VaultSigninComponent_p_44_span_4_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, VaultSigninComponent_p_44_span_5_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, VaultSigninComponent_p_44_span_6_Template, 4, 1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.errorMsg);
} }
function VaultSigninComponent_app_spinner_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-spinner");
} }
class VaultSigninComponent {
    constructor(configService, authService, routerService) {
        this.configService = configService;
        this.authService = authService;
        this.routerService = routerService;
        this.loading = false;
        this.showMessage = false;
        this.submitted = false;
        this.existingVaultProfile = new _models_fasten_vault_profile__WEBPACK_IMPORTED_MODULE_0__.VaultProfile();
        this.errorMsg = "";
        this.message = "";
    }
    ngOnInit() {
        const urlParams = new URLSearchParams(window.location.search);
        //TODO: parse urlParameters to determine the API mode
    }
    signinSubmit() {
        this.submitted = true;
        this.loading = true;
        console.log("Signin", this.existingVaultProfile.email);
        this.authService.VaultAuthBegin(this.existingVaultProfile.email)
            .then(() => {
            this.loading = false;
            this.routerService.navigateByUrl('auth/signin/code', {
                state: {
                    currentEmail: this.existingVaultProfile.email
                }
            });
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
}
VaultSigninComponent.ɵfac = function VaultSigninComponent_Factory(t) { return new (t || VaultSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
VaultSigninComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VaultSigninComponent, selectors: [["app-vault-signin"]], decls: 87, vars: 4, consts: [[1, "marketing-content", "py-12", "md:py-16", "max-w-7xl"], [1, "space-y-10", "max-w-xl"], [1, "flex", "items-center", "space-x-2"], [1, "az-logo", "text-5xl"], [1, "px-3", "py-1", "text-sm", "font-medium", "bg-indigo-50", "text-[#5B47FB]", "rounded-full"], [1, "space-y-6"], [1, "text-6xl", "font-bold", "text-gray-900", "leading-[1.1]", "tracking-tight"], [1, "text-[#5B47FB]"], [1, "flex", "items-start", "space-x-4"], [1, "mt-1", "flex-shrink-0", "bg-indigo-50", "rounded-full", "p-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-[#5B47FB]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], [1, "mt-12"], [1, "space-y-6", 3, "ngSubmit"], ["vaultProfileForm", "ngForm"], [1, "block", "text-sm", "font-medium", "text-gray-700"], [1, "mt-1.5", "relative"], ["type", "email", "name", "email", "required", "", "email", "", "minlength", "4", "placeholder", "you@example.com", 1, "block", "w-full", "px-4", "py-3.5", "text-lg", "rounded-lg", "border", "border-gray-300", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:border-[#5B47FB]", "focus:ring-opacity-20", "transition-all", "duration-200", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-3", "pointer-events-none"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], ["id", "initial-error", "class", "mt-2 text-sm text-red-500 flex items-center gap-2", 4, "ngIf"], ["type", "submit", 1, "w-full", "bg-[#5B47FB]", "hover:bg-[#4936E8]", "text-white", "font-medium", "py-3.5", "px-6", "text-lg", "rounded-lg", "transition-all", "duration-200", "transform", "hover:scale-[1.02]", "active:scale-[0.98]", "shadow-lg", "hover:shadow-xl", "hover:shadow-indigo-100", 3, "disabled"], [4, "ngIf"], [1, "text-sm", "text-gray-500", "mt-6", "flex", "items-center", "justify-center", "gap-1"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["href", "#", 1, "text-[#5B47FB]", "hover:text-[#4936E8]", "font-medium"], [1, "hero-illustration", "max-w-2xl", "mx-auto", "md:mx-0", "px-8", "md:px-0"], ["viewBox", "0 0 500 400", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "w-full", "h-full", "transform", "scale-110", "drop-shadow-2xl"], ["cx", "250", "cy", "200", "r", "150", "fill", "#F3F4F6", 1, "pulse-animation"], [1, "float-animation"], ["x", "200", "y", "120", "width", "100", "height", "160", "rx", "12", "fill", "white", "stroke", "#5B47FB", "stroke-width", "2"], ["x", "210", "y", "130", "width", "80", "height", "120", "rx", "4", "fill", "#EEF2FF"], ["x", "220", "y", "140", "width", "60", "height", "8", "rx", "4", "fill", "#5B47FB", "opacity", "0.6"], ["x", "220", "y", "156", "width", "40", "height", "8", "rx", "4", "fill", "#5B47FB", "opacity", "0.4"], ["cx", "240", "cy", "180", "r", "15", "fill", "#5B47FB", "opacity", "0.2"], [1, "float-animation", 2, "animation-delay", "-1s"], ["x", "120", "y", "40", "width", "60", "height", "80", "rx", "8", "fill", "white", "stroke", "#5B47FB", "stroke-width", "2"], ["d", "M135 80h30M135 60h30M135 100h30", "stroke", "#5B47FB", "stroke-width", "2"], ["d", "M150 120L200 120", "stroke", "#5B47FB", "stroke-width", "1", "stroke-dasharray", "4 4", 1, "connection-line"], [1, "float-animation", 2, "animation-delay", "-2s"], ["x", "340", "y", "160", "width", "70", "height", "60", "rx", "8", "fill", "white", "stroke", "#5B47FB", "stroke-width", "2"], ["d", "M350 190h10l10-20l10 40l10-20h10", "stroke", "#5B47FB", "stroke-width", "2"], ["d", "M340 190L300 200", "stroke", "#5B47FB", "stroke-width", "1", "stroke-dasharray", "4 4", 1, "connection-line"], [1, "float-animation", 2, "animation-delay", "-3s"], ["x", "90", "y", "160", "width", "70", "height", "70", "rx", "8", "fill", "white", "stroke", "#5B47FB", "stroke-width", "2"], ["d", "M110 180h30M110 195h30M110 210h30", "stroke", "#5B47FB", "stroke-width", "2"], ["d", "M160 195L200 200", "stroke", "#5B47FB", "stroke-width", "1", "stroke-dasharray", "4 4", 1, "connection-line"], [1, "float-animation", 2, "animation-delay", "-4s"], ["x", "320", "y", "280", "width", "70", "height", "70", "rx", "8", "fill", "white", "stroke", "#5B47FB", "stroke-width", "2"], ["d", "M355 295c0 20-10 25-17.5 27.5 7.5 2.5 17.5 7.5 17.5 27.5 0-20 10-25 17.5-27.5-7.5-2.5-17.5-7.5-17.5-27.5z", "stroke", "#5B47FB", "stroke-width", "2", "fill", "white"], ["d", "M320 315L300 280", "stroke", "#5B47FB", "stroke-width", "1", "stroke-dasharray", "4 4", 1, "connection-line"], [1, "pulse-animation"], ["cx", "140", "cy", "30", "r", "3", "fill", "#5B47FB", "opacity", "0.6"], ["cx", "380", "cy", "150", "r", "3", "fill", "#5B47FB", "opacity", "0.6"], ["cx", "360", "cy", "320", "r", "3", "fill", "#5B47FB", "opacity", "0.6"], ["cx", "80", "cy", "180", "r", "3", "fill", "#5B47FB", "opacity", "0.6"], ["id", "initial-error", 1, "mt-2", "text-sm", "text-red-500", "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"]], template: function VaultSigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "BETA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Your health data, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "unified");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5)(13, "div", 8)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div")(18, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Secure Access");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Safely connect your health records to trusted apps and services");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 8)(23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "path", 14)(26, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div")(28, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Full Control");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Control your data sharing preferences with a simple tap");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 16)(33, "form", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function VaultSigninComponent_Template_form_ngSubmit_33_listener() { return ctx.signinSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div")(36, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 20)(39, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VaultSigninComponent_Template_input_ngModelChange_39_listener($event) { return ctx.existingVaultProfile.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, VaultSigninComponent_p_44_Template, 7, 4, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, VaultSigninComponent_app_spinner_46_Template, 1, 0, "app-spinner", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " Get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "svg", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Need help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "svg", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "circle", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "g", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "rect", 37)(60, "rect", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "rect", 39)(63, "rect", 40)(64, "circle", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "g")(66, "g", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "rect", 43)(68, "path", 44)(69, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "g", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "rect", 47)(72, "path", 48)(73, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "g", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "rect", 51)(76, "path", 52)(77, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "g", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "rect", 55)(80, "path", 56)(81, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "g", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "circle", 59)(84, "circle", 60)(85, "circle", 61)(86, "circle", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](34);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.existingVaultProfile.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r0.form.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__.SpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXVsdC1zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 928:
/*!************************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/services/auth-interceptor.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 6803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 4213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);







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

/***/ 4213:
/*!************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/services/auth.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService),
/* harmony export */   "FASTEN_AUTH_VAULT_COOKIE_NAME": () => (/* binding */ FASTEN_AUTH_VAULT_COOKIE_NAME)
/* harmony export */ });
/* harmony import */ var _home_runner_work_fasten_connect_frontend_ngx_fasten_connect_frontend_ngx_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 6803);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jose */ 1979);
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jose */ 1231);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ 3974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ 3673);








const FASTEN_AUTH_VAULT_COOKIE_NAME = 'fasten_connect_auth_vault';
class AuthService {
  constructor(_httpClient, vaultConfigService) {
    this._httpClient = _httpClient;
    this.vaultConfigService = vaultConfigService;
    this.IsAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
  }
  VaultAuthBegin(email) {
    var _this = this;
    return (0,_home_runner_work_fasten_connect_frontend_ngx_fasten_connect_frontend_ngx_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let resp = yield _this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.connect_api_endpoint_base}/bridge/vault_auth_begin`, {
        "email": email
      }, {
        withCredentials: true,
        params: {
          "public_id": _app_constants__WEBPACK_IMPORTED_MODULE_2__.ORG_CREDENTIAL_PUBLIC_ID
        }
      }).toPromise();
      return resp;
    })();
  }
  VaultAuthFinish(email, code) {
    var _this2 = this;
    return (0,_home_runner_work_fasten_connect_frontend_ngx_fasten_connect_frontend_ngx_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let resp = yield _this2._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.connect_api_endpoint_base}/bridge/vault_auth_finish`, {
        "email": email,
        "code": code
      }, {
        withCredentials: true,
        params: {
          "public_id": _app_constants__WEBPACK_IMPORTED_MODULE_2__.ORG_CREDENTIAL_PUBLIC_ID
        }
      }).toPromise();
      return resp;
    })();
  }
  Signout() {
    var _this3 = this;
    return (0,_home_runner_work_fasten_connect_frontend_ngx_fasten_connect_frontend_ngx_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.publishAuthenticationState(false);
      return _this3.deleteCookie(FASTEN_AUTH_VAULT_COOKIE_NAME);
      // // let remotePouchDb = new PouchDB(this.getRemoteUserDb(localStorage.getItem("current_user")), {skip_setup: true});
      // if(this.pouchDb){
      //   await this.pouchDb.logOut()
      // }
      // await this.Close()
    })();
  }
  GetJWTPayload() {
    var _this4 = this;
    return (0,_home_runner_work_fasten_connect_frontend_ngx_fasten_connect_frontend_ngx_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let authToken = _this4.getCookie(FASTEN_AUTH_VAULT_COOKIE_NAME);
      if (!authToken) {
        return null;
      }
      let jwks = jose__WEBPACK_IMPORTED_MODULE_5__.createRemoteJWKSet(new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jwks_uri));
      let issuerHost = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.connect_api_jwt_issuer_host;
      try {
        //audience and issuer must be the same. This token is only valid on the fasten connect api
        const {
          payload,
          protectedHeader
        } = yield jose__WEBPACK_IMPORTED_MODULE_6__.jwtVerify(authToken, jwks, {
          issuer: issuerHost,
          audience: issuerHost
        });
        // @ts-ignore
        _this4.vaultConfigService.systemConfig = {
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
    var _this5 = this;
    return (0,_home_runner_work_fasten_connect_frontend_ngx_fasten_connect_frontend_ngx_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let payload = yield _this5.GetJWTPayload();
      let isAuthenticated = payload != null;
      _this5.publishAuthenticationState(isAuthenticated);
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
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3673:
/*!**************************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/app/services/config.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class VaultSystemConfig {
}
class ConfigService {
    constructor() {
        this._defaultSystemConfig = new VaultSystemConfig();
        this.systemConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this._defaultSystemConfig);
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------
    /**
     * Setter & getter for config
     */
    //Setter
    set systemConfig(value) {
        // get the current config, merge the new values, and then submit.
        const mergedSettings = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)({}, this.systemConfigSubject.getValue(), value);
        // Store the value
        if (JSON.stringify(mergedSettings) !== JSON.stringify(this.systemConfigSubject.getValue())) {
            console.log('updating system settings:', mergedSettings);
            this.systemConfigSubject.next(mergedSettings);
        }
    }
    //Getter
    get systemConfig$() {
        console.log('getting cached system settings:', this.systemConfigSubject.getValue());
        return this.systemConfigSubject.getValue();
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6803:
/*!***********************************************************************!*\
  !*** ./projects/fasten-connect-vault/src/environments/environment.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//local
const environment = {
    name: "local",
    //specify the lighthouse base that we're going to use to authenticate against all our source/providers. Must not have trailing slash
    lighthouse_api_endpoint_base: 'https://lighthouse.fastenhealth.com',
    //used to specify the api server that we're going to use (can be relative or absolute). Must not have trailing slash
    // if relative, must start with /
    connect_api_endpoint_base: 'http://localhost:4200/api',
    //use to specify the host that issued the JWT. This is used to verify the JWT.
    //This should always be the same as the connect_api_endpoint_base, however in local mode it will be different because of angular proxy
    // connect_api_jwt_issuer_host: 'http://localhost:8000',
    //JWKS for JWT verification
    // jwks_uri: 'https://cdn.fastenhealth.com/jwks/fasten-connect/local.json',
    //Stripe (Test mode locally)
    stripe_customer_portal: 'https://billing.stripe.com/p/login/test_bIY7thbZL5g6gXC000',
    //when using local proxy to api.connect-dev.fastenhealth.com, uncomment the following lines:
    jwks_uri: 'https://cdn.fastenhealth.com/jwks/fasten-connect/dev.json',
    connect_api_jwt_issuer_host: 'https://api.connect-dev.fastenhealth.com/v1',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 3762:
/*!***************************************************!*\
  !*** ./projects/fasten-connect-vault/src/main.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 2924);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6803);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.name != "local") {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-ps": 6235,
	"./ar-ps.js": 6235,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku-kmr": 9619,
	"./ku-kmr.js": 9619,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 5569,
	"./nl-be.js": 5569,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 643,
	"./pa-in.js": 643,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
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
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3762)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map