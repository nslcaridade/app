(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-relatorio-doacao-relatorio-doacao-module"],{

/***/ "./src/app/menu/relatorio-doacao/relatorio-doacao.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/menu/relatorio-doacao/relatorio-doacao.module.ts ***!
  \******************************************************************/
/*! exports provided: RelatorioDoacaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioDoacaoPageModule", function() { return RelatorioDoacaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_institution_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/institution.service */ "./src/app/services/api/institution.service.ts");
/* harmony import */ var _relatorio_doacao_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./relatorio-doacao.page */ "./src/app/menu/relatorio-doacao/relatorio-doacao.page.ts");








var routes = [
    {
        path: '',
        component: _relatorio_doacao_page__WEBPACK_IMPORTED_MODULE_7__["RelatorioDoacaoPage"]
    }
];
var RelatorioDoacaoPageModule = /** @class */ (function () {
    function RelatorioDoacaoPageModule() {
    }
    RelatorioDoacaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_relatorio_doacao_page__WEBPACK_IMPORTED_MODULE_7__["RelatorioDoacaoPage"]],
            providers: [_services_api_institution_service__WEBPACK_IMPORTED_MODULE_6__["InstitutionService"]]
        })
    ], RelatorioDoacaoPageModule);
    return RelatorioDoacaoPageModule;
}());



/***/ }),

/***/ "./src/app/menu/relatorio-doacao/relatorio-doacao.page.html":
/*!******************************************************************!*\
  !*** ./src/app/menu/relatorio-doacao/relatorio-doacao.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"content-page content-gradient\" scrollX=\"true\" scrollY=\"true\">\n  <div padding id=\"relatorio_doacao-layer\">\n    <form [formGroup]=\"relatorioDoacaoForm\" autocomplete=”off” accept-charset=\"utf-8\">\n      <ion-row>\n        <ion-col>\n          <ion-list>\n            <ion-item><ion-label><h5>Instituição</h5></ion-label>\n              <ion-select multiple=\"false\" cancelText=\"Cancela\" okText=\"Selecione\" formControlName=\"codInstituicao\">\n              <ion-select-option *ngFor=\"let institution of allInstitutions\" value=\"{{institution.id}}\">{{institution.nome}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label><h5>data inicio</h5></ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label><h5>data Fim</h5></ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" size-sm>\n            <ion-item >\n              <ion-input type=\"date\" formControlName=\"startDate\"></ion-input>\n            </ion-item>\n        </ion-col>\n        <ion-col size=\"6\" size-sm>\n            <ion-item >\n              <ion-input type=\"date\" formControlName=\"endDate\"></ion-input>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n      \n      <ion-button expand=\"block\" class=\"cta\" color=\"orange\" (click)=\"atualizaUser()\" [disabled]=\"!relatorioDoacaoForm.valid\">PRÓXIMO</ion-button>\n      <ion-button expand=\"block\" class=\"cta low\" color=\"white\" (click)=\"backMenu()\">Voltar</ion-button>\n    </form>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/menu/relatorio-doacao/relatorio-doacao.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/menu/relatorio-doacao/relatorio-doacao.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvcmVsYXRvcmlvLWRvYWNhby9yZWxhdG9yaW8tZG9hY2FvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/menu/relatorio-doacao/relatorio-doacao.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/menu/relatorio-doacao/relatorio-doacao.page.ts ***!
  \****************************************************************/
/*! exports provided: RelatorioDoacaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioDoacaoPage", function() { return RelatorioDoacaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/database/database.service */ "./src/app/services/database/database.service.ts");






var RelatorioDoacaoPage = /** @class */ (function () {
    function RelatorioDoacaoPage(loadingController, alertController, router, route, dataBase, formBuilder) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.dataBase = dataBase;
        this.formBuilder = formBuilder;
        this.start_date = '';
        this.end_date = '';
        this.isValidFormSubmitted = null;
        this.carregaMemoria();
        this.relatorioDoacaoForm = this.formBuilder.group({
            codInstituicao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
        //this.relatorioDoacaoForm.valueChanges.subscribe(data=>this.institutionOnDataChange(data));
    }
    RelatorioDoacaoPage.prototype.ngOnInit = function () {
    };
    RelatorioDoacaoPage.prototype.ngOnDestroy = function () {
    };
    RelatorioDoacaoPage.prototype.carregaMemoria = function () {
        var _this = this;
        console.log("localizando no store");
        this.dataBase.getValue('INST').then(function (data) {
            if (data !== null) {
                _this.allInstitutions = JSON.parse(JSON.stringify(data));
            }
        });
    };
    RelatorioDoacaoPage.prototype.logForm = function () {
        this.cod_intitution = this.relatorioDoacaoForm.value.codInstituicao;
        this.start_date = this.relatorioDoacaoForm.value.startDate;
        this.end_date = this.relatorioDoacaoForm.value.endDate;
        console.log(this.relatorioDoacaoForm.value.startDate);
        console.log(this.relatorioDoacaoForm.value.endDate);
        this.backMenu();
    };
    RelatorioDoacaoPage.prototype.atualizaUser = function () {
        this.cod_intitution = this.relatorioDoacaoForm.value.codInstituicao;
        this.start_date = this.relatorioDoacaoForm.value.startDate;
        this.end_date = this.relatorioDoacaoForm.value.endDate;
        console.log(this.start_date);
        console.log(this.end_date);
        this.isValidFormSubmitted = false;
        if (this.relatorioDoacaoForm.invalid) {
            console.log('Formulario Invalido');
            return;
        }
        this.isValidFormSubmitted = true;
        console.log('relatorio-doacoa - get id');
        console.log(this.cod_intitution);
        this.router.navigate(['relatorio', { codInstituicao: this.cod_intitution, startDate: this.start_date.substr(0, 10), endDate: this.end_date.substr(0, 10) }]).then(function (e) {
            if (e) {
                console.log('Sucesso');
            }
            else {
                console.log('Nao foi dessa vez');
            }
        })
            .catch(function (error) {
            console.log('Nao é por aqui: ', error);
        });
        this.relatorioDoacaoForm.reset();
    };
    RelatorioDoacaoPage.prototype.backMenu = function () {
        this.router.navigate(['menu']);
    };
    RelatorioDoacaoPage.prototype.getEndDate = function () {
        return this.end_date;
    };
    RelatorioDoacaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relatorio-doacao',
            template: __webpack_require__(/*! ./relatorio-doacao.page.html */ "./src/app/menu/relatorio-doacao/relatorio-doacao.page.html"),
            styles: [__webpack_require__(/*! ./relatorio-doacao.page.scss */ "./src/app/menu/relatorio-doacao/relatorio-doacao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_database_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RelatorioDoacaoPage);
    return RelatorioDoacaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-relatorio-doacao-relatorio-doacao-module.js.map