(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-bazar-bazar-module"],{

/***/ "./src/app/menu/bazar/bazar.module.ts":
/*!********************************************!*\
  !*** ./src/app/menu/bazar/bazar.module.ts ***!
  \********************************************/
/*! exports provided: BazarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazarPageModule", function() { return BazarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_bazar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/bazar.service */ "./src/app/services/api/bazar.service.ts");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api/register.service */ "./src/app/services/api/register.service.ts");
/* harmony import */ var _bazar_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bazar.page */ "./src/app/menu/bazar/bazar.page.ts");









var routes = [
    {
        path: '',
        component: _bazar_page__WEBPACK_IMPORTED_MODULE_8__["BazarPage"]
    }
];
var BazarPageModule = /** @class */ (function () {
    function BazarPageModule() {
    }
    BazarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bazar_page__WEBPACK_IMPORTED_MODULE_8__["BazarPage"]],
            providers: [
                _services_api_bazar_service__WEBPACK_IMPORTED_MODULE_6__["BazarService"],
                _services_api_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"]
            ]
        })
    ], BazarPageModule);
    return BazarPageModule;
}());



/***/ }),

/***/ "./src/app/menu/bazar/bazar.page.html":
/*!********************************************!*\
  !*** ./src/app/menu/bazar/bazar.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"content-page content-gradient\" scrollX=\"true\" scrollY=\"true\">\n  <div padding id=\"bazar-layer\">\n    <form [formGroup]=\"bazarForm\" (ngSubmit)=\"backMenu()\" autocomplete=”off” >\n      <ion-list lines=\"full\"><h5>Relação de Bazar</h5>\n        <ion-item *ngFor=\"let bazar of allBazares\">\n          <ion-label><h5>Em: {{ bazar.dataBazar }}, total: R${{bazar.valor}},00</h5></ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-button expand=\"block\" class=\"cta low\" color=\"white\" type=\"submit\" >Voltar</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/menu/bazar/bazar.page.scss":
/*!********************************************!*\
  !*** ./src/app/menu/bazar/bazar.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvYmF6YXIvYmF6YXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/bazar/bazar.page.ts":
/*!******************************************!*\
  !*** ./src/app/menu/bazar/bazar.page.ts ***!
  \******************************************/
/*! exports provided: BazarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazarPage", function() { return BazarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_bazar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/bazar.service */ "./src/app/services/api/bazar.service.ts");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/register.service */ "./src/app/services/api/register.service.ts");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/database/database.service */ "./src/app/services/database/database.service.ts");








var BazarPage = /** @class */ (function () {
    function BazarPage(alertController, router, route, formBuilder, BazarAPI, dataBase, registerAPI) {
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.BazarAPI = BazarAPI;
        this.dataBase = dataBase;
        this.registerAPI = registerAPI;
        this.carregaMemoria();
        //this.bazarList();
        this.bazarForm = this.formBuilder.group({
            opt_bazar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    }
    BazarPage.prototype.ngOnInit = function () {
    };
    BazarPage.prototype.carregaMemoria = function () {
        var _this = this;
        console.log("localizando no store");
        this.dataBase.getValue('BAZ').then(function (data) {
            if (data !== null) {
                _this.allBazares = JSON.parse(JSON.stringify(data));
            }
        });
    };
    BazarPage.prototype.bazarList = function () {
        var _this = this;
        this.BazarAPI.getAllBazares()
            .subscribe(function (bazar) {
            console.log("antes do getinst");
            _this.allBazares = JSON.parse(JSON.stringify(bazar.ltBazar));
            console.log("pos do getinst");
            console.log("localizando no store");
            _this.dataBase.removeKey('BAZ');
            _this.dataBase.setKeyValue('BAZ', _this.allBazares);
            console.log(bazar);
        }, function (err) {
        });
    };
    BazarPage.prototype.backMenu = function () {
        this.router.navigate(['menu']);
    };
    BazarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bazar',
            template: __webpack_require__(/*! ./bazar.page.html */ "./src/app/menu/bazar/bazar.page.html"),
            styles: [__webpack_require__(/*! ./bazar.page.scss */ "./src/app/menu/bazar/bazar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_api_bazar_service__WEBPACK_IMPORTED_MODULE_5__["BazarService"],
            _services_database_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"],
            _services_api_register_service__WEBPACK_IMPORTED_MODULE_6__["RegisterService"]])
    ], BazarPage);
    return BazarPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-bazar-bazar-module.js.map