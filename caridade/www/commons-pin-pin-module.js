(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commons-pin-pin-module"],{

/***/ "./src/app/commons/pin/pin.module.ts":
/*!*******************************************!*\
  !*** ./src/app/commons/pin/pin.module.ts ***!
  \*******************************************/
/*! exports provided: PinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPageModule", function() { return PinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pin.page */ "./src/app/commons/pin/pin.page.ts");







var routes = [
    {
        path: '',
        component: _pin_page__WEBPACK_IMPORTED_MODULE_6__["PinPage"]
    }
];
var PinPageModule = /** @class */ (function () {
    function PinPageModule() {
    }
    PinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pin_page__WEBPACK_IMPORTED_MODULE_6__["PinPage"]]
        })
    ], PinPageModule);
    return PinPageModule;
}());



/***/ }),

/***/ "./src/app/commons/pin/pin.page.html":
/*!*******************************************!*\
  !*** ./src/app/commons/pin/pin.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>pin</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/commons/pin/pin.page.scss":
/*!*******************************************!*\
  !*** ./src/app/commons/pin/pin.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbnMvcGluL3Bpbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/commons/pin/pin.page.ts":
/*!*****************************************!*\
  !*** ./src/app/commons/pin/pin.page.ts ***!
  \*****************************************/
/*! exports provided: PinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPage", function() { return PinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PinPage = /** @class */ (function () {
    function PinPage() {
    }
    PinPage.prototype.ngOnInit = function () {
    };
    PinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pin',
            template: __webpack_require__(/*! ./pin.page.html */ "./src/app/commons/pin/pin.page.html"),
            styles: [__webpack_require__(/*! ./pin.page.scss */ "./src/app/commons/pin/pin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PinPage);
    return PinPage;
}());



/***/ })

}]);
//# sourceMappingURL=commons-pin-pin-module.js.map