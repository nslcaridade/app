(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resultado-watch-video-watch-video-module"],{

/***/ "./src/app/resultado/watch-video/watch-video.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/resultado/watch-video/watch-video.module.ts ***!
  \*************************************************************/
/*! exports provided: WatchVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchVideoPageModule", function() { return WatchVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _watch_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./watch-video.page */ "./src/app/resultado/watch-video/watch-video.page.ts");







var routes = [
    {
        path: '',
        component: _watch_video_page__WEBPACK_IMPORTED_MODULE_6__["WatchVideoPage"]
    }
];
var WatchVideoPageModule = /** @class */ (function () {
    function WatchVideoPageModule() {
    }
    WatchVideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_watch_video_page__WEBPACK_IMPORTED_MODULE_6__["WatchVideoPage"]]
        })
    ], WatchVideoPageModule);
    return WatchVideoPageModule;
}());



/***/ }),

/***/ "./src/app/resultado/watch-video/watch-video.page.html":
/*!*************************************************************!*\
  !*** ./src/app/resultado/watch-video/watch-video.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"content-page content-gradient\" scrollX=\"true\" scrollY=\"true\">\n  <div padding id=\"watchvideospage-layer\">\n    <form [formGroup]=\"watchVideoForm\" (ngSubmit)=\"backMenu()\" autocomplete=”off” >\n      <iframe width=\"100%\" height=\"300\" [src]=\"trustedVideoUrl\" frameborder=\"0\" allowfullscreen></iframe>\n       <h2>{{ video?.title }}</h2>\n       <ion-row align-items-center>\n        <ion-col>\n           <ion-button expand=\"block\" class=\"cta low\" color=\"white\" type=\"submit\" >Volta</ion-button>\n         </ion-col>\n       </ion-row>\n    </form>\n  </div>\n </ion-content>"

/***/ }),

/***/ "./src/app/resultado/watch-video/watch-video.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/resultado/watch-video/watch-video.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGFkby93YXRjaC12aWRlby93YXRjaC12aWRlby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/resultado/watch-video/watch-video.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/resultado/watch-video/watch-video.page.ts ***!
  \***********************************************************/
/*! exports provided: WatchVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchVideoPage", function() { return WatchVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var WatchVideoPage = /** @class */ (function () {
    function WatchVideoPage(loadingController, dom, alertController, router, route, formBuilder) {
        this.loadingController = loadingController;
        this.dom = dom;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.watchVideoForm = this.formBuilder.group({
            opt_watchVideo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
    }
    WatchVideoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.url = params['url'];
        });
        console.log("URL      :" + this.url);
        this.sanitize();
    };
    WatchVideoPage.prototype.backMenu = function () {
        this.router.navigate(['videos']);
    };
    WatchVideoPage.prototype.sanitize = function () {
        console.log(this.url);
        this.trustedVideoUrl = this.dom.bypassSecurityTrustResourceUrl(this.url);
        //this.trustedVideoUrl = this.dom.bypassSecurityTrustUrl(this.url);
    };
    WatchVideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-watch-video',
            template: __webpack_require__(/*! ./watch-video.page.html */ "./src/app/resultado/watch-video/watch-video.page.html"),
            styles: [__webpack_require__(/*! ./watch-video.page.scss */ "./src/app/resultado/watch-video/watch-video.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], WatchVideoPage);
    return WatchVideoPage;
}());



/***/ })

}]);
//# sourceMappingURL=resultado-watch-video-watch-video-module.js.map