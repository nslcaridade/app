(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resultado-relatorio-relatorio-module"],{

/***/ "./src/app/resultado/relatorio/relatorio.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/resultado/relatorio/relatorio.module.ts ***!
  \*********************************************************/
/*! exports provided: RelatorioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioPageModule", function() { return RelatorioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _relatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relatorio.page */ "./src/app/resultado/relatorio/relatorio.page.ts");






//import { DoacaoService } from '../../services/api/doacao.service';

var routes = [
    {
        path: '',
        component: _relatorio_page__WEBPACK_IMPORTED_MODULE_6__["RelatorioPage"]
    }
];
var RelatorioPageModule = /** @class */ (function () {
    function RelatorioPageModule() {
    }
    RelatorioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _relatorio_page__WEBPACK_IMPORTED_MODULE_6__["RelatorioPage"] /*,
                DoacaoService*/
            ]
        })
    ], RelatorioPageModule);
    return RelatorioPageModule;
}());



/***/ }),

/***/ "./src/app/resultado/relatorio/relatorio.page.html":
/*!*********************************************************!*\
  !*** ./src/app/resultado/relatorio/relatorio.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"content-page\" scrollX=\"true\" scrollY=\"true\">\n  <ion-header>\n    <ion-row align-items-center>\n      <ion-col size=\"4\">\n        <img src=\"../../assets/img/logo_nsl.png\">\n      </ion-col>\n      <ion-col size=\"8\" color=\"blue\">\n        <ion-label><h1>Relatório de Doações {{ nome }}</h1></ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n  <div>\n    <ion-item color=\"blue\">\n      <ion-text>\n        <h4>Quantidade de Produtos: {{ quanTotal }}</h4>\n        <p></p>\n      </ion-text>\n    </ion-item>\n  </div>\n\n  <div padding id=\"relatorio-layer\">\n    <ion-row align-items-center>\n      <ion-list lines=\"full\">\n        <ion-item *ngFor=\"let doacao of allDoacoes\">\n          <ion-label><h5>Produto: {{ doacao[1] }} qtd: {{ doacao[2] }}</h5></ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col>\n        <ion-button expand=\"block\" class=\"cta\" color=\"orange\" (click)=\"backMenu()\">Voltar</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/resultado/relatorio/relatorio.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/resultado/relatorio/relatorio.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGFkby9yZWxhdG9yaW8vcmVsYXRvcmlvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/resultado/relatorio/relatorio.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/resultado/relatorio/relatorio.page.ts ***!
  \*******************************************************/
/*! exports provided: RelatorioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioPage", function() { return RelatorioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_doacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/doacao.service */ "./src/app/services/api/doacao.service.ts");





var RelatorioPage = /** @class */ (function () {
    function RelatorioPage(loadingController, alertController, router, route, 
    //private formBuilder: FormBuilder,
    doacaoApi) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.doacaoApi = doacaoApi;
        this.isValidFormSubmitted = null;
        this.codInstituicao = '';
        console.log('Passo 1');
        this.image = "./../../../assets/img/piggy-bank.svg";
    }
    RelatorioPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.cod_intitution = +params['codInstituicao'];
            _this.start_date = params['startDate'];
            _this.end_date = params['endDate'];
            _this.nome = params['nome'];
        });
        this.listaDoacoes();
    };
    RelatorioPage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    RelatorioPage.prototype.listaDoacoes = function () {
        var _this = this;
        console.log('DEBUG - cod_intitution: ', this.cod_intitution);
        this.doacaoApi.getDoacoesPorPeriodo(this.cod_intitution, this.start_date, this.end_date)
            .subscribe(function (data) {
            _this.allDoacoes = JSON.parse(JSON.stringify(data.relatorioDoacao));
            _this.somatoria();
        }, function (err) {
            console.log(err);
        });
    };
    RelatorioPage.prototype.somatoria = function () {
        this.quanTotal = 0;
        this.pesoTotal = 0;
        for (var index = 0; index < this.allDoacoes.length; index++) {
            var element = this.allDoacoes[index];
            this.quanTotal = this.quanTotal + element[2];
            this.pesoTotal = this.pesoTotal + element[3];
        }
        if (this.pesoTotal > 0) {
            this.pesoTotal = this.pesoTotal / 100;
        }
    };
    RelatorioPage.prototype.logForm = function () {
        this.backMenu();
    };
    RelatorioPage.prototype.backMenu = function () {
        this.router.navigate(['menu']);
    };
    RelatorioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relatorio',
            template: __webpack_require__(/*! ./relatorio.page.html */ "./src/app/resultado/relatorio/relatorio.page.html"),
            styles: [__webpack_require__(/*! ./relatorio.page.scss */ "./src/app/resultado/relatorio/relatorio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_api_doacao_service__WEBPACK_IMPORTED_MODULE_4__["DoacaoService"]])
    ], RelatorioPage);
    return RelatorioPage;
}());



/***/ }),

/***/ "./src/app/services/api/doacao.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/api/doacao.service.ts ***!
  \************************************************/
/*! exports provided: DoacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoacaoService", function() { return DoacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' })
};
var DoacaoService = /** @class */ (function () {
    function DoacaoService(http) {
        this.http = http;
    }
    DoacaoService.prototype.getDoacoesPorPeriodo = function (codInstituicao, startDate, endDate) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"] + "/doacao/Periodo/";
        var body = {
            codInstituicao: codInstituicao,
            startDate: startDate,
            endDate: endDate
        };
        console.log("*****BEGIN BODY***");
        console.log(body);
        console.log(body.codInstituicao);
        console.log("END BODY");
        return this.http.post(url, JSON.stringify(body), httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("Doacoes encontradas"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDoacoesPorPeriodo')));
    };
    DoacaoService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    DoacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DoacaoService);
    return DoacaoService;
}());



/***/ })

}]);
//# sourceMappingURL=resultado-relatorio-relatorio-module.js.map