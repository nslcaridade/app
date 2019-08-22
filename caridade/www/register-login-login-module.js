(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-login-login-module"],{

/***/ "./src/app/register/login/login.module.ts":
/*!************************************************!*\
  !*** ./src/app/register/login/login.module.ts ***!
  \************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/register.service */ "./src/app/services/api/register.service.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/register/login/login.page.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _services_api_register_service__WEBPACK_IMPORTED_MODULE_6__["RegisterService"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/register/login/login.page.html":
/*!************************************************!*\
  !*** ./src/app/register/login/login.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=”loginPage” scroll=”false”>\n  <div padding id=\"login-layer\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"localizaUsuario()\" autocomplete=”off” >\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-avatar>\n            <ion-img src=\"/assets/slides/tour/tour-yellow.svg\"></ion-img>\n          </ion-avatar>\n          <ion-note color=\"medium\">\n            <br />\n            Olá vamos acessar seu cadastro ?\n            <br />\n            <br />\n            Basta informar seu e-mail, o mesmo utilizado no seu cadastro.\n          </ion-note>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-label color=\"primary\" position=\"floating\">Email</ion-label>\n              <ion-input type=\"text\" placeholder=\"Informe seu email\" formControlName=\"email\" required></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n        <div class=\"footer\">\n\t\t\t\t\t<ion-button expand=\"block\" class=\"cta\" color=\"orange\" type=\"submit\" [disabled]=\"!loginForm.valid\">PRÓXIMO</ion-button>\n\t\t\t\t</div>\n\n    </form>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/login/login.page.scss":
/*!************************************************!*\
  !*** ./src/app/register/login/login.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register/login/login.page.ts":
/*!**********************************************!*\
  !*** ./src/app/register/login/login.page.ts ***!
  \**********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/register.service */ "./src/app/services/api/register.service.ts");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/database/database.service */ "./src/app/services/database/database.service.ts");







var LoginPage = /** @class */ (function () {
    function LoginPage(alertController, router, route, formBuilder, dataBase, registerAPI) {
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.dataBase = dataBase;
        this.registerAPI = registerAPI;
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.localizaUsuario = function () {
        var _this = this;
        this.registerAPI.findUser(this.loginForm.value.email)
            .subscribe(function (res) {
            if (parseInt(res.codigo) === 0) {
                console.log("antes do findUser");
                _this.user = JSON.parse(JSON.stringify(res.dadosUsuario));
                console.log("pos do findUser");
                console.log("gravando no store");
                _this.dataBase.removeKey('NSL');
                _this.dataBase.setKeyValue('NSL', res.dadosUsuario);
                console.log(res.dadosUsuario);
                _this.router.navigate(['home']);
            }
            else {
                _this.showAlert('Atenção', res.mensagem.texto);
            }
        }, function (err) {
            console.log(err);
            _this.router.navigate(['']);
        });
    };
    LoginPage.prototype.showAlert = function (header, message) {
        var alert = this.alertController.create({
            header: header,
            message: message,
            buttons: ['OK']
        });
        alert.then(function (_alert) {
            _alert.present();
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/register/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/register/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            _services_api_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-login-login-module.js.map