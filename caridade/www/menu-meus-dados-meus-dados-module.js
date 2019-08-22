(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-meus-dados-meus-dados-module"],{

/***/ "./src/app/menu/meus-dados/meus-dados.module.ts":
/*!******************************************************!*\
  !*** ./src/app/menu/meus-dados/meus-dados.module.ts ***!
  \******************************************************/
/*! exports provided: MeusDadosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusDadosPageModule", function() { return MeusDadosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/register.service */ "./src/app/services/api/register.service.ts");
/* harmony import */ var _meus_dados_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meus-dados.page */ "./src/app/menu/meus-dados/meus-dados.page.ts");








var routes = [
    {
        path: '',
        component: _meus_dados_page__WEBPACK_IMPORTED_MODULE_7__["MeusDadosPage"]
    }
];
var MeusDadosPageModule = /** @class */ (function () {
    function MeusDadosPageModule() {
    }
    MeusDadosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_meus_dados_page__WEBPACK_IMPORTED_MODULE_7__["MeusDadosPage"]],
            providers: [_services_api_register_service__WEBPACK_IMPORTED_MODULE_6__["RegisterService"]]
        })
    ], MeusDadosPageModule);
    return MeusDadosPageModule;
}());



/***/ }),

/***/ "./src/app/menu/meus-dados/meus-dados.page.html":
/*!******************************************************!*\
  !*** ./src/app/menu/meus-dados/meus-dados.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"content-page content-gradient\" scrollX=\"true\" scrollY=\"true\">\n<!--<ion-content padding class=MeusDadosPage scroll=”false”>-->\n    <div padding id=\"meusdadospage-layer\">\n      <form [formGroup]=\"meusDadosPageForm\" autocomplete=”off” >\n        <ion-grid>\n          <ion-list>\n            <label><h5>Nome:</h5></label>\n            <ion-item class=\"input-item\">\n              <ion-input type=\"phone\" placeholder=\"{{nome}}\" disabled ></ion-input>\n            </ion-item>\n            <ion-item><ion-label><h5>{{dia_acolhida}}</h5></ion-label>\n              <ion-select multiple=\"false\" cancelText=\"Cancela\" okText=\"Selecione\" formControlName=\"cDiaAcolhida\" required>\n                <ion-select-option *ngFor=\"let dia of dia_\" value=\"{{dia.opcao}}\">{{dia.opcao}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-item><ion-label><h5>{{semana_escala}}</h5></ion-label>\n              <ion-select multiple=\"false\" cancelText=\"Cancela\" okText=\"Selecione\" formControlName=\"cSemanaEscala\" required>\n                <ion-select-option *ngFor=\"let semana of semana_\" value=\"{{semana.opcao}}\">{{semana.opcao}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n        </ion-grid>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-button expand=\"block\" color=\"white\" (click)=\"backMenu()\">Voltar</ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button expand=\"block\" color=\"orange\" (click)=\"atualizaUser()\">Atualizar</ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button expand=\"block\" class=\"cta low\" color=\"danger\" (click)=\"removeUser()\" >Excluir meu cadastro</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/menu/meus-dados/meus-dados.page.scss":
/*!******************************************************!*\
  !*** ./src/app/menu/meus-dados/meus-dados.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWV1cy1kYWRvcy9tZXVzLWRhZG9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/menu/meus-dados/meus-dados.page.ts":
/*!****************************************************!*\
  !*** ./src/app/menu/meus-dados/meus-dados.page.ts ***!
  \****************************************************/
/*! exports provided: MeusDadosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusDadosPage", function() { return MeusDadosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api/register.service */ "./src/app/services/api/register.service.ts");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var MeusDadosPage = /** @class */ (function () {
    function MeusDadosPage(registerApi, router, route, formBuilder, dataBase) {
        this.registerApi = registerApi;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.dataBase = dataBase;
        this.dia_ = [
            {
                opcao: 'quinta  20h'
            },
            {
                opcao: 'sabado  16h'
            },
            {
                opcao: 'domingo 09h'
            },
            {
                opcao: 'domingo 11h'
            },
            {
                opcao: 'domingo 19:30h'
            }
        ];
        this.semana_ = [
            {
                opcao: 'primeira'
            },
            {
                opcao: 'segunda'
            },
            {
                opcao: 'terceira'
            },
            {
                opcao: 'quarta'
            },
            {
                opcao: 'quinta'
            }
        ];
        this.carregaMemoria();
        //this.findUser();
        this.meusDadosPageForm = this.formBuilder.group({
            cNome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)])],
            cEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cDiaAcolhida: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cSemanaEscala: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    MeusDadosPage.prototype.ngOnInit = function () {
    };
    MeusDadosPage.prototype.carregaMemoria = function () {
        var _this = this;
        console.log("localizando no store");
        this.dataBase.getValue('NSL').then(function (data) {
            if (data !== null) {
                _this.dadosUser = JSON.parse(JSON.stringify(data));
                console.log(_this.dadosUser);
                _this.idUsuario = _this.dadosUser.idUsuario;
                _this.nome = _this.dadosUser.nome;
                _this.email = _this.dadosUser.email;
                _this.dia_acolhida = _this.dadosUser.diaAcolhida;
                _this.semana_escala = _this.dadosUser.semanaEscala;
                _this.telefone = _this.dadosUser.telefone;
                _this.data_nascimento = _this.dadosUser.dataNacimento;
            }
        });
    };
    MeusDadosPage.prototype.findUser = function () {
        var _this = this;
        this.dataBase.getValue('NSL')
            .then(function (data) {
            if (data !== null) {
                _this.idUsuario = JSON.parse(JSON.stringify(data.idUsuario));
            }
            _this.registerApi.findUser(_this.idUsuario)
                .subscribe(function (userFound) {
                console.log("passo:" + userFound);
                _this.dadosUser = JSON.parse(JSON.stringify(userFound.dadosUsuario));
                _this.idUsuario = _this.dadosUser.idUsuario;
                _this.nome = _this.dadosUser.nome;
                _this.email = _this.dadosUser.email;
                _this.dia_acolhida = _this.dadosUser.diaAcolhida;
                _this.semana_escala = _this.dadosUser.semanaEscala;
                _this.data_nascimento = _this.dadosUser.dataNacimento;
                _this.telefone = _this.dadosUser.telefone;
                _this.plataforma = _this.dadosUser.plataforma;
                _this.deficeToken = _this.dadosUser.deficeToken;
                _this.dataBase.removeKey('NSL');
                _this.dataBase.setKeyValue('NSL', _this.dadosUser);
                console.log("passo++");
                console.log(userFound.dadosUsuario);
            }, function (err) {
                console.log(err);
            });
        });
    };
    MeusDadosPage.prototype.atualizaUser = function () {
        var _this = this;
        if (this.meusDadosPageForm.value.cDiaAcolhida !== undefined &&
            this.meusDadosPageForm.value.cDiaAcolhida !== "")
            this.setDiaAcolhida(this.meusDadosPageForm.value.cDiaAcolhida);
        if (this.meusDadosPageForm.value.cSemanaEscala !== undefined &&
            this.meusDadosPageForm.value.cSemanaEscala !== "")
            this.setSemanaEscala(this.meusDadosPageForm.value.cSemanaEscala);
        console.log("Atualiza: dia:" + this.getDiaAcolhida() +
            ", semana :" + this.getSemanaEscala() +
            ", telefone:" + this.telefone +
            ", data_nascimento:" + this.data_nascimento);
        this.registerApi.updateUser(this.idUsuario, this.telefone, this.data_nascimento, this.getDiaAcolhida(), this.getSemanaEscala())
            .subscribe(function (res) {
            console.log(res);
            if (parseInt(res.codigo) === 0) {
                console.log('id: ', res.idUsuario);
                _this.dataBase.removeKey('NSL');
                _this.dataBase.setKeyValue('NSL', _this.dadosUser);
                _this.router.navigate(['menu', { id: res.idUsuario }]);
            }
        }, function (err) {
            console.log(err);
            _this.router.navigate(['']);
        });
    };
    MeusDadosPage.prototype.removeUser = function () {
        var _this = this;
        this.dataBase.getValue('NSL')
            .then(function (data) {
            if (data !== null) {
                _this.idUsuario = JSON.parse(JSON.stringify(data.idUsuario));
                console.log("No delete " + _this.idUsuario);
                _this.registerApi.deleteUser(_this.idUsuario).subscribe(function (res) {
                    console.log(res);
                    if (parseInt(res.codigo) === 0) {
                        console.log('id: ', res.idUsuario);
                        _this.dataBase.removeKey('NSL');
                        _this.router.navigate(['start']);
                    }
                }, function (err) {
                    console.log(err);
                    _this.router.navigate(['']);
                });
            }
        });
    };
    MeusDadosPage.prototype.backMenu = function () {
        this.router.navigate(['menu']);
    };
    MeusDadosPage.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    MeusDadosPage.prototype.getNome = function () {
        return this.nome;
    };
    MeusDadosPage.prototype.setEmail = function (email) {
        this.email = email;
    };
    MeusDadosPage.prototype.getEmail = function () {
        return this.email;
    };
    MeusDadosPage.prototype.setDiaAcolhida = function (dia_acolhida) {
        this.dia_acolhida = dia_acolhida;
    };
    MeusDadosPage.prototype.getDiaAcolhida = function () {
        return this.dia_acolhida;
    };
    MeusDadosPage.prototype.setSemanaEscala = function (semana_escala) {
        this.semana_escala = semana_escala;
    };
    MeusDadosPage.prototype.getSemanaEscala = function () {
        return this.semana_escala;
    };
    MeusDadosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meus-dados',
            template: __webpack_require__(/*! ./meus-dados.page.html */ "./src/app/menu/meus-dados/meus-dados.page.html"),
            styles: [__webpack_require__(/*! ./meus-dados.page.scss */ "./src/app/menu/meus-dados/meus-dados.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_database_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], MeusDadosPage);
    return MeusDadosPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-meus-dados-meus-dados-module.js.map