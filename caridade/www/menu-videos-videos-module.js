(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-videos-videos-module"],{

/***/ "./src/app/menu/videos/videos.module.ts":
/*!**********************************************!*\
  !*** ./src/app/menu/videos/videos.module.ts ***!
  \**********************************************/
/*! exports provided: VideosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPageModule", function() { return VideosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _videos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videos.page */ "./src/app/menu/videos/videos.page.ts");







var routes = [
    {
        path: '',
        component: _videos_page__WEBPACK_IMPORTED_MODULE_6__["VideosPage"]
    }
];
var VideosPageModule = /** @class */ (function () {
    function VideosPageModule() {
    }
    VideosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_videos_page__WEBPACK_IMPORTED_MODULE_6__["VideosPage"]]
        })
    ], VideosPageModule);
    return VideosPageModule;
}());



/***/ }),

/***/ "./src/app/menu/videos/videos.page.html":
/*!**********************************************!*\
  !*** ./src/app/menu/videos/videos.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"content-page content-gradient\" scrollX=\"true\" scrollY=\"true\">\n  <!--<ion-content padding class=MeusDadosPage scroll=”false”>-->\n  <div padding id=\"videospage-layer\">\n    <form [formGroup]=\"videoForm\" (ngSubmit)=\"sanitize()\" autocomplete=”off” >\n      <ion-grid>\n        <ion-list>\n          <label><h5>Videos:</h5></label>\n          <ion-item *ngFor=\"let video of videos_\">\n             <ion-button class=\"footer-button\" color=\"white\" expand=\"full\" (click)=\"showVideo(video.url)\">\n             <h5>{{ video.titulo }}</h5></ion-button>\n          </ion-item>\n        </ion-list>\n      </ion-grid>\n      <ion-grid>\n        <ion-row align-items-center>\n          <ion-col>\n            <ion-button expand=\"block\" class=\"cta low\" color=\"white\" (click)=\"backMenu()\">Voltar</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n </ion-content>"

/***/ }),

/***/ "./src/app/menu/videos/videos.page.scss":
/*!**********************************************!*\
  !*** ./src/app/menu/videos/videos.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe:focus {\n  outline: none; }\n\niframe[seamless] {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS92aWRlb3MvQzpcXFVzZXJzXFxhbGV4YW5kcmUuZHVhcnRlXFxlc3R1ZG9cXGFwcFxcY2FyaWRhZGUvc3JjXFxhcHBcXG1lbnVcXHZpZGVvc1xcdmlkZW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lbnUvdmlkZW9zL3ZpZGVvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpZnJhbWU6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaWZyYW1lW3NlYW1sZXNzXSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/menu/videos/videos.page.ts":
/*!********************************************!*\
  !*** ./src/app/menu/videos/videos.page.ts ***!
  \********************************************/
/*! exports provided: VideosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPage", function() { return VideosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _commons_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../commons/util */ "./src/app/commons/util.ts");
/* harmony import */ var _services_api_videos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/videos.service */ "./src/app/services/api/videos.service.ts");







var VideosPage = /** @class */ (function () {
    function VideosPage(loadingController, alertController, router, route, videoAPI, formBuilder, util) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.videoAPI = videoAPI;
        this.formBuilder = formBuilder;
        this.util = util;
        this.docPattern = '([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})';
        this.videoForm = this.formBuilder.group({
            selecionado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.docPattern)])]
        });
        //this.util.presentLoading();
    }
    VideosPage.prototype.ngOnInit = function () {
        this.videosList();
    };
    VideosPage.prototype.videosList = function () {
        var _this = this;
        this.videoAPI.getAllVideos()
            .subscribe(function (listvd) {
            _this.videos_ = JSON.parse(JSON.stringify(listvd.ltVideos));
            console.log(listvd.ltVideos);
        }, function (err) {
        });
    };
    VideosPage.prototype.showVideo = function (url_selecionada) {
        console.log(url_selecionada);
        this.router.navigate(['watch-video',
            { url: url_selecionada }]);
    };
    VideosPage.prototype.backMenu = function () {
        this.router.navigate(['menu']);
    };
    VideosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.page.html */ "./src/app/menu/videos/videos.page.html"),
            styles: [__webpack_require__(/*! ./videos.page.scss */ "./src/app/menu/videos/videos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_api_videos_service__WEBPACK_IMPORTED_MODULE_6__["VideosService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _commons_util__WEBPACK_IMPORTED_MODULE_5__["Util"]])
    ], VideosPage);
    return VideosPage;
}());



/***/ }),

/***/ "./src/app/services/api/videos.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/api/videos.service.ts ***!
  \************************************************/
/*! exports provided: VideosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosService", function() { return VideosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _commons_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commons/util */ "./src/app/commons/util.ts");







var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var VideosService = /** @class */ (function () {
    function VideosService(http, util) {
        this.http = http;
        this.util = util;
    }
    VideosService.prototype.getAllVideos = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"] + "/ListVideos/Todos";
        this.trustedVideoUrl = this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("Recebido Lista de videos"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getAllVideos")));
        return this.trustedVideoUrl;
    };
    VideosService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    VideosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _commons_util__WEBPACK_IMPORTED_MODULE_6__["Util"]])
    ], VideosService);
    return VideosService;
}());



/***/ })

}]);
//# sourceMappingURL=menu-videos-videos-module.js.map