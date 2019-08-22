(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resultado-detalhe-instituicao-detalhe-instituicao-module"],{

/***/ "./src/app/resultado/detalhe-instituicao/detalhe-instituicao.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/resultado/detalhe-instituicao/detalhe-instituicao.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DetalheInstituicaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheInstituicaoPageModule", function() { return DetalheInstituicaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalhe_instituicao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalhe-instituicao.page */ "./src/app/resultado/detalhe-instituicao/detalhe-instituicao.page.ts");







var routes = [
    {
        path: '',
        component: _detalhe_instituicao_page__WEBPACK_IMPORTED_MODULE_6__["DetalheInstituicaoPage"]
    }
];
var DetalheInstituicaoPageModule = /** @class */ (function () {
    function DetalheInstituicaoPageModule() {
    }
    DetalheInstituicaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detalhe_instituicao_page__WEBPACK_IMPORTED_MODULE_6__["DetalheInstituicaoPage"]]
        })
    ], DetalheInstituicaoPageModule);
    return DetalheInstituicaoPageModule;
}());



/***/ }),

/***/ "./src/app/resultado/detalhe-instituicao/detalhe-instituicao.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/resultado/detalhe-instituicao/detalhe-instituicao.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"content-page content-gradient\" scrollX=\"true\" scrollY=\"true\">\n<!--<ion-content padding class=DetalheInstituicaoPage scroll=”false”>-->\n  <div padding id=\"detalheInstituicao-layer\">\n   <form [formGroup]=\"detalheInstituicaoForm\" (ngSubmit)=\"back()\" autocomplete=”off” >\n    <ion-grid color=\"blue\">\n      <ion-item>\n        <ion-text>\n          <h1>{{nome}}</h1> \n          <h5>{{descricao}}</h5>\n          <h5>Endereco :{{endereco}}</h5>\n          <h5>Contato  :{{telefone}}<p></p></h5>\n        </ion-text>\n      </ion-item>\n    </ion-grid>    \n    <ion-row align-items-center>\n     <ion-col>\n        <ion-button expand=\"block\" class=\"cta low\" color=\"white\" type=\"submit\" >Volta</ion-button>\n      </ion-col>\n    </ion-row>\n   </form>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/resultado/detalhe-instituicao/detalhe-instituicao.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/resultado/detalhe-instituicao/detalhe-instituicao.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGFkby9kZXRhbGhlLWluc3RpdHVpY2FvL2RldGFsaGUtaW5zdGl0dWljYW8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/resultado/detalhe-instituicao/detalhe-instituicao.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/resultado/detalhe-instituicao/detalhe-instituicao.page.ts ***!
  \***************************************************************************/
/*! exports provided: DetalheInstituicaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheInstituicaoPage", function() { return DetalheInstituicaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var DetalheInstituicaoPage = /** @class */ (function () {
    function DetalheInstituicaoPage(alertController, router, route, formBuilder) {
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.customActionSheetOptions = {
            header: 'Instituições Parceiras',
            subHeader: 'Selecione a sua principal',
        };
        this.detalheInstituicaoForm = this.formBuilder.group({
            opt_detalheInstituicao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    }
    DetalheInstituicaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.nome = params['nome'],
                _this.descricao = params['descricao'];
            _this.endereco = params['endereco'];
            _this.telefone = params['telefone'];
        });
        console.log("Nome      :" + this.nome);
        console.log("Descricao :" + this.descricao);
        console.log("Endereco  :" + this.endereco);
        console.log("Telefone  :" + this.telefone);
    };
    DetalheInstituicaoPage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DetalheInstituicaoPage.prototype.back = function () {
        this.router.navigate(['institution']);
    };
    DetalheInstituicaoPage.prototype.getNome = function () {
        return this.nome;
    };
    DetalheInstituicaoPage.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    DetalheInstituicaoPage.prototype.getDescricao = function () {
        return this.descricao;
    };
    DetalheInstituicaoPage.prototype.setDescricao = function (descricao) {
        this.descricao = descricao;
    };
    DetalheInstituicaoPage.prototype.getEndereco = function () {
        return this.endereco;
    };
    DetalheInstituicaoPage.prototype.setEndereco = function (endereco) {
        this.endereco = endereco;
    };
    DetalheInstituicaoPage.prototype.getTelefone = function () {
        return this.telefone;
    };
    DetalheInstituicaoPage.prototype.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
    DetalheInstituicaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalhe-instituicao',
            template: __webpack_require__(/*! ./detalhe-instituicao.page.html */ "./src/app/resultado/detalhe-instituicao/detalhe-instituicao.page.html"),
            styles: [__webpack_require__(/*! ./detalhe-instituicao.page.scss */ "./src/app/resultado/detalhe-instituicao/detalhe-instituicao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], DetalheInstituicaoPage);
    return DetalheInstituicaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=resultado-detalhe-instituicao-detalhe-instituicao-module.js.map