(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorial-tutorial-tutorial-module"],{

/***/ "./src/app/tutorial/tutorial/tutorial.module.ts":
/*!******************************************************!*\
  !*** ./src/app/tutorial/tutorial/tutorial.module.ts ***!
  \******************************************************/
/*! exports provided: TutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/tutorial/tutorial/tutorial.page.ts");







var routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]
    }
];
var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial/tutorial.page.html":
/*!******************************************************!*\
  !*** ./src/app/tutorial/tutorial/tutorial.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"content-page\" scrollX=\"true\" scrollY=\"true\">\n <form [formGroup]=\"tutorialForm\">\n  <ion-slides pager=\"true\" #slidesTour>\n    <ion-slide>\n\t  <div class=\"page\">\n        <div class=\"header\">\n\t      <h5>Seguindo os passos do Senhor</h5>\n\t\t  <h1>Amor ao próximo</h1>\n\t    </div>\n\t    <div class=\"main tour\">\n\t      <ion-img src=\"/assets/slides/tour/forca_pier.svg\"></ion-img>\n\t\t  <p class=\"ion-text-justify\">{{texto1}}</p>\n\t    </div>\n\t    <div class=\"footer\">\n\t      <ion-button color=\"body\" fill=\"outline\" (click)=\"backMenu()\">Menu</ion-button>\n\t      <ion-button color=\"primary\" fill=\"outline\" (click)=\"next()\">Próximo</ion-button>\n\t    </div>\n\t  </div>\n    </ion-slide>\n\t<ion-slide>\n\t  <div class=\"page\">\n\t    <div class=\"header\">\n\t      <h5>Pastoral</h5>\n\t      <h1>Uma familia a servico</h1>\n\t    </div>\n\t    <div class=\"main tour\">\n\t\t  <ion-img src=\"/assets/slides/tour/pier_nos_aguarda.svg\"></ion-img>\n\t      <p class=\"ion-text-justify\">{{texto2}}</p>\n\t    </div>\n\t    <div class=\"footer\">\n\t\t  <ion-button color=\"body\" fill=\"outline\" (click)=\"backMenu()\">Menu</ion-button>\n\t      <ion-button color=\"primary\" fill=\"outline\" (click)=\"next()\">Próximo</ion-button>\n\t    </div>\n\t  </div>\n\t</ion-slide>\n\t<ion-slide>\n\t  <div class=\"page\">\n\t    <div class=\"header\">\n\t\t  <h5>Caridade o chamado do amor</h5>\n\t\t  <h1>Seguindo os passos do Senhor</h1>\n\t\t</div>\n\t\t<div class=\"main tour\">\n\t\t  <ion-img src=\"/assets/slides/tour/para_o_alto.svg\"></ion-img>\n\t\t  <p class=\"ion-text-justify\">{{texto3}}</p>\n\t\t</div>\n\t\t<div class=\"footer\">\n          <ion-button expand=\"block\" class=\"cta low\" color=\"orange\" (click)=\"backMenu()\" >Menu</ion-button>\n\t\t</div>\n\t  </div>\n\t</ion-slide>\n  </ion-slides>\n </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/tutorial/tutorial/tutorial.page.scss":
/*!******************************************************!*\
  !*** ./src/app/tutorial/tutorial/tutorial.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsL3R1dG9yaWFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tutorial/tutorial/tutorial.page.ts":
/*!****************************************************!*\
  !*** ./src/app/tutorial/tutorial/tutorial.page.ts ***!
  \****************************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var TutorialPage = /** @class */ (function () {
    function TutorialPage(router, alertController, formBuilder, dataBase, route) {
        this.router = router;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.dataBase = dataBase;
        this.route = route;
        this.slideOpts = {
            effect: "flip"
        };
        this.carregaMemoria();
        this.tutorialForm = this.formBuilder.group({
            opt_tutorial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
        });
    }
    TutorialPage.prototype.next = function () {
        this.slides.slideNext();
    };
    TutorialPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
        });
        console.log('[Input] id: ', this.id);
        console.log('[Input] type: ', this.type);
    };
    TutorialPage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TutorialPage.prototype.loadMessage = function () {
    };
    TutorialPage.prototype.carregaMemoria = function () {
        var _this = this;
        console.log("localizando no store");
        this.dataBase.getValue('MSG').then(function (data) {
            console.log(data);
            for (var index = 0; index < data.length; index++) {
                var element = data[index];
                if (element !== null && element.tipo === 'tur1') {
                    _this.texto1 = JSON.parse(JSON.stringify(element.texto));
                }
                else if (element !== null && element.tipo === 'tur2') {
                    _this.texto2 = JSON.parse(JSON.stringify(element.texto));
                }
                else if (element !== null && element.tipo === 'tur3') {
                    _this.texto3 = JSON.parse(JSON.stringify(element.texto));
                }
            }
        });
    };
    TutorialPage.prototype.backMenu = function () {
        console.log('Fim do Tutorial -> Signing');
        this.router.navigate(['menu']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slidesTour"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.page.html */ "./src/app/tutorial/tutorial/tutorial.page.html"),
            styles: [__webpack_require__(/*! ./tutorial.page.scss */ "./src/app/tutorial/tutorial/tutorial.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TutorialPage);
    return TutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=tutorial-tutorial-tutorial-module.js.map