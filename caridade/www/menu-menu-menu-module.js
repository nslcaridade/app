(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-menu-module"],{

/***/ "./src/app/menu/menu/menu.module.ts":
/*!******************************************!*\
  !*** ./src/app/menu/menu/menu.module.ts ***!
  \******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/menu.service */ "./src/app/services/api/menu.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu/menu.page.ts");








var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_7__["MenuPage"]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_7__["MenuPage"]],
            providers: [
                _services_api_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]
            ]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/menu/menu/menu.page.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu/menu.page.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"content-page content-gradient\" scrollX=\"true\" scrollY=\"true\">\n    <div>\n      <ion-row >\n        <ion-col size=\"5\">\n        <ion-toolbar color=\"blue\">\n          <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n        </ion-toolbar>\n        </ion-col>\n        <ion-col>\n          <ion-avatar>\n            <!--<img src=\"../../assets/img/pier_giorgio.jpg\" width=\"150px\" height=\"150px\">-->\n            <img src=\"../../assets/img/pier_desenho.jpg\" width=\"150px\" height=\"150px\">\n          </ion-avatar>\n        </ion-col>\n      </ion-row>\n      <ion-row >\n        <ion-col>\n\t\t\t\t\t<ion-text><h3>{{customTextMenu}}</h3></ion-text>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-menu>\n      <ion-content>\n        <ion-list lines=\"full\">\n          <ion-row align-items-center>\n            <ion-col size=\"4\">\n              <ion-item href=\"https://nslcaridade.com.br/caridade/\">\n                <img src=\"../../assets/img/logo_nsl.png\" width=\"35px\" height=\"35px\">\n              </ion-item>\n            </ion-col>\n            <ion-col></ion-col>\n            <ion-col size=\"4\" align-items-right>\n              <ion-item href=\"http://www.lourdesalpha.com.br/\">\n                <img src=\"../../assets/img/nsl_site.png\" width=\"40px\" height=\"40px\">\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-button expand=\"full\" color=\"white\" (click)=\"meusDados()\"><h5>Meus dados</h5></ion-button>\n          <ion-button expand=\"full\" color=\"white\" (click)=\"instutitions()\"><h5>Instituições</h5></ion-button>\n          <ion-button expand=\"full\" color=\"white\" (click)=\"relatorioDoacoes()\"><h5>Relatórios de doações</h5></ion-button>\n          <ion-button expand=\"full\" color=\"white\" (click)=\"diretrizes()\"><h5>Diretrizes</h5></ion-button>\n          <ion-button expand=\"full\" color=\"white\" (click)=\"bazar()\"><h5>Bazar</h5></ion-button>\n          <ion-button expand=\"full\" color=\"white\" (click)=\"videos()\"><h5>Videos</h5></ion-button>\n          <ion-button expand=\"full\" color=\"white\" (click)=\"tutorial()\"><h5>Tutorial</h5></ion-button>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n  <ion-router-outlet main></ion-router-outlet>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/menu/menu/menu.page.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu/menu.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-custom-menu {\n  --width: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51L0M6XFxVc2Vyc1xcYWxleGFuZHJlLmR1YXJ0ZVxcZXN0dWRvXFxhcHBcXGNhcmlkYWRlL3NyY1xcYXBwXFxtZW51XFxtZW51XFxtZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tbWVudSB7XHJcbiAgLS13aWR0aDogNTAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/menu/menu/menu.page.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu/menu.page.ts ***!
  \****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/database/database.service */ "./src/app/services/database/database.service.ts");







var MenuPage = /** @class */ (function () {
    function MenuPage(alertController, router, route, formBuilder, dataBase, platform) {
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.dataBase = dataBase;
        this.platform = platform;
        this.mensagem = '';
        console.log('Passo 1');
        this.image = "../../assets/img/pier_giorgio.jpg";
        // API GET
        this.carregaMemoria();
        this.menuForm = this.formBuilder.group({
            opt_menu: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
        //this.institutionForm.valueChanges.subscribe(data=>this.institutionOnDataChange(data));
    }
    MenuPage.prototype.carregaMemoria = function () {
        var _this = this;
        console.log("localizando no store");
        this.dataBase.getValue('MSG').then(function (data) {
            console.log(data);
            for (var index = 0; index < data.length; index++) {
                var element = data[index];
                if (data !== null && element.tipo === 'menu') {
                    _this.customTextMenu = JSON.parse(JSON.stringify(element.texto));
                    console.log("DEBUG - mensagem:" + element);
                }
            }
        });
    };
    MenuPage.prototype.meusDados = function () {
        this.router.navigate(['meus-dados']);
    };
    MenuPage.prototype.instutitions = function () {
        this.router.navigate(['institution']);
    };
    MenuPage.prototype.relatorioDoacoes = function () {
        this.router.navigate(['relatorio-doacao']);
    };
    MenuPage.prototype.diretrizes = function () {
        this.router.navigate(['diretrizes']);
    };
    MenuPage.prototype.bazar = function () {
        this.router.navigate(['bazar']);
    };
    MenuPage.prototype.videos = function () {
        this.router.navigate(['videos']);
    };
    MenuPage.prototype.tutorial = function () {
        this.router.navigate(['tutorial']);
    };
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.idUsuario = +params['id'];
        });
        console.log('id: ', this.idUsuario);
    };
    MenuPage.prototype.exitApp = function () {
        this.platform.pause;
    };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/menu/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_database_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-menu-menu-module.js.map