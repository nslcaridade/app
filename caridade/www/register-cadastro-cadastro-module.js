(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-cadastro-cadastro-module"],{

/***/ "./node_modules/br-mask/dist/app.module.js":
/*!*************************************************!*\
  !*** ./node_modules/br-mask/dist/app.module.js ***!
  \*************************************************/
/*! exports provided: BrMaskerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrMaskerModule", function() { return BrMaskerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_br_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/br-mask */ "./node_modules/br-mask/dist/directives/br-mask.js");



var BrMaskerModule = (function () {
    function BrMaskerModule() {
    }
    return BrMaskerModule;
}());

BrMaskerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [
                    _directives_br_mask__WEBPACK_IMPORTED_MODULE_2__["BrMaskDirective"]
                ],
                exports: [
                    _directives_br_mask__WEBPACK_IMPORTED_MODULE_2__["BrMaskDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            },] },
];
/** @nocollapse */
BrMaskerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./node_modules/br-mask/dist/directives/br-mask.js":
/*!*********************************************************!*\
  !*** ./node_modules/br-mask/dist/directives/br-mask.js ***!
  \*********************************************************/
/*! exports provided: BrMaskModel, BrMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrMaskModel", function() { return BrMaskModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrMaskDirective", function() { return BrMaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


var BrMaskModel = (function () {
    function BrMaskModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
        this.moneyInitHasInt = true;
    }
    return BrMaskModel;
}());

var BrMaskDirective = (function () {
    function BrMaskDirective(controlContainer, elementRef) {
        this.controlContainer = controlContainer;
        this.elementRef = elementRef;
        this.brmasker = new BrMaskModel();
    }
    /**
    * Event key up in directive
    * @author Antonio Marques <tmowna@gmail.com>
    * @constant {string} value
    */
    BrMaskDirective.prototype.inputKeyup = function (event) {
        var value = this.returnValue(event.target.value);
        this.setValueInFormControl(value);
    };
    BrMaskDirective.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (this.brmasker.moneyInitHasInt === undefined) {
            this.brmasker.moneyInitHasInt = true;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
        if (this.controlContainer) {
            if (this.formControlName) {
                this.brmasker.form = this.controlContainer.control.get(this.formControlName);
            }
            else {
                console.warn('Missing FormControlName directive from host element of the component');
            }
        }
        else {
            console.warn('Can\'t find parent FormGroup directive');
        }
        this.initialValue();
    };
    BrMaskDirective.prototype.initialValue = function () {
        var value = this.returnValue(this.elementRef.nativeElement.value);
        this.setValueInFormControl(value);
    };
    /**
    * The verification of form
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.verifyFormControl()</caption>
    * @returns {boolean} return a boolean value
    */
    BrMaskDirective.prototype.verifyFormControl = function () {
        if (this.brmasker.form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
    * Set Value em FormControl
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.setValueInFormControl(string)</caption>
    */
    BrMaskDirective.prototype.setValueInFormControl = function (value) {
        if (!this.verifyFormControl()) {
            this.elementRef.nativeElement.value = value;
            return;
        }
        this.brmasker.form.setValue(value);
        this.brmasker.form.updateValueAndValidity();
    };
    /**
    * For initial value
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.setValueInFormControl(string, model)</caption>
    * @param {string} value
    * @param {BrMaskModel} config
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.phoneNotDDD) {
            return this.phoneNotDDDMask(value);
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (this.brmasker.userCaracters) {
            return this.usingSpecialCharacters(value, this.brmasker.mask, this.brmasker.len);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    /**
    * For initial value percent
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValuePercent(string)</caption>
    * @param {string} value
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    /**
    * For initial value person
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValuePerson(string)</caption>
    * @param {string} value
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    /**
    * For initial value money
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.writeValueMoney(string, model)</caption>
    * @param {string} value
    * @param {BrMaskModel} value
    * @returns {string} mask intial value
    */
    BrMaskDirective.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        return this.moneyMask(value, config);
    };
    /**
    * Here is one of the main functions
    * responsible for identifying the type of mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.returnValue(string)</caption>
    * @param {string} value
    * @returns {string} mask value
    */
    BrMaskDirective.prototype.returnValue = function (value) {
        if (!this.brmasker.mask) {
            this.brmasker.mask = '';
        }
        if (value) {
            var formValue = value;
            if (this.brmasker.type === 'alfa') {
                formValue = formValue.replace(/\d/gi, '');
            }
            if (this.brmasker.type === 'num') {
                formValue = formValue.replace(/\D/gi, '');
            }
            if (this.brmasker.money) {
                return this.moneyMask(this.onInput(formValue), this.brmasker);
            }
            if (this.brmasker.phone) {
                return this.phoneMask(formValue);
            }
            if (this.brmasker.phoneNotDDD) {
                return this.phoneNotDDDMask(formValue);
            }
            if (this.brmasker.person) {
                return this.peapollMask(formValue);
            }
            if (this.brmasker.percent) {
                return this.percentMask(formValue);
            }
            if (this.brmasker.numberAndTousand) {
                return this.thousand(formValue);
            }
            if (this.brmasker.userCaracters) {
                return this.usingSpecialCharacters(formValue, this.brmasker.mask, this.brmasker.len);
            }
            return this.onInput(formValue);
        }
        else {
            return '';
        }
    };
    /**
    * Here we have a mask for percentage
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.percentMask(string)</caption>
    * @param {string} value
    * @returns {string} string percentage
    */
    BrMaskDirective.prototype.percentMask = function (value) {
        var tmp = value;
        tmp = tmp.replace(/\D/gi, '');
        tmp = tmp.replace(/%/gi, '');
        tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
        return tmp;
    };
    /**
    * Here we have a mask for phone in 8 digits or 9 digits
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.phoneMask(string)</caption>
    * @param {string} value
    * @returns {string} string phone
    */
    BrMaskDirective.prototype.phoneMask = function (value) {
        var formValue = value;
        if (formValue.length > 14) {
            this.brmasker.len = 15;
            this.brmasker.mask = '(99) 99999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1 $2');
            formValue = formValue.replace(/(\d{5})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '(99) 9999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1 $2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(formValue);
    };
    /**
    * Here we have a mask for phone in 8 digits or 9 digits not ddd
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.phoneMask(string)</caption>
    * @param {string} value
    * @returns {string} string phone
    */
    BrMaskDirective.prototype.phoneNotDDDMask = function (value) {
        var formValue = value;
        if (formValue.length > 9) {
            this.brmasker.len = 10;
            this.brmasker.mask = '99999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{5})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 9;
            this.brmasker.mask = '9999-9999';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1-$2');
            formValue = formValue.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(formValue);
    };
    /**
    * Here we have a mask for peapoll ID
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.peapollMask(string)</caption>
    * @param {string} value
    * @returns {string} string ID
    */
    BrMaskDirective.prototype.peapollMask = function (value) {
        var formValue = value;
        if (formValue.length > 14) {
            this.brmasker.len = 18;
            this.brmasker.mask = '99.999.999/9999-99';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{2})(\d)/gi, '$1.$2');
            formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
            formValue = formValue.replace(/(\d{3})(\d)/gi, '$1/$2');
            formValue = formValue.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
            formValue = formValue.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '999.999.999-99';
            formValue = formValue.replace(/\D/gi, '');
            formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
            formValue = formValue.replace(/(\d{3})(\d)/gi, '$1.$2');
            formValue = formValue.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
        }
        return this.onInput(formValue);
    };
    /**
    * Here we have a mask for money mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.moneyMask(string)</caption>
    * @param {string} value
    * @param {BrMaskModel} config
    * @returns {string} string money
    */
    BrMaskDirective.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp('([0-9]{' + decimal + '})$', 'g'), config.decimalCaracter + '$1');
        if (value.length === 1 && !this.brmasker.moneyInitHasInt) {
            var dec = Array(decimal - 1).fill(0);
            return "0" + config.decimalCaracter + dec.join('') + value;
        }
        if (value.length === decimal + 1) {
            return '0' + value;
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1);
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            var valueOne = "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)";
            value = value.replace(new RegExp("" + valueOne, "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            var valueTwo = "([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)";
            value = value.replace(new RegExp("" + valueTwo, "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    /**
    * Responsible for returning the empty mask
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.onInput(string)</caption>
    * @param {string} value
    * @returns {string} value
    */
    BrMaskDirective.prototype.onInput = function (value) {
        return this.formatField(value, this.brmasker.mask, this.brmasker.len);
    };
    /**
    * Responsible for special characters
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.usingSpecialCharacters(string)</caption>
    * @param {string} field
    * @param {string} mask
    * @param {number} size
    * @returns {string} value
    */
    BrMaskDirective.prototype.usingSpecialCharacters = function (field, mask, size) {
        if (!size) {
            size = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = field.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var sizeMascara = campoSoNumeros.length;
        for (var i = 0; i < sizeMascara; i++) {
            if (i < size) {
                boleanoMascara = ((mask.charAt(i) === '-') || (mask.charAt(i) === '.') || (mask.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += mask.charAt(i);
                    sizeMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    /**
    * Responsible formating number
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.thousand(string)</caption>
    * @param {string} value
    */
    BrMaskDirective.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        if (thousands) {
            return thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        }
    };
    /**
    * Responsible for removing special characters
    * @author Antonio Marques <tmowna@gmail.com>
    * @example <caption>this.formatField(string)</caption>
    * @param {string} field
    * @param {string} mask
    * @param {number} size
    * @returns {string} value
    */
    BrMaskDirective.prototype.formatField = function (field, mask, size) {
        if (!size) {
            size = 99999999999;
        }
        var boleanoMascara;
        var exp = /\_|\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = field.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < size) {
                boleanoMascara = (mask.charAt(i) === '-') || (mask.charAt(i) === '.') || (mask.charAt(i) === '/');
                boleanoMascara = boleanoMascara || mask.charAt(i) === '_';
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === '(') || (mask.charAt(i) === ')') || (mask.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === ',') || (mask.charAt(i) === '*') || (mask.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === '@') || (mask.charAt(i) === '#') || (mask.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((mask.charAt(i) === '$') || (mask.charAt(i) === '&') || (mask.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += mask.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskDirective;
}());

BrMaskDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[brmasker]'
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
BrMaskDirective.ctorParameters = function () { return [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
BrMaskDirective.propDecorators = {
    'brmasker': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'formControlName': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'inputKeyup': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] },],
};
//# sourceMappingURL=br-mask.js.map

/***/ }),

/***/ "./node_modules/br-mask/dist/directives/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/br-mask/dist/directives/index.js ***!
  \*******************************************************/
/*! exports provided: BrMaskModel, BrMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _br_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./br-mask */ "./node_modules/br-mask/dist/directives/br-mask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskModel", function() { return _br_mask__WEBPACK_IMPORTED_MODULE_0__["BrMaskModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskDirective", function() { return _br_mask__WEBPACK_IMPORTED_MODULE_0__["BrMaskDirective"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/br-mask/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/br-mask/dist/index.js ***!
  \********************************************/
/*! exports provided: BrMaskerModule, BrMaskModel, BrMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ "./node_modules/br-mask/dist/app.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskerModule", function() { return _app_module__WEBPACK_IMPORTED_MODULE_0__["BrMaskerModule"]; });

/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ "./node_modules/br-mask/dist/directives/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskModel", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["BrMaskModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrMaskDirective", function() { return _directives__WEBPACK_IMPORTED_MODULE_1__["BrMaskDirective"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/register/cadastro/cadastro.module.ts":
/*!******************************************************!*\
  !*** ./src/app/register/cadastro/cadastro.module.ts ***!
  \******************************************************/
/*! exports provided: CadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro.page */ "./src/app/register/cadastro/cadastro.page.ts");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api/register.service */ "./src/app/services/api/register.service.ts");
/* harmony import */ var _commons_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../commons/util */ "./src/app/commons/util.ts");
/* harmony import */ var br_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! br-mask */ "./node_modules/br-mask/dist/index.js");










var routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]
    }
];
var CadastroPageModule = /** @class */ (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                br_mask__WEBPACK_IMPORTED_MODULE_9__["BrMaskerModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]],
            providers: [
                _services_api_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"],
                _commons_util__WEBPACK_IMPORTED_MODULE_8__["Util"]
            ]
            /*schemas: [
                  CUSTOM_ELEMENTS_SCHEMA,
                  NO_ERRORS_SCHEMA
            ]*/
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());



/***/ }),

/***/ "./src/app/register/cadastro/cadastro.page.html":
/*!******************************************************!*\
  !*** ./src/app/register/cadastro/cadastro.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=”CadastroPage” scroll=”false”>\n  <div padding id=\"user-layer\">\n    <form [formGroup]=\"cadastroForm\" (ngSubmit)=\"logForm()\" autocomplete=”off” >\n      <ion-row align-items-center>\n        <ion-col>\n          <h5>Vamos Continuar ?</h5>\n          <ion-avatar>\n            <ion-img src=\"/assets/slides/tour/tour-green.svg\"></ion-img>\n          </ion-avatar>\n          <ion-note color=\"medium\">\n            <p class=\"ion-text-justify\">O email informado é de grande utilidade, podemos enviar informações relevante da Pastoral.</p>\n          </ion-note>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item class=\"input-item\">\n              <ion-input type=\"phone\" placeholder=\"CELULAR (XX)XXXXX-XXXX\" formControlName=\"telefone\" [brmasker]=\"{form: cadastroForm.get('telefone'), mask: '(99)99999-9999'}\"></ion-input>\n\t\t\t\t\t\t<!--<ion-input type=\"phone\" placeholder=\"celular: (99) 9999-9999\" (keyup)=\"formatarCelular()\" formControlName=\"telefone\" required></ion-input>-->\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item class=\"input-item\">\n            <ion-datetime display-format=\"DD MMM\" monthShortNames=\"Jan, Feb, Mar, Apr, Mai, Jun, Jul, Aug, Sep, Out, Nov, Des\" placeholder=\"Dia e mês do nascimento\" formControlName=\"data_nacimento\" required></ion-datetime>\n          </ion-item>\n          <ion-item><ion-label><h5>Dia da acolhida</h5></ion-label>\n            <ion-select multiple=\"false\" cancelText=\"Cancela\" okText=\"Selecione\" formControlName=\"dia_acolhida\" required>\n              <ion-select-option *ngFor=\"let dia of dia_\" value=\"{{dia.opcao}}\">{{dia.opcao}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item><ion-label><h5>Semana da escala</h5></ion-label>\n            <ion-select multiple=\"false\" cancelText=\"Cancela\" okText=\"Selecione\" formControlName=\"semana_escala\" required>\n              <ion-select-option *ngFor=\"let semana of semana_\" value=\"{{semana.opcao}}\">{{semana.opcao}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n\t\t\t\t\t<ion-button expand=\"block\" class=\"cta\" color=\"orange\" type=\"submit\" [disabled]=\"!cadastroForm.valid\">Finalizar</ion-button>\n\t\t\t\t\t<ion-button expand=\"block\" class=\"cta low\" fill=\"outline\" color=\"body\" href=\"start\">Cancelar</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/cadastro/cadastro.page.scss":
/*!******************************************************!*\
  !*** ./src/app/register/cadastro/cadastro.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  margin: auto; }\n\n.ios user-page scroll-content, .md user-page scroll-content {\n  background-color: #42c7ff;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden; }\n\n.ios user-page img, .md user-page img {\n  width: 50%;\n  height: auto;\n  margin: 0 auto; }\n\n.ios user-page #userLayer, .md user-page #userLayer {\n  background-image: url(\"/assets/img/background.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.ios user-page ion-row, .md user-page ion-row {\n  align-items: center;\n  text-align: center; }\n\n.ios user-page ion-item, .md user-page ion-item {\n  border-radius: 30px !important;\n  padding-left: 10px !important;\n  margin-bottom: 10px;\n  background-color: #f6f6f6;\n  opacity: 0.7;\n  font-size: 0.9em; }\n\n.ios user-page ion-list, .md user-page ion-list {\n  margin: 0; }\n\n.ios user-page .user.button, .md user-page .user.button {\n  width: 100%;\n  border-radius: 30px;\n  font-size: 0.9em;\n  border: 1px solid #fff;\n  background-color: #39acdc; }\n\n.ios user-page .user-container, .md user-page .user-container {\n  border-radius: 10px;\n  opacity: 0.8;\n  width: 80%;\n  text-align: center;\n  background-color: white; }\n\n.ios user-page .user-logo, .md user-page .user-logo {\n  vertical-align: center;\n  text-align: center; }\n\n.ios user-page .user-form, .md user-page .user-form {\n  opacity: none !important; }\n\n.ios user-page .container, .md user-page .container {\n  margin-top: 1.5rem;\n  background: rgba(2, 60, 117, 0.5);\n  border-radius: 5px;\n  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);\n  width: 409px;\n  display: flex;\n  flex-direction: column; }\n\n.ios user-page .logo, .md user-page .logo {\n  align-items: center;\n  justify-content: center;\n  padding: 20px 20px 0;\n  width: 25%;\n  height: 50%; }\n\n.ios user-page .card-text, .md user-page .card-text {\n  margin-top: 5px;\n  text-align: center;\n  font-family: \"museo-slab\";\n  font-size: 16px; }\n\n.ios user-page .div-btn, .md user-page .div-btn {\n  color: white;\n  padding: 20px 20px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.ios user-page button.btn, .ios user-page buttoni.btn, .md user-page button.btn, .md user-page buttoni.btn {\n  background-color: #4a90e2;\n  color: white;\n  text-align: center; }\n\n.ios user-page .btn.btn-step, .md user-page .btn.btn-step {\n  border-radius: 3px;\n  padding: 10px 10px 10px 10px;\n  display: block;\n  height: inherit;\n  width: 100%;\n  background: linear-gradient(to bottom, #4a90e2 0%, #4ab6e2 100%);\n  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.7), inset 0 2px 0 -1px rgba(98, 98, 98, 0.5), 0 3px 7px -3px rgba(0, 0, 0, 0.7); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvY2FkYXN0cm8vQzpcXFVzZXJzXFxhbGV4YW5kcmUuZHVhcnRlXFxlc3R1ZG9cXGFwcFxcY2FyaWRhZGUvc3JjXFxhcHBcXHJlZ2lzdGVyXFxjYWRhc3Ryb1xcY2FkYXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBS00seUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBUnRCO0VBWU0sVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBZHBCO0VBa0JLLG1EQUFtRDtFQUNuRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBOztBQXJCakM7RUF5Qk0sbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQTFCeEI7RUE4Qk0sOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFuQ3RCO0VBdUNNLFNBQVMsRUFBQTs7QUF2Q2Y7RUEyQ00sV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHlCQUF5QixFQUFBOztBQS9DL0I7RUFtRFMsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQXZEaEM7RUEwRFUsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQTNENUI7RUE4RFUsd0JBQXVCLEVBQUE7O0FBOURqQztFQWtFTSxrQkFBa0I7RUFDbEIsaUNBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQiwwQ0FBMkM7RUFDM0MsWUFBVztFQUNYLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUF4RTVCO0VBNEVNLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLFVBQVM7RUFDVCxXQUFVLEVBQUE7O0FBaEZoQjtFQW9GTSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFjLEVBQUE7O0FBdkZwQjtFQTJGTSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBL0Y3QjtFQW1HTSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQXJHeEI7RUF5R00sa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZUFBYztFQUNkLFdBQVc7RUFDWCxnRUFBZ0U7RUFDaEUscUhBQXFILEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9jYWRhc3Ryby9jYWRhc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFye1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmlvcywgLm1kIHtcclxuXHJcbiAgdXNlci1wYWdlIHtcclxuXHJcbiAgICBzY3JvbGwtY29udGVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MmM3ZmY7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAjdXNlckxheWVyIHtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnJyk7XHJcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tcm93IHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VyLmJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2RjO1xyXG4gICAgfVxyXG5cclxuICAgICAudXNlci1jb250YWluZXIge1xyXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLnVzZXItbG9nb3tcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLnVzZXItZm9ybXtcclxuICAgICAgICAgIG9wYWNpdHk6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMiwgNjAsIDExNywgMC41KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDEuNXB4IDAgMCAgICAgcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICB3aWR0aDo0MDlweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwO1xyXG4gICAgICB3aWR0aDoyNSU7XHJcbiAgICAgIGhlaWdodDo1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtdGV4dHtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIm11c2VvLXNsYWJcIjtcclxuICAgICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1idG57XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMjBweCAyMHB4IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5idG4sIGJ1dHRvbmkuYnRuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRhOTBlMjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi5idG4tc3RlcHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OmluaGVyaXQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNGE5MGUyIDAlLCAjNGFiNmUyIDEwMCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjcpLCBpbnNldCAwIDJweCAwIC0xcHggcmdiYSg5OCwgOTgsIDk4LCAwLjUpLCAwIDNweCA3cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/cadastro/cadastro.page.ts":
/*!****************************************************!*\
  !*** ./src/app/register/cadastro/cadastro.page.ts ***!
  \****************************************************/
/*! exports provided: CadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPage", function() { return CadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/register.service */ "./src/app/services/api/register.service.ts");
/* harmony import */ var _commons_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commons/util */ "./src/app/commons/util.ts");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/database/database.service */ "./src/app/services/database/database.service.ts");








// import { LocalcadastroService, cadastro } from '../../services/database/localcadastro.service'
var CadastroPage = /** @class */ (function () {
    function CadastroPage(loadingController, alertController, router, route, formBuilder, registerAPI, dataBase, util) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.registerAPI = registerAPI;
        this.dataBase = dataBase;
        this.util = util;
        this.telefone = '';
        this.data_nacimento = '';
        this.dia_acolhida = '';
        this.semana_escala = '';
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
        this.image = "./../../../assets/img/user.svg";
        this.cadastroForm = this.formBuilder.group({
            telefone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            data_nacimento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dia_acolhida: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            semana_escala: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        //this.cadastroForm.valueChanges.subscribe(data=>this.cadastroOnDataChange(data));
    }
    CadastroPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.idUsuario = +params['id'];
        });
        console.log('id: ', this.idUsuario);
    };
    CadastroPage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CadastroPage.prototype.cadastroOnDataChange = function (data) {
        console.log(data);
    };
    CadastroPage.prototype.logForm = function () {
        console.log("telefone: ", this.cadastroForm.value.telefone, "Data Nacimento: ", this.cadastroForm.value.data_nacimento);
        this.setTelefone(this.cadastroForm.value.telefone);
        this.setDataNacimento(this.cadastroForm.value.data_nacimento);
        this.setDiaAcolhida(this.cadastroForm.value.dia_acolhida);
        this.setSemanaEscala(this.cadastroForm.value.semana_escala);
        // Platform, UUID, pushReceiverId
        this.util.getInfo();
        if (this.util.getPushToken() !== '') {
            this.presentAlertConfirm('Atenção!', 'Por favor, confirme o telefine <strong>' + this.cadastroForm.value.telefone + '</strong>');
        }
    };
    CadastroPage.prototype.saveData = function () {
        var _this = this;
        this.registerAPI.updateUser(this.idUsuario, this.getTelefone(), this.getDataNacimento().substr(0, 10), this.getDiaAcolhida(), this.getSemanaEscala())
            .subscribe(function (res) {
            console.log(res);
            if (parseInt(res.codigo) === 0) {
                console.log('id: ', res.idUsuario);
                _this.dataBase.setKeyValue('NSL', res.dadosUsuario);
                _this.router.navigate(['home']);
            }
            else {
                _this.showAlert('Atenção', res.mensagem[0].texto);
            }
        }, function (err) {
            console.log(err);
            _this.router.navigate(['']);
        });
    };
    CadastroPage.prototype.showAlert = function (header, message) {
        var alert = this.alertController.create({
            header: header,
            message: message,
            buttons: ['OK']
        });
        alert.then(function (_alert) {
            _alert.present();
        });
    };
    CadastroPage.prototype.presentAlertConfirm = function (header, message) {
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
                                        console.log('Cancela, editar o e-mail ', blah);
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Confirmou email');
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
    CadastroPage.prototype.presentLoading = function () {
        this.loading = this.loadingController.create({
            message: 'Carregando...'
        });
        this.loading.present();
    };
    CadastroPage.prototype.formatarCelular = function () {
        var cel = this.cadastroForm.value.telefone;
        if (this.cadastroForm.value.telefone !== undefined) {
            cel = cel.toString().replace(/\D/g, '');
        }
        this.cadastroForm.value.telefone = cel;
    };
    CadastroPage.prototype.getTelefone = function () {
        return this.phone;
    };
    CadastroPage.prototype.setTelefone = function (telefone) {
        this.phone = telefone;
    };
    CadastroPage.prototype.getDataNacimento = function () {
        return this.dataNacimento;
    };
    CadastroPage.prototype.setDataNacimento = function (data_nacimento) {
        this.dataNacimento = data_nacimento;
    };
    CadastroPage.prototype.getDiaAcolhida = function () {
        return this.diaAcolhida;
    };
    CadastroPage.prototype.setDiaAcolhida = function (dia_acolhida) {
        this.diaAcolhida = dia_acolhida;
    };
    CadastroPage.prototype.getSemanaEscala = function () {
        return this.semanaEscala;
    };
    CadastroPage.prototype.setSemanaEscala = function (semana_escala) {
        this.semanaEscala = semana_escala;
    };
    CadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.page.html */ "./src/app/register/cadastro/cadastro.page.html"),
            styles: [__webpack_require__(/*! ./cadastro.page.scss */ "./src/app/register/cadastro/cadastro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_api_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"],
            _services_database_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"],
            _commons_util__WEBPACK_IMPORTED_MODULE_6__["Util"]])
    ], CadastroPage);
    return CadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-cadastro-cadastro-module.js.map