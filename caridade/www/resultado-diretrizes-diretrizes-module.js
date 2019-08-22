(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resultado-diretrizes-diretrizes-module"],{

/***/ "./src/app/resultado/diretrizes/diretrizes.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/resultado/diretrizes/diretrizes.module.ts ***!
  \***********************************************************/
/*! exports provided: DiretrizesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiretrizesPageModule", function() { return DiretrizesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _diretrizes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diretrizes.page */ "./src/app/resultado/diretrizes/diretrizes.page.ts");







var routes = [
    {
        path: '',
        component: _diretrizes_page__WEBPACK_IMPORTED_MODULE_6__["DiretrizesPage"]
    }
];
var DiretrizesPageModule = /** @class */ (function () {
    function DiretrizesPageModule() {
    }
    DiretrizesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_diretrizes_page__WEBPACK_IMPORTED_MODULE_6__["DiretrizesPage"]]
        })
    ], DiretrizesPageModule);
    return DiretrizesPageModule;
}());



/***/ }),

/***/ "./src/app/resultado/diretrizes/diretrizes.page.html":
/*!***********************************************************!*\
  !*** ./src/app/resultado/diretrizes/diretrizes.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"content-page content-gradient\" scrollX=\"true\" scrollY=\"true\">\n  <div padding id=\"diretrizes-layer\">\n    <form [formGroup]=\"diretrizesForm\" (ngSubmit)=\"backMenu()\" autocomplete=”off” >\n      <ion-button expand=\"block\" class=\"cta\" color=\"orange\" (click)=\"openLocalPdf()\">Open Local PDF</ion-button>\n      <ion-button expand=\"block\" class=\"cta low\" color=\"white\" (click)=\"backMenu()\">Voltar</ion-button>\n    </form>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/resultado/diretrizes/diretrizes.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/resultado/diretrizes/diretrizes.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGFkby9kaXJldHJpemVzL2RpcmV0cml6ZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/resultado/diretrizes/diretrizes.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/resultado/diretrizes/diretrizes.page.ts ***!
  \*********************************************************/
/*! exports provided: DiretrizesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiretrizesPage", function() { return DiretrizesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ "./node_modules/@ionic-native/document-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var DiretrizesPage = /** @class */ (function () {
    function DiretrizesPage(platform, file, ft, fileOpener, document, router, route, formBuilder) {
        this.platform = platform;
        this.file = file;
        this.ft = ft;
        this.fileOpener = fileOpener;
        this.document = document;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.diretrizesForm = this.formBuilder.group({
            opt_diretrizes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])]
        });
    }
    DiretrizesPage.prototype.openLocalPdf = function () {
        var _this = this;
        var filePath = this.file.applicationDirectory + 'www/assets';
        if (this.platform.is('android')) {
            var fakeName = Date.now();
            this.file.copyFile(filePath, 'Diretrizes_NSL.pdf', this.file.dataDirectory, fakeName + ".pdf").then(function (result) {
                _this.fileOpener.open(result.nativeURL, 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error opening file', e); });
            });
        }
        else {
            // Use Document viewer for iOS for a better UI
            var options = {
                title: 'My PDF'
            };
            this.document.viewDocument(filePath + "/Diretrizes_NSL.pdf", 'application/pdf', options);
        }
    };
    DiretrizesPage.prototype.ngOnInit = function () {
    };
    DiretrizesPage.prototype.backMenu = function () {
        this.router.navigate(['menu']);
    };
    DiretrizesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-diretrizes',
            template: __webpack_require__(/*! ./diretrizes.page.html */ "./src/app/resultado/diretrizes/diretrizes.page.html"),
            styles: [__webpack_require__(/*! ./diretrizes.page.scss */ "./src/app/resultado/diretrizes/diretrizes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"],
            _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["DocumentViewer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], DiretrizesPage);
    return DiretrizesPage;
}());



/***/ })

}]);
//# sourceMappingURL=resultado-diretrizes-diretrizes-module.js.map