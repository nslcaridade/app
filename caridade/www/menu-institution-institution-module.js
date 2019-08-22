(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-institution-institution-module"],{

/***/ "./src/app/menu/institution/institution.module.ts":
/*!********************************************************!*\
  !*** ./src/app/menu/institution/institution.module.ts ***!
  \********************************************************/
/*! exports provided: InstitutionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionPageModule", function() { return InstitutionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _institution_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./institution.page */ "./src/app/menu/institution/institution.page.ts");
/* harmony import */ var _services_api_institution_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api/institution.service */ "./src/app/services/api/institution.service.ts");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api/register.service */ "./src/app/services/api/register.service.ts");









var routes = [
    {
        path: '',
        component: _institution_page__WEBPACK_IMPORTED_MODULE_6__["InstitutionPage"]
    }
];
var InstitutionPageModule = /** @class */ (function () {
    function InstitutionPageModule() {
    }
    InstitutionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_institution_page__WEBPACK_IMPORTED_MODULE_6__["InstitutionPage"]],
            providers: [
                _services_api_institution_service__WEBPACK_IMPORTED_MODULE_7__["InstitutionService"],
                _services_api_register_service__WEBPACK_IMPORTED_MODULE_8__["RegisterService"]
            ]
        })
    ], InstitutionPageModule);
    return InstitutionPageModule;
}());



/***/ }),

/***/ "./src/app/menu/institution/institution.page.html":
/*!********************************************************!*\
  !*** ./src/app/menu/institution/institution.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"content-page content-gradient\" scrollX=\"true\" scrollY=\"true\">\n<!--<ion-content padding class=InstitutionPage scroll=”false”>-->\n  <div padding id=\"institution-layer\">\n    <form [formGroup]=\"institutionForm\" (ngSubmit)=\"logForm()\" autocomplete=”off” >\n      <ion-list lines=\"full\">\n        <ion-item *ngFor=\"let institution of allInstitutions\">\n          <ion-button class=\"footer-button\" color=\"white\" expand=\"full\" (click)=\"showDetalhe(institution.nome, institution.descricao, institution.endereco, institution.telefone)\">\n          <h5>{{ institution.nome }}</h5></ion-button>\n        </ion-item>\n      </ion-list>\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-button expand=\"block\" class=\"cta low\" color=\"white\" type=\"submit\" >Volta</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/menu/institution/institution.page.scss":
/*!********************************************************!*\
  !*** ./src/app/menu/institution/institution.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvaW5zdGl0dXRpb24vaW5zdGl0dXRpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/institution/institution.page.ts":
/*!******************************************************!*\
  !*** ./src/app/menu/institution/institution.page.ts ***!
  \******************************************************/
/*! exports provided: InstitutionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionPage", function() { return InstitutionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_institution_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/institution.service */ "./src/app/services/api/institution.service.ts");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/register.service */ "./src/app/services/api/register.service.ts");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/database/database.service */ "./src/app/services/database/database.service.ts");








var InstitutionPage = /** @class */ (function () {
    function InstitutionPage(alertController, router, route, formBuilder, InstitutionAPI, dataBase, registerAPI) {
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.InstitutionAPI = InstitutionAPI;
        this.dataBase = dataBase;
        this.registerAPI = registerAPI;
        console.log('Passo 1');
        this.image = "./../../../assets/img/piggy-bank.svg";
        this.customActionSheetOptions = {
            header: 'Instituições Parceiras',
            subHeader: 'Selecione a sua principal',
        };
        // API GET
        this.carregaMemoria();
        //this.institutionList();
        this.institutionForm = this.formBuilder.group({
            opt_institution: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
        //this.institutionForm.valueChanges.subscribe(data=>this.institutionOnDataChange(data));
    }
    InstitutionPage.prototype.ngOnInit = function () {
    };
    InstitutionPage.prototype.institutionOnDataChange = function (data) {
        console.log(data);
    };
    InstitutionPage.prototype.carregaMemoria = function () {
        var _this = this;
        console.log("localizando no store");
        this.dataBase.getValue('INST').then(function (data) {
            if (data !== null) {
                _this.allInstitutions = JSON.parse(JSON.stringify(data));
            }
        });
    };
    InstitutionPage.prototype.institutionList = function () {
        var _this = this;
        this.InstitutionAPI.getAllInstitutions()
            .subscribe(function (instit) {
            console.log("antes do getinst");
            _this.allInstitutions = JSON.parse(JSON.stringify(instit.listaInstituicao));
            console.log("pos do getinst");
            console.log("localizando no store");
            _this.dataBase.removeKey('INST');
            _this.dataBase.setKeyValue('INST', _this.allInstitutions);
            console.log(instit.listaInstituicao);
        }, function (err) {
        });
    };
    InstitutionPage.prototype.logForm = function () {
        this.backMenu();
    };
    InstitutionPage.prototype.saveData = function () {
        var _this = this;
        this.registerAPI.updateUserInstitution(this.id, this.getNome())
            .subscribe(function (res) {
            // this.response = res;
            console.log(res);
            if (parseInt(res.codigo) === 0) {
                // TODO: Ir para TELA DE STATUS
                _this.router.navigate(['menu']);
            }
            else {
                _this.showAlert('Atenção', res.mensagem.texto);
            }
        }, function (err) {
            console.log(err);
            _this.router.navigate(['']);
        });
    };
    InstitutionPage.prototype.backMenu = function () {
        this.router.navigate(['menu']);
    };
    InstitutionPage.prototype.showAlert = function (header, message) {
        var alert = this.alertController.create({
            header: header,
            message: message,
            buttons: ['OK']
        });
        alert.then(function (_alert) {
            _alert.present();
        });
    };
    InstitutionPage.prototype.showDetalhe = function (nome, descricao, endereco, telefone) {
        this.router.navigate(['detalhe-instituicao',
            { nome: nome,
                descricao: descricao,
                endereco: endereco,
                telefone: telefone }]);
    };
    InstitutionPage.prototype.presentAlertConfirm = function (header, message) {
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
                                        console.log('Cancela, editar o banco ', blah);
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Confirmou o banco');
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
    InstitutionPage.prototype.getId = function () {
        return this.id;
    };
    InstitutionPage.prototype.setId = function (code) {
        this.id = code;
    };
    InstitutionPage.prototype.getNome = function () {
        return this.nome;
    };
    InstitutionPage.prototype.setNome = function (nome) {
        this.nome = 'nome';
    };
    InstitutionPage.prototype.getTelefone = function () {
        return this.telefone;
    };
    InstitutionPage.prototype.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
    InstitutionPage.prototype.getEndereco = function () {
        return this.endereco;
    };
    InstitutionPage.prototype.setEndereco = function (endereco) {
        this.endereco = endereco;
    };
    InstitutionPage.prototype.getDataFundacao = function () {
        return this.dataFundacao;
    };
    InstitutionPage.prototype.setDataFundacao = function (dataFundacao) {
        this.dataFundacao = dataFundacao;
    };
    InstitutionPage.prototype.getParoquea = function () {
        return this.paroquea;
    };
    InstitutionPage.prototype.setParoquea = function (paroquea) {
        this.paroquea = paroquea;
    };
    InstitutionPage.prototype.getTelefoneParoquea = function () {
        return this.telefoneParoquea;
    };
    InstitutionPage.prototype.setTelefoneParoquea = function (telefoneParoquea) {
        this.telefoneParoquea = telefoneParoquea;
    };
    InstitutionPage.prototype.getAtivo = function () {
        return this.ativo;
    };
    InstitutionPage.prototype.setAtivo = function (ativo) {
        this.ativo = ativo;
    };
    InstitutionPage.prototype.getDescricao = function () {
        return this.descricao;
    };
    InstitutionPage.prototype.setDescricao = function (descricao) {
        this.descricao = descricao;
    };
    InstitutionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-institution',
            template: __webpack_require__(/*! ./institution.page.html */ "./src/app/menu/institution/institution.page.html"),
            styles: [__webpack_require__(/*! ./institution.page.scss */ "./src/app/menu/institution/institution.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_api_institution_service__WEBPACK_IMPORTED_MODULE_5__["InstitutionService"],
            _services_database_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"],
            _services_api_register_service__WEBPACK_IMPORTED_MODULE_6__["RegisterService"]])
    ], InstitutionPage);
    return InstitutionPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-institution-institution-module.js.map