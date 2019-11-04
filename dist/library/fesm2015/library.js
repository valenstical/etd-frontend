import { Injectable, ɵɵdefineInjectable, ɵɵinject, ViewChild, HostListener, Component, Input, NgModule, EventEmitter, Output } from '@angular/core';
import { Subject, throwError, Subscription } from 'rxjs';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const scrollIntoView = (/**
 * @param {?} element
 * @param {?=} smooth
 * @return {?}
 */
(element, smooth = true) => {
    element.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "start",
        inline: "nearest"
    });
});
/** @type {?} */
const selectedFilter = (/**
 * @param {?} params
 * @param {?} key
 * @param {?=} value
 * @return {?}
 */
(params, key, value) => {
    params = Object.assign({}, params, { [key]: value, page: 1 });
    if (!value || !value.toString().trim().length) {
        delete params[key];
    }
    return params;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaystackWidget {
    /**
     * @param {?} __0
     * @param {?} onSuccess
     * @param {?} onFailure
     */
    constructor({ key, ref, plan, email }, onSuccess, onFailure) {
        this.handler = PaystackPop.setup({
            key,
            email,
            ref,
            plan,
            callback: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                onSuccess(response);
            }),
            onClose: (/**
             * @return {?}
             */
            function () {
                onFailure();
            })
        });
    }
    /**
     * @return {?}
     */
    open() {
        this.handler.openIframe();
    }
}
if (false) {
    /** @type {?} */
    PaystackWidget.prototype.handler;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultFunc = (/**
 * @param {?} params
 * @return {?}
 */
(params) => { });
const ɵ0 = defaultFunc;
class CloudinaryWidget {
    /**
     * @param {?=} handleSuccess
     * @param {?=} handleFailure
     * @param {?=} options
     */
    constructor(handleSuccess = defaultFunc, handleFailure = defaultFunc, options) {
        this.widget = window.cloudinary.createUploadWidget(options, (/**
         * @param {?} error
         * @param {?} result
         * @return {?}
         */
        (error, result) => {
            this.isUploadSuccess(error, result)
                ? handleSuccess(result.info.secure_url)
                : handleFailure(error);
        }));
    }
    /**
     * @return {?}
     */
    open() {
        this.widget.open();
    }
    /**
     * @private
     * @param {?} error
     * @param {?} result
     * @return {?}
     */
    isUploadSuccess(error, result) {
        return !error && result && result.event === "success";
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CloudinaryWidget.prototype.widget;
}
var cloudinaryWidget = {};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SuperUser() { }
if (false) {
    /** @type {?} */
    SuperUser.prototype.token;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @template T
     * @param {?} endpoint
     * @param {?} params
     * @param {?} method
     * @return {?}
     */
    request(endpoint, params, method) {
        return this.http[method](`${HttpService.BASE_URL}/${endpoint}`, params);
    }
    /**
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    get(endpoint, data = {}) {
        return this.request(endpoint, { params: data }, "get");
    }
}
HttpService.BASE_URL = "";
HttpService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
HttpService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ HttpService.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(ɵɵinject(HttpClient)); }, token: HttpService, providedIn: "root" });
if (false) {
    /** @type {?} */
    HttpService.BASE_URL;
    /**
     * @type {?}
     * @private
     */
    HttpService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthService {
    /**
     * @param {?} router
     * @param {?} httpService
     */
    constructor(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.authKey = "user";
    }
    /**
     * @param {?} data
     * @param {?} endpoint
     * @return {?}
     */
    login(data, endpoint) {
        return this.httpService.request(endpoint, Object.assign({}, data), "post");
    }
    /**
     * @return {?}
     */
    logout() {
        this.authenticatedUser = null;
        localStorage.removeItem(this.authKey);
        this.router.navigateByUrl("/login");
    }
    /**
     * @param {?} authenticatedUser
     * @return {?}
     */
    setAuthenticatedUser(authenticatedUser) {
        this.initAuthenticatedUser();
        this.authenticatedUser.next(authenticatedUser);
        localStorage.setItem(this.authKey, JSON.stringify(authenticatedUser));
    }
    /**
     * @return {?}
     */
    getAuthenticatedUser() {
        /** @type {?} */
        const authenticatedUser = localStorage.getItem(this.authKey);
        if (authenticatedUser) {
            return JSON.parse(authenticatedUser);
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    initAuthenticatedUser() {
        if (!this.authenticatedUser) {
            this.authenticatedUser = new Subject();
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    isLoggedIn(url) {
        this.defaultURL = url;
        /** @type {?} */
        const authenticatedUser = this.getAuthenticatedUser();
        if (authenticatedUser) {
            this.initAuthenticatedUser();
            this.authenticatedUser.next(authenticatedUser);
            return true;
        }
        return false;
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: Router },
    { type: HttpService }
];
/** @nocollapse */ AuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(Router), ɵɵinject(HttpService)); }, token: AuthService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.authenticatedUser;
    /** @type {?} */
    AuthService.prototype.defaultURL;
    /** @type {?} */
    AuthService.prototype.authKey;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.httpService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InterceptorService {
    /**
     * @param {?} authService
     */
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        /** @type {?} */
        const authenticatedUser = this.authService.getAuthenticatedUser();
        if (authenticatedUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${authenticatedUser.token}`
                }
            });
        }
        return next.handle(request).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            if (err.status === 401) {
                this.authService.logout();
            }
            return throwError(err);
        })));
    }
}
InterceptorService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
InterceptorService.ctorParameters = () => [
    { type: AuthService }
];
/** @nocollapse */ InterceptorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function InterceptorService_Factory() { return new InterceptorService(ɵɵinject(AuthService)); }, token: InterceptorService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    InterceptorService.prototype.authService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthGuard {
    /**
     * @param {?} authService
     * @param {?} router
     */
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        /** @type {?} */
        const authenticated = this.authService.isLoggedIn(state.url);
        if (!authenticated) {
            this.router.navigateByUrl("/login");
        }
        return authenticated;
    }
}
AuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: AuthService },
    { type: Router }
];
/** @nocollapse */ AuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(ɵɵinject(AuthService), ɵɵinject(Router)); }, token: AuthGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Scripts() { }
if (false) {
    /** @type {?} */
    Scripts.prototype.name;
    /** @type {?} */
    Scripts.prototype.src;
}
/** @type {?} */
const ScriptStore = [
    {
        name: "cloudinary",
        src: "https://widget.cloudinary.com/v2.0/global/all.js"
    },
    { name: "paystack", src: "https://js.paystack.co/v1/inline.js" }
];
class ScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((/**
         * @param {?} script
         * @return {?}
         */
        (script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        }));
    }
    /**
     * @param {...?} scripts
     * @return {?}
     */
    load(...scripts) {
        /** @type {?} */
        const promises = [];
        scripts.forEach((/**
         * @param {?} script
         * @return {?}
         */
        script => promises.push(this.loadScript(script))));
        return Promise.all(promises);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    loadScript(name) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (!this.scripts[name].loaded) {
                /** @type {?} */
                const script = document.createElement("script");
                script.type = "text/javascript";
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    script.onreadystatechange = (/**
                     * @return {?}
                     */
                    () => {
                        if (script.readyState === "loaded" ||
                            script.readyState === "complete") {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: "Loaded" });
                        }
                    });
                }
                else {
                    script.onload = (/**
                     * @return {?}
                     */
                    () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: "Loaded" });
                    });
                }
                script.onerror = (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => resolve({ script: name, loaded: false, status: "Loaded" }));
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: "Already Loaded" });
            }
        }));
    }
}
ScriptLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
ScriptLoaderService.ctorParameters = () => [];
/** @nocollapse */ ScriptLoaderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ScriptLoaderService_Factory() { return new ScriptLoaderService(); }, token: ScriptLoaderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScriptLoaderService.prototype.scripts;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseComponent {
    constructor() {
        this.subscription = new Subscription();
        this.isBusy = false;
        this.isEmpty = false;
        this.isError = false;
        this.hideAlert = true;
        this.response = {
            title: "",
            message: [],
            type: ""
        };
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    toggleLoaders(value) {
        this.isBusy = value;
        this.hideAlert = value;
    }
    /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} type
     * @return {?}
     */
    showMessage(message, title, type) {
        this.response.message = message;
        this.response.title = title;
        this.response.type = type;
        if (this.topElement) {
            scrollIntoView(this.topElement.nativeElement, true);
        }
    }
    /**
     * @return {?}
     */
    clearSubscription() {
        this.subscription.unsubscribe();
    }
    /**
     * @param {?} logic
     * @return {?}
     */
    addSubscription(logic) {
        this.subscription.add(logic);
    }
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    arrayValues(array) {
        /** @type {?} */
        const errorGroup = [];
        if (Array.isArray(array)) {
            array.forEach((/**
             * @param {?} element
             * @return {?}
             */
            (element) => {
                errorGroup.push(Object.values(element));
            }));
        }
        return errorGroup;
    }
    /**
     * @protected
     * @param {?} err
     * @return {?}
     */
    handleError(err) {
        this.toggleLoaders(false);
        let { error: { data, message } } = err;
        data = this.arrayValues(data);
        /** @type {?} */
        const title = data.length === 0 ? "" : message;
        message = title ? data : message;
        this.showMessage(message, title, "danger");
    }
}
BaseComponent.propDecorators = {
    topElement: [{ type: ViewChild, args: ["topElement", { static: false },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    BaseComponent.prototype.subscription;
    /** @type {?} */
    BaseComponent.prototype.isBusy;
    /** @type {?} */
    BaseComponent.prototype.isEmpty;
    /** @type {?} */
    BaseComponent.prototype.isError;
    /** @type {?} */
    BaseComponent.prototype.hideAlert;
    /** @type {?} */
    BaseComponent.prototype.response;
    /** @type {?} */
    BaseComponent.prototype.topElement;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class BaseDataComponent extends BaseComponent {
    constructor() {
        super();
        this.debouceTime = 500;
        this.dataSize = 0;
        this.data = [];
        this.isBusy = true;
        this.params = {
            page: 1,
            size: 1000
        };
    }
    /**
     * @param {?} data
     * @param {?} totalRecords
     * @param {?} pagination
     * @return {?}
     */
    onPopulateTableComplete(data, totalRecords, pagination) {
        this.data = data;
        this.dataSize = totalRecords;
        this.isEmpty = data.length === 0;
        this.pagination = pagination;
        this.isBusy = false;
    }
    /**
     * @param {?} observableKeyword
     * @return {?}
     */
    registerSearchObservables(observableKeyword) {
        this.registerObservables(observableKeyword, "isBusy", (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.filter(observableKeyword, value);
        }));
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    handleSearch(key, value) {
        this[`${key}$`].next(value);
    }
    /**
     * @return {?}
     */
    handleError() {
        this.isBusy = false;
        this.isError = true;
    }
    /**
     * @param {?} observableKeyword
     * @param {?} loader
     * @param {?} callback
     * @return {?}
     */
    registerObservables(observableKeyword, loader, callback) {
        this.addSubscription(this[`${observableKeyword}$`]
            .pipe(tap((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this[loader] = true;
        })), debounceTime(this.debouceTime), tap((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this[loader] = false;
        })), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            callback(value);
        })));
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    filter(key, value) {
        this.params = selectedFilter(this.params, key, value);
        this.populateTable();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    paginate({ page, size }) {
        this.params.size = size;
        this.params.page = page;
        this.populateTable();
    }
}
if (false) {
    /** @type {?} */
    BaseDataComponent.prototype.params;
    /** @type {?} */
    BaseDataComponent.prototype.debouceTime;
    /** @type {?} */
    BaseDataComponent.prototype.dataSize;
    /** @type {?} */
    BaseDataComponent.prototype.data;
    /** @type {?} */
    BaseDataComponent.prototype.pagination;
    /** @type {?} */
    BaseDataComponent.prototype.isBusy;
    /**
     * @abstract
     * @return {?}
     */
    BaseDataComponent.prototype.populateTable = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Dropdown extends BaseComponent {
    constructor() {
        super(...arguments);
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.setDropdownState(false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleDropdownMenu(event) {
        event.stopPropagation();
        this.isOpen = !this.isOpen;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setDropdownState(state) {
        this.isOpen = state;
    }
    /**
     * @return {?}
     */
    isDropdownOpen() {
        return this.isOpen;
    }
}
Dropdown.propDecorators = {
    onClick: [{ type: HostListener, args: ["document:click",] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    Dropdown.prototype.isOpen;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertComponent {
    constructor() {
        this.type = "warning";
        this.show = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.message = Array.isArray(this.message) ? this.message : [this.message];
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-alert",
                template: "<div class=\"alert alert-{{ type }} mb-4 fade show\" *ngIf=\"show\">\n  <button type=\"button\" (click)=\"show = false\" class=\"close\" aria-label=\"Close\">\n    &times;\n  </button>\n  <strong class=\"d-block mb-2\" *ngIf=\"title\">{{ title }}</strong>\n  <ul class=\"d-block mt-0 mb-0 list-unstyled\">\n    <li *ngFor=\"let item of message\" class=\"mb-2\">{{ item }}</li>\n  </ul>\n</div>\n"
            }] }
];
AlertComponent.propDecorators = {
    type: [{ type: Input }],
    title: [{ type: Input }],
    message: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AlertComponent.prototype.type;
    /** @type {?} */
    AlertComponent.prototype.title;
    /** @type {?} */
    AlertComponent.prototype.message;
    /** @type {?} */
    AlertComponent.prototype.show;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertModule {
}
AlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [AlertComponent],
                exports: [AlertComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectComponent {
    constructor() {
        this.disabled = false;
        this.showLoader = false;
        this.className = "";
        this.onChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleChange(event) {
        this.onChange.emit(event);
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-select",
                template: "<div class=\"form-group\">\n  <label for=\"{{ title }}\"\n    >{{ title }} <img *ngIf=\"showLoader && imgSrc\" [src]=\"imgSrc\" width=\"20\"\n  /></label>\n  <select\n    class=\"form-control custom-select {{ className }}\"\n    [formControl]=\"formGroup.controls[name]\"\n    [value]=\"formGroup.controls[name].value\"\n    (change)=\"handleChange(formGroup.controls[name].value)\"\n    [attr.disabled]=\"disabled || showLoader ? 'true' : null\"\n  >\n    <option value=\"\">-- Choose one --</option>\n    <option *ngFor=\"let item of data\" [value]=\"item[keyValue]\">\n      {{ item[keyText] }}</option\n    >\n  </select>\n  <span\n    class=\"error-text mt-1\"\n    *ngIf=\"formGroup.controls[name].invalid && formGroup.controls[name].dirty\"\n    >{{ invalidText }}</span\n  >\n</div>\n"
            }] }
];
SelectComponent.propDecorators = {
    name: [{ type: Input }],
    title: [{ type: Input }],
    data: [{ type: Input }],
    keyValue: [{ type: Input }],
    keyText: [{ type: Input }],
    formGroup: [{ type: Input }],
    invalidText: [{ type: Input }],
    disabled: [{ type: Input }],
    showLoader: [{ type: Input }],
    imgSrc: [{ type: Input }],
    className: [{ type: Input }],
    onChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SelectComponent.prototype.name;
    /** @type {?} */
    SelectComponent.prototype.title;
    /** @type {?} */
    SelectComponent.prototype.data;
    /** @type {?} */
    SelectComponent.prototype.keyValue;
    /** @type {?} */
    SelectComponent.prototype.keyText;
    /** @type {?} */
    SelectComponent.prototype.formGroup;
    /** @type {?} */
    SelectComponent.prototype.invalidText;
    /** @type {?} */
    SelectComponent.prototype.disabled;
    /** @type {?} */
    SelectComponent.prototype.showLoader;
    /** @type {?} */
    SelectComponent.prototype.imgSrc;
    /** @type {?} */
    SelectComponent.prototype.className;
    /** @type {?} */
    SelectComponent.prototype.onChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectModule {
}
SelectModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, ReactiveFormsModule],
                declarations: [SelectComponent],
                exports: [SelectComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageTransitionComponent extends BaseComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        super();
        this.router = router;
        this.activeChange = new EventEmitter();
        this.loading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.addSubscription(this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event instanceof RouteConfigLoadStart) {
                this.loading = true;
            }
            else if (event instanceof RouteConfigLoadEnd) {
                this.loading = false;
            }
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearSubscription();
    }
}
PageTransitionComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-page-transition",
                template: "<div class=\"progress page-loader\" *ngIf=\"loading\">\n  <div\n    class=\"progress-bar bg-danger progress-bar-striped progress-bar-animated\"\n    style=\"width: 100%\"\n  ></div>\n</div>\n",
                styles: [".page-loader{border-radius:0;height:5px;position:fixed;z-index:10000;top:0;left:0;right:0}"]
            }] }
];
/** @nocollapse */
PageTransitionComponent.ctorParameters = () => [
    { type: Router }
];
PageTransitionComponent.propDecorators = {
    activeChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PageTransitionComponent.prototype.activeChange;
    /** @type {?} */
    PageTransitionComponent.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    PageTransitionComponent.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageTransitionModule {
}
PageTransitionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PageTransitionComponent],
                exports: [PageTransitionComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AlertModule, AuthGuard, AuthService, BaseComponent, BaseDataComponent, CloudinaryWidget, Dropdown, HttpService, InterceptorService, PageTransitionModule, PaystackWidget, ScriptLoaderService, ScriptStore, SelectModule, scrollIntoView, selectedFilter, AlertComponent as ɵb, SelectComponent as ɵc, PageTransitionComponent as ɵd };
//# sourceMappingURL=library.js.map
