(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-user-user-module"],{

/***/ "./src/app/register/user/user.module.ts":
/*!**********************************************!*\
  !*** ./src/app/register/user/user.module.ts ***!
  \**********************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/register/user/user.page.ts");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api/register.service */ "./src/app/services/api/register.service.ts");
/* harmony import */ var _commons_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commons/util */ "./src/app/commons/util.ts");









var routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]
    }
];
var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]],
            providers: [
                _services_api_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"],
                _commons_util__WEBPACK_IMPORTED_MODULE_8__["Util"]
            ]
            /*schemas: [
                  CUSTOM_ELEMENTS_SCHEMA,
                  NO_ERRORS_SCHEMA
            ]*/
        })
    ], UserPageModule);
    return UserPageModule;
}());



/***/ }),

/***/ "./src/app/register/user/user.page.html":
/*!**********************************************!*\
  !*** ./src/app/register/user/user.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding class=”userPage” scroll=”false”>\n  <div padding id=\"user-layer\">\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"logForm()\" autocomplete=”off” >\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-avatar>\n            <ion-img src=\"/assets/slides/tour/tour-yellow.svg\"></ion-img>\n          </ion-avatar>\n          <ion-note color=\"medium\">\n            Vamos começar o seu cadastro por etapas.\n            <br />\n            O email informado é de grande utilidade, podemos enviar informações relevante da Pastoral.\n            <br />\n            Quando estiver pronto, insira as informações abaixo.\n          </ion-note>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-label color=\"primary\" position=\"floating\">Nome</ion-label>\n              <ion-input type=\"text\" placeholder=\"Informe seu Nome Completo\" formControlName=\"user_name\" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label color=\"primary\" position=\"floating\">Email</ion-label>\n              <ion-input type=\"email\" placeholder=\"Informe seu Email\" formControlName=\"user_email\" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n        <div class=\"footer\">\n\t\t\t\t\t<ion-button expand=\"block\" class=\"cta\" color=\"orange\" type=\"submit\" [disabled]=\"!userForm.valid\">PRÓXIMO</ion-button>\n\t\t\t\t</div>\n\n    </form>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/user/user.page.scss":
/*!**********************************************!*\
  !*** ./src/app/register/user/user.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  margin: auto; }\n\n.ios user-page scroll-content, .md user-page scroll-content {\n  background-color: #42c7ff;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden; }\n\n.ios user-page img, .md user-page img {\n  width: 50%;\n  height: auto;\n  margin: 0 auto; }\n\n.ios user-page #userLayer, .md user-page #userLayer {\n  background-image: url(\"/assets/img/background.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.ios user-page ion-row, .md user-page ion-row {\n  align-items: center;\n  text-align: center; }\n\n.ios user-page ion-item, .md user-page ion-item {\n  border-radius: 30px !important;\n  padding-left: 10px !important;\n  margin-bottom: 10px;\n  background-color: #f6f6f6;\n  opacity: 0.7;\n  font-size: 0.9em; }\n\n.ios user-page ion-list, .md user-page ion-list {\n  margin: 0; }\n\n.ios user-page .user.button, .md user-page .user.button {\n  width: 100%;\n  border-radius: 30px;\n  font-size: 0.9em;\n  border: 1px solid #fff;\n  background-color: #39acdc; }\n\n.ios user-page .user-container, .md user-page .user-container {\n  border-radius: 10px;\n  opacity: 0.8;\n  width: 80%;\n  text-align: center;\n  background-color: white; }\n\n.ios user-page .user-logo, .md user-page .user-logo {\n  vertical-align: center;\n  text-align: center; }\n\n.ios user-page .user-form, .md user-page .user-form {\n  opacity: none !important; }\n\n.ios user-page .container, .md user-page .container {\n  margin-top: 1.5rem;\n  background: rgba(2, 60, 117, 0.5);\n  border-radius: 5px;\n  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);\n  width: 409px;\n  display: flex;\n  flex-direction: column; }\n\n.ios user-page .logo, .md user-page .logo {\n  align-items: center;\n  justify-content: center;\n  padding: 20px 20px 0;\n  width: 25%;\n  height: 50%; }\n\n.ios user-page .card-text, .md user-page .card-text {\n  margin-top: 5px;\n  text-align: center;\n  font-family: \"museo-slab\";\n  font-size: 16px; }\n\n.ios user-page .div-btn, .md user-page .div-btn {\n  color: white;\n  padding: 20px 20px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.ios user-page button.btn, .ios user-page buttoni.btn, .md user-page button.btn, .md user-page buttoni.btn {\n  background-color: #4a90e2;\n  color: white;\n  text-align: center; }\n\n.ios user-page .btn.btn-step, .md user-page .btn.btn-step {\n  border-radius: 3px;\n  padding: 10px 10px 10px 10px;\n  display: block;\n  height: inherit;\n  width: 100%;\n  background: linear-gradient(to bottom, #4a90e2 0%, #4ab6e2 100%);\n  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.7), inset 0 2px 0 -1px rgba(98, 98, 98, 0.5), 0 3px 7px -3px rgba(0, 0, 0, 0.7); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvdXNlci9DOlxcVXNlcnNcXGFsZXhhbmRyZS5kdWFydGVcXGVzdHVkb1xcYXBwXFxjYXJpZGFkZS9zcmNcXGFwcFxccmVnaXN0ZXJcXHVzZXJcXHVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBS00seUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBUnRCO0VBWU0sVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBZHBCO0VBa0JLLG1EQUFtRDtFQUNuRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBOztBQXJCakM7RUF5Qk0sbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQTFCeEI7RUE4Qk0sOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFuQ3RCO0VBdUNNLFNBQVMsRUFBQTs7QUF2Q2Y7RUEyQ00sV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF5QixFQUFBOztBQS9DL0I7RUFtRFMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQXZEaEM7RUEwRFUsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQTNENUI7RUE4RFUsd0JBQXVCLEVBQUE7O0FBOURqQztFQWtFTSxrQkFBa0I7RUFDbEIsaUNBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQiwwQ0FBMkM7RUFDM0MsWUFBVztFQUNYLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUF4RTVCO0VBNEVNLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLFVBQVM7RUFDVCxXQUFVLEVBQUE7O0FBaEZoQjtFQW9GTSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFjLEVBQUE7O0FBdkZwQjtFQTJGTSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBL0Y3QjtFQW1HTSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQXJHeEI7RUF5R00sa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZUFBYztFQUNkLFdBQVc7RUFDWCxnRUFBZ0U7RUFDaEUscUhBQXFILEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci91c2VyL3VzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhcntcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pb3MsIC5tZCB7XHJcblxyXG4gIHVzZXItcGFnZSB7XHJcblxyXG4gICAgc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJjN2ZmO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgI3VzZXJMYXllciB7XHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZycpO1xyXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAudXNlci5idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNkYztcclxuICAgIH1cclxuXHJcbiAgICAgLnVzZXItY29udGFpbmVyIHtcclxuICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLWxvZ297XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLWZvcm17XHJcbiAgICAgICAgICBvcGFjaXR5OiBub25lIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgYmFja2dyb3VuZDpyZ2JhKDIsIDYwLCAxMTcsIDAuNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAxLjVweCAwIDAgICAgIHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgd2lkdGg6NDA5cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ297XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcclxuICAgICAgd2lkdGg6MjUlO1xyXG4gICAgICBoZWlnaHQ6NTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXRleHR7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogXCJtdXNlby1zbGFiXCI7XHJcbiAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtYnRue1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24uYnRuLCBidXR0b25pLmJ0biB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTkwZTI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4uYnRuLXN0ZXB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGhlaWdodDppbmhlcml0O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzRhOTBlMiAwJSwgIzRhYjZlMiAxMDAlKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDNweCAwIHJnYmEoMCwgMCwgMCwgMC43KSwgaW5zZXQgMCAycHggMCAtMXB4IHJnYmEoOTgsIDk4LCA5OCwgMC41KSwgMCAzcHggN3B4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/register/user/user.page.ts":
/*!********************************************!*\
  !*** ./src/app/register/user/user.page.ts ***!
  \********************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/register.service */ "./src/app/services/api/register.service.ts");
/* harmony import */ var _commons_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commons/util */ "./src/app/commons/util.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");









// import { LocaluserService, User } from '../../services/database/localuser.service'
var UserPage = /** @class */ (function () {
    function UserPage(loadingController, alertController, router, route, formBuilder, registerAPI, util, fcm, platform, device
    /*public localUserStorage: LocaluserService*/ ) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.registerAPI = registerAPI;
        this.util = util;
        this.fcm = fcm;
        this.platform = platform;
        this.device = device;
        this.user_name = '';
        this.user_email = '';
        this.token = '';
        this.userForm = this.formBuilder.group({
            user_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)])],
            user_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    UserPage.prototype.ngOnInit = function () {
        this.getRefreshPushToken();
    };
    UserPage.prototype.userOnDataChange = function (data) {
        console.log(data);
    };
    UserPage.prototype.logForm = function () {
        console.log("email: ", this.userForm.value.user_email, "nome: ", this.userForm.value.user_name, "token:", this.token);
        this.setName(this.userForm.value.user_name);
        this.setEmail(this.userForm.value.user_email);
        this.util.getInfo();
        if (this.token !== '') {
            this.presentAlertConfirm('Atenção!', 'Por favor, confirme o endereço de email <strong>' + this.getEmail() + '</strong>');
        }
        else {
            this.showAlert('Error', 'Push não esta presente.');
        }
    };
    UserPage.prototype.saveData = function () {
        var _this = this;
        this.registerAPI.addUser(this.getEmail(), this.getName(), this.checkPlatform(), this.device.uuid, this.token)
            .subscribe(function (res) {
            if (parseInt(res.codigo) === 0) {
                // TODO: STORAGE
                _this.router.navigate(['cadastro', { id: res.idUsuario }]);
            }
            else if (parseInt(res.codigo) === -1) {
                console.log(res);
                _this.showAlert('Error', res.mensagem[0].texto);
                _this.router.navigate(['start']);
            }
        }, function (err) {
            console.log(err);
            _this.showAlert('Error', 'ERRO Não conhecido ao add usuario favor informar o Alexandre');
            _this.router.navigate(['']);
        });
    };
    UserPage.prototype.getRefreshPushToken = function () {
        // console.log('[Credential] getRefreshPushToken In ');
        var _this = this;
        this.fcm
            .getToken()
            .then(function (token) {
            console.log("[PUSH] getToken Solicita novo Token: ", token);
            _this.token = token;
            _this.util.setPushToken(token);
        })
            .catch(function (error) {
            console.log("[PUSH] Exception: ", error);
        });
        // console.log('[Credential] getToken after : ', this.token);
        this.fcm.onTokenRefresh().subscribe(function (token) {
            console.log("[PUSH] onTokenRefresh Token:", token);
            _this.token = token;
            console.log("[Credential] Token:", _this.token);
            _this.util.setPushToken(token);
        }, function (err) {
            console.error("[PUSH] Exception:", err);
        });
        // console.log('[Credential] onTokenRefresh after: ', this.token);
        if (this.token && this.token.length >= 1) {
            console.log("[Credential] Empty Token -> getToken()");
            this.fcm
                .getToken()
                .then(function (token) {
                console.log("[PUSH] getToken Solicita novo Token: ", token);
                _this.token = token;
                _this.util.setPushToken(token);
            })
                .catch(function (error) {
                console.log("[PUSH] Exception: ", error);
            });
        }
        // console.log('[Credential] getRefreshPushToken Leave: ', this.token);
    };
    UserPage.prototype.checkPlatform = function () {
        if (this.platform.is("android")) {
            //this.showAlert('Platform','android');
            return "android";
        }
        else if (this.platform.is("ios")) {
            //this.showAlert('Platform','ios');
            return "ios";
        }
        else if (this.platform.is("iphone")) {
            //this.showAlert('Platform','iphone');
            return "iphone";
        }
        else if (this.platform.is("mobile")) {
            //this.showAlert('Platform','mobile');
            return "mobile";
        }
        else if (this.platform.is("cordova")) {
            //this.showAlert('Platform','cordova');
            return "cordova";
        }
        else if (this.platform.is("hybrid")) {
            //this.showAlert('Platform','hybrid');
            return "hybrid;";
        }
        else if (this.platform.is("pwa")) {
            //this.showAlert('Platform','pwa');
            return "pwa";
        }
    };
    UserPage.prototype.showAlert = function (header, message) {
        var alert = this.alertController.create({
            header: header,
            message: message,
            buttons: ['OK']
        });
        alert.then(function (_alert) {
            _alert.present();
        });
    };
    UserPage.prototype.presentAlertConfirm = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Cancela, editar o e-mail ', blah);
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Confirmou email');
                                        _this.saveData();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPage.prototype.presentLoading = function () {
        this.loading = this.loadingController.create({
            message: 'Carregando...'
        });
        this.loading.present();
    };
    UserPage.prototype.getName = function () {
        return this.name;
    };
    UserPage.prototype.setName = function (name) {
        this.name = name;
    };
    UserPage.prototype.getEmail = function () {
        return this.email;
    };
    UserPage.prototype.setEmail = function (email) {
        this.email = email;
    };
    UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.page.html */ "./src/app/register/user/user.page.html"),
            styles: [__webpack_require__(/*! ./user.page.scss */ "./src/app/register/user/user.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_api_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"],
            _commons_util__WEBPACK_IMPORTED_MODULE_6__["Util"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_7__["FCM"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"]
            /*public localUserStorage: LocaluserService*/ ])
    ], UserPage);
    return UserPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-user-user-module.js.map