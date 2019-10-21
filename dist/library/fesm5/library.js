import { __assign, __extends } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, HostListener } from '@angular/core';
import { Subject, throwError, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var scrollIntoView = (/**
 * @param {?} element
 * @param {?=} smooth
 * @return {?}
 */
function (element, smooth) {
    if (smooth === void 0) { smooth = true; }
    element.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "start",
        inline: "nearest"
    });
});
/** @type {?} */
var selectedFilter = (/**
 * @param {?} params
 * @param {?} key
 * @param {?=} value
 * @return {?}
 */
function (params, key, value) {
    var _a;
    params = __assign({}, params, (_a = {}, _a[key] = value, _a.page = 1, _a));
    if (!value || !value.toString().trim().length) {
        delete params[key];
    }
    return params;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaystackWidget = /** @class */ (function () {
    function PaystackWidget(_a, onSuccess, onFailure) {
        var key = _a.key, ref = _a.ref, plan = _a.plan, email = _a.email;
        this.handler = PaystackPop.setup({
            key: key,
            email: email,
            ref: ref,
            plan: plan,
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
    PaystackWidget.prototype.open = /**
     * @return {?}
     */
    function () {
        this.handler.openIframe();
    };
    return PaystackWidget;
}());
if (false) {
    /** @type {?} */
    PaystackWidget.prototype.handler;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultFunc = (/**
 * @param {?} params
 * @return {?}
 */
function (params) { });
var ɵ0 = defaultFunc;
var CloudinaryWidget = /** @class */ (function () {
    function CloudinaryWidget(handleSuccess, handleFailure, options) {
        var _this = this;
        if (handleSuccess === void 0) { handleSuccess = defaultFunc; }
        if (handleFailure === void 0) { handleFailure = defaultFunc; }
        this.widget = window.cloudinary.createUploadWidget(options, (/**
         * @param {?} error
         * @param {?} result
         * @return {?}
         */
        function (error, result) {
            _this.isUploadSuccess(error, result)
                ? handleSuccess(result.info.secure_url)
                : handleFailure(error);
        }));
    }
    /**
     * @return {?}
     */
    CloudinaryWidget.prototype.open = /**
     * @return {?}
     */
    function () {
        this.widget.open();
    };
    /**
     * @private
     * @param {?} error
     * @param {?} result
     * @return {?}
     */
    CloudinaryWidget.prototype.isUploadSuccess = /**
     * @private
     * @param {?} error
     * @param {?} result
     * @return {?}
     */
    function (error, result) {
        return !error && result && result.event === "success";
    };
    return CloudinaryWidget;
}());
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
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    /**
     * @template T
     * @param {?} endpoint
     * @param {?} params
     * @param {?} method
     * @return {?}
     */
    HttpService.prototype.request = /**
     * @template T
     * @param {?} endpoint
     * @param {?} params
     * @param {?} method
     * @return {?}
     */
    function (endpoint, params, method) {
        return this.http[method](HttpService.BASE_URL + "/" + endpoint, params);
    };
    /**
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    HttpService.prototype.get = /**
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    function (endpoint, data) {
        if (data === void 0) { data = {}; }
        return this.request(endpoint, { params: data }, "get");
    };
    HttpService.BASE_URL = "";
    HttpService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    HttpService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ HttpService.ngInjectableDef = ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(ɵɵinject(HttpClient)); }, token: HttpService, providedIn: "root" });
    return HttpService;
}());
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
var AuthService = /** @class */ (function () {
    function AuthService(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.authKey = "user";
    }
    /**
     * @param {?} data
     * @param {?} endpoint
     * @return {?}
     */
    AuthService.prototype.login = /**
     * @param {?} data
     * @param {?} endpoint
     * @return {?}
     */
    function (data, endpoint) {
        return this.httpService.request(endpoint, __assign({}, data), "post");
    };
    /**
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.authenticatedUser = null;
        localStorage.removeItem(this.authKey);
        this.router.navigateByUrl("/login");
    };
    /**
     * @param {?} authenticatedUser
     * @return {?}
     */
    AuthService.prototype.setAuthenticatedUser = /**
     * @param {?} authenticatedUser
     * @return {?}
     */
    function (authenticatedUser) {
        this.initAuthenticatedUser();
        this.authenticatedUser.next(authenticatedUser);
        localStorage.setItem(this.authKey, JSON.stringify(authenticatedUser));
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getAuthenticatedUser = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var authenticatedUser = localStorage.getItem(this.authKey);
        if (authenticatedUser) {
            return JSON.parse(authenticatedUser);
        }
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    AuthService.prototype.initAuthenticatedUser = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.authenticatedUser) {
            this.authenticatedUser = new Subject();
        }
    };
    /**
     * @param {?} url
     * @return {?}
     */
    AuthService.prototype.isLoggedIn = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.defaultURL = url;
        /** @type {?} */
        var authenticatedUser = this.getAuthenticatedUser();
        if (authenticatedUser) {
            this.initAuthenticatedUser();
            this.authenticatedUser.next(authenticatedUser);
            return true;
        }
        return false;
    };
    AuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: Router },
        { type: HttpService }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(Router), ɵɵinject(HttpService)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());
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
var InterceptorService = /** @class */ (function () {
    function InterceptorService(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    InterceptorService.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        /** @type {?} */
        var authenticatedUser = this.authService.getAuthenticatedUser();
        if (authenticatedUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + authenticatedUser.token
                }
            });
        }
        return next.handle(request).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            if (err.status === 401) {
                _this.authService.logout();
            }
            return throwError(err);
        })));
    };
    InterceptorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    InterceptorService.ctorParameters = function () { return [
        { type: AuthService }
    ]; };
    /** @nocollapse */ InterceptorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function InterceptorService_Factory() { return new InterceptorService(ɵɵinject(AuthService)); }, token: InterceptorService, providedIn: "root" });
    return InterceptorService;
}());
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
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        /** @type {?} */
        var authenticated = this.authService.isLoggedIn(state.url);
        if (!authenticated) {
            this.router.navigateByUrl("/login");
        }
        return authenticated;
    };
    AuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: Router }
    ]; };
    /** @nocollapse */ AuthGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(ɵɵinject(AuthService), ɵɵinject(Router)); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());
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
var ScriptStore = [
    {
        name: "cloudinary",
        src: "https://widget.cloudinary.com/v2.0/global/all.js"
    },
    { name: "paystack", src: "https://js.paystack.co/v1/inline.js" }
];
var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        var _this = this;
        this.scripts = {};
        ScriptStore.forEach((/**
         * @param {?} script
         * @return {?}
         */
        function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        }));
    }
    /**
     * @param {...?} scripts
     * @return {?}
     */
    ScriptLoaderService.prototype.load = /**
     * @param {...?} scripts
     * @return {?}
     */
    function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        /** @type {?} */
        var promises = [];
        scripts.forEach((/**
         * @param {?} script
         * @return {?}
         */
        function (script) { return promises.push(_this.loadScript(script)); }));
        return Promise.all(promises);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ScriptLoaderService.prototype.loadScript = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!_this.scripts[name].loaded) {
                /** @type {?} */
                var script_1 = document.createElement("script");
                script_1.type = "text/javascript";
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = (/**
                     * @return {?}
                     */
                    function () {
                        if (script_1.readyState === "loaded" ||
                            script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: "Loaded" });
                        }
                    });
                }
                else {
                    script_1.onload = (/**
                     * @return {?}
                     */
                    function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: "Loaded" });
                    });
                }
                script_1.onerror = (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return resolve({ script: name, loaded: false, status: "Loaded" });
                });
                document.getElementsByTagName("head")[0].appendChild(script_1);
            }
            else {
                resolve({ script: name, loaded: true, status: "Already Loaded" });
            }
        }));
    };
    ScriptLoaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    ScriptLoaderService.ctorParameters = function () { return []; };
    /** @nocollapse */ ScriptLoaderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ScriptLoaderService_Factory() { return new ScriptLoaderService(); }, token: ScriptLoaderService, providedIn: "root" });
    return ScriptLoaderService;
}());
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
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
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
    BaseComponent.prototype.toggleLoaders = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isBusy = value;
        this.hideAlert = value;
    };
    /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} type
     * @return {?}
     */
    BaseComponent.prototype.showMessage = /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} type
     * @return {?}
     */
    function (message, title, type) {
        this.response.message = message;
        this.response.title = title;
        this.response.type = type;
    };
    /**
     * @return {?}
     */
    BaseComponent.prototype.clearSubscription = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @param {?} logic
     * @return {?}
     */
    BaseComponent.prototype.addSubscription = /**
     * @param {?} logic
     * @return {?}
     */
    function (logic) {
        this.subscription.add(logic);
    };
    return BaseComponent;
}());
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
BaseDataComponent = /** @class */ (function (_super) {
    __extends(BaseDataComponent, _super);
    function BaseDataComponent() {
        var _this = _super.call(this) || this;
        _this.debouceTime = 500;
        _this.dataSize = 0;
        _this.data = [];
        _this.isBusy = true;
        _this.params = {
            page: 1,
            size: 1000
        };
        return _this;
    }
    /**
     * @param {?} data
     * @param {?} totalRecords
     * @param {?} pagination
     * @return {?}
     */
    BaseDataComponent.prototype.onPopulateTableComplete = /**
     * @param {?} data
     * @param {?} totalRecords
     * @param {?} pagination
     * @return {?}
     */
    function (data, totalRecords, pagination) {
        this.data = data;
        this.dataSize = totalRecords;
        this.isEmpty = data.length === 0;
        this.pagination = pagination;
        this.isBusy = false;
    };
    /**
     * @param {?} observableKeyword
     * @return {?}
     */
    BaseDataComponent.prototype.registerSearchObservables = /**
     * @param {?} observableKeyword
     * @return {?}
     */
    function (observableKeyword) {
        var _this = this;
        this.registerObservables(observableKeyword, "isBusy", (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.filter(observableKeyword, value);
        }));
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    BaseDataComponent.prototype.handleSearch = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this[key + "$"].next(value);
    };
    /**
     * @return {?}
     */
    BaseDataComponent.prototype.handleError = /**
     * @return {?}
     */
    function () {
        this.isBusy = false;
        this.isError = true;
    };
    /**
     * @param {?} observableKeyword
     * @param {?} loader
     * @param {?} callback
     * @return {?}
     */
    BaseDataComponent.prototype.registerObservables = /**
     * @param {?} observableKeyword
     * @param {?} loader
     * @param {?} callback
     * @return {?}
     */
    function (observableKeyword, loader, callback) {
        var _this = this;
        this.addSubscription(this[observableKeyword + "$"]
            .pipe(tap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this[loader] = true;
        })), debounceTime(this.debouceTime), tap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this[loader] = false;
        })), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            callback(value);
        })));
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    BaseDataComponent.prototype.filter = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.params = selectedFilter(this.params, key, value);
        this.populateTable();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    BaseDataComponent.prototype.paginate = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var page = _a.page, size = _a.size;
        this.params.size = size;
        this.params.page = page;
        this.populateTable();
    };
    return BaseDataComponent;
}(BaseComponent));
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
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isOpen = false;
        return _this;
    }
    /**
     * @return {?}
     */
    Dropdown.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.setDropdownState(false);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Dropdown.prototype.toggleDropdownMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.isOpen = !this.isOpen;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    Dropdown.prototype.setDropdownState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.isOpen = state;
    };
    /**
     * @return {?}
     */
    Dropdown.prototype.isDropdownOpen = /**
     * @return {?}
     */
    function () {
        return this.isOpen;
    };
    Dropdown.propDecorators = {
        onClick: [{ type: HostListener, args: ["document:click",] }]
    };
    return Dropdown;
}(BaseComponent));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AuthGuard, AuthService, BaseComponent, BaseDataComponent, CloudinaryWidget, Dropdown, HttpService, InterceptorService, PaystackWidget, ScriptLoaderService, ScriptStore, scrollIntoView, selectedFilter };
//# sourceMappingURL=library.js.map
