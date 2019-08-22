(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"content-page content-gradient\" scrollX=\"true\" scrollY=\"true\">\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api/register.service */ "./src/app/services/api/register.service.ts");
/* harmony import */ var _commons_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commons/util */ "./src/app/commons/util.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _services_api_institution_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/api/institution.service */ "./src/app/services/api/institution.service.ts");
/* harmony import */ var _services_api_bazar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api/bazar.service */ "./src/app/services/api/bazar.service.ts");
/* harmony import */ var _services_api_menu_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/api/menu.service */ "./src/app/services/api/menu.service.ts");










var HomePage = /** @class */ (function () {
    function HomePage(router, alertController, registerAPI, dataBase, institutionAPI, bazarAPI, loadingController, menuAPI, util) {
        this.router = router;
        this.alertController = alertController;
        this.registerAPI = registerAPI;
        this.dataBase = dataBase;
        this.institutionAPI = institutionAPI;
        this.bazarAPI = bazarAPI;
        this.loadingController = loadingController;
        this.menuAPI = menuAPI;
        this.util = util;
    }
    HomePage.prototype.ngOnInit = function () {
        this.localizaUsuario();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.localizaUsuario();
    };
    HomePage.prototype.localizaUsuario = function () {
        var _this = this;
        this.dataBase.getValue('NSL')
            .then(function (data) {
            if (data !== null) {
                _this.localizaInstituicao();
                _this.bazarList();
                _this.getMenuText();
                //this.presentLoading();
                _this.router.navigate(['menu']);
            }
            else {
                _this.router.navigate(['start']);
            }
        });
    };
    HomePage.prototype.localizaInstituicao = function () {
        var _this = this;
        this.institutionAPI.getAllInstitutions()
            .subscribe(function (instit) {
            _this.allInstitutions = JSON.parse(JSON.stringify(instit.listaInstituicao));
            _this.dataBase.setKeyValue('INST', _this.allInstitutions);
        }, function (err) {
        });
    };
    HomePage.prototype.bazarList = function () {
        var _this = this;
        this.bazarAPI.getAllBazares()
            .subscribe(function (bazar) {
            _this.allBazares = JSON.parse(JSON.stringify(bazar.ltBazar));
            _this.dataBase.setKeyValue('BAZ', _this.allBazares);
        }, function (err) {
        });
    };
    HomePage.prototype.getMenuText = function () {
        var _this = this;
        this.menuAPI.getMsg()
            .subscribe(function (data) {
            _this.customTextMenu = JSON.parse(JSON.stringify(data.mensagem));
            _this.dataBase.removeKey('MSG');
            _this.dataBase.setKeyValue('MSG', data.mensagem);
        }, function (err) {
        });
    };
    HomePage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Aguarde...',
                            duration: 5000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _services_api_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"],
            _services_database_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            _services_api_institution_service__WEBPACK_IMPORTED_MODULE_7__["InstitutionService"],
            _services_api_bazar_service__WEBPACK_IMPORTED_MODULE_8__["BazarService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _services_api_menu_service__WEBPACK_IMPORTED_MODULE_9__["MenuService"],
            _commons_util__WEBPACK_IMPORTED_MODULE_4__["Util"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map