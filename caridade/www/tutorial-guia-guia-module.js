(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorial-guia-guia-module"],{

/***/ "./src/app/tutorial/guia/guia.module.ts":
/*!**********************************************!*\
  !*** ./src/app/tutorial/guia/guia.module.ts ***!
  \**********************************************/
/*! exports provided: GuiaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiaPageModule", function() { return GuiaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _guia_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guia.page */ "./src/app/tutorial/guia/guia.page.ts");







var routes = [
    {
        path: '',
        component: _guia_page__WEBPACK_IMPORTED_MODULE_6__["GuiaPage"]
    }
];
var GuiaPageModule = /** @class */ (function () {
    function GuiaPageModule() {
    }
    GuiaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_guia_page__WEBPACK_IMPORTED_MODULE_6__["GuiaPage"]]
        })
    ], GuiaPageModule);
    return GuiaPageModule;
}());



/***/ }),

/***/ "./src/app/tutorial/guia/guia.page.html":
/*!**********************************************!*\
  !*** ./src/app/tutorial/guia/guia.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>guia</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tutorial/guia/guia.page.scss":
/*!**********************************************!*\
  !*** ./src/app/tutorial/guia/guia.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFsL2d1aWEvZ3VpYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tutorial/guia/guia.page.ts":
/*!********************************************!*\
  !*** ./src/app/tutorial/guia/guia.page.ts ***!
  \********************************************/
/*! exports provided: GuiaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiaPage", function() { return GuiaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuiaPage = /** @class */ (function () {
    function GuiaPage() {
    }
    GuiaPage.prototype.ngOnInit = function () {
    };
    GuiaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guia',
            template: __webpack_require__(/*! ./guia.page.html */ "./src/app/tutorial/guia/guia.page.html"),
            styles: [__webpack_require__(/*! ./guia.page.scss */ "./src/app/tutorial/guia/guia.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GuiaPage);
    return GuiaPage;
}());



/***/ })

}]);
//# sourceMappingURL=tutorial-guia-guia-module.js.map