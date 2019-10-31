(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/router'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('library', ['exports', '@angular/core', 'rxjs', '@angular/router', '@angular/common/http', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory(global.library = {}, global.ng.core, global.rxjs, global.ng.router, global.ng.common.http, global.rxjs.operators, global.ng.common));
}(this, function (exports, core, rxjs, router, http, operators, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        HttpService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ HttpService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(core.ɵɵinject(http.HttpClient)); }, token: HttpService, providedIn: "root" });
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
                this.authenticatedUser = new rxjs.Subject();
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
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        AuthService.ctorParameters = function () { return [
            { type: router.Router },
            { type: HttpService }
        ]; };
        /** @nocollapse */ AuthService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(core.ɵɵinject(router.Router), core.ɵɵinject(HttpService)); }, token: AuthService, providedIn: "root" });
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
            return next.handle(request).pipe(operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                if (err.status === 401) {
                    _this.authService.logout();
                }
                return rxjs.throwError(err);
            })));
        };
        InterceptorService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        InterceptorService.ctorParameters = function () { return [
            { type: AuthService }
        ]; };
        /** @nocollapse */ InterceptorService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function InterceptorService_Factory() { return new InterceptorService(core.ɵɵinject(AuthService)); }, token: InterceptorService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        AuthGuard.ctorParameters = function () { return [
            { type: AuthService },
            { type: router.Router }
        ]; };
        /** @nocollapse */ AuthGuard.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(core.ɵɵinject(AuthService), core.ɵɵinject(router.Router)); }, token: AuthGuard, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: "root"
                    },] }
        ];
        /** @nocollapse */
        ScriptLoaderService.ctorParameters = function () { return []; };
        /** @nocollapse */ ScriptLoaderService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ScriptLoaderService_Factory() { return new ScriptLoaderService(); }, token: ScriptLoaderService, providedIn: "root" });
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
            this.subscription = new rxjs.Subscription();
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
            if (this.topElement) {
                scrollIntoView(this.topElement.nativeElement, true);
            }
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
        /**
         * @private
         * @param {?} array
         * @return {?}
         */
        BaseComponent.prototype.arrayValues = /**
         * @private
         * @param {?} array
         * @return {?}
         */
        function (array) {
            /** @type {?} */
            var errorGroup = [];
            if (Array.isArray(array)) {
                array.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    errorGroup.push(Object.values(element));
                }));
            }
            return errorGroup;
        };
        /**
         * @protected
         * @param {?} err
         * @return {?}
         */
        BaseComponent.prototype.handleError = /**
         * @protected
         * @param {?} err
         * @return {?}
         */
        function (err) {
            this.toggleLoaders(false);
            var _a = err.error, data = _a.data, message = _a.message;
            data = this.arrayValues(data);
            /** @type {?} */
            var title = data.length === 0 ? "" : message;
            message = title ? data : message;
            this.showMessage(message, title, "danger");
        };
        BaseComponent.propDecorators = {
            topElement: [{ type: core.ViewChild, args: ["topElement", { static: false },] }]
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
    var   /**
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
                .pipe(operators.tap((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this[loader] = true;
            })), operators.debounceTime(this.debouceTime), operators.tap((/**
             * @param {?} _
             * @return {?}
             */
            function (_) {
                _this[loader] = false;
            })), operators.distinctUntilChanged())
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
            onClick: [{ type: core.HostListener, args: ["document:click",] }]
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
    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
            this.type = "warning";
        }
        /**
         * @return {?}
         */
        AlertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.message = Array.isArray(this.message) ? this.message : [this.message];
        };
        AlertComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "lib-alert",
                        template: "<div class=\"alert alert-{{ type }} mb-4\">\n  <strong class=\"d-block mb-2\" *ngIf=\"title\">{{ title }}</strong>\n  <ul class=\"d-block mt-0 mb-0 list-unstyled\">\n    <li *ngFor=\"let item of message\" class=\"mb-2\">{{ item }}</li>\n  </ul>\n</div>\n"
                    }] }
        ];
        AlertComponent.propDecorators = {
            type: [{ type: core.Input }],
            title: [{ type: core.Input }],
            message: [{ type: core.Input }]
        };
        return AlertComponent;
    }());
    if (false) {
        /** @type {?} */
        AlertComponent.prototype.type;
        /** @type {?} */
        AlertComponent.prototype.title;
        /** @type {?} */
        AlertComponent.prototype.message;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        AlertModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [AlertComponent],
                        exports: [AlertComponent]
                    },] }
        ];
        return AlertModule;
    }());

    exports.AlertModule = AlertModule;
    exports.AuthGuard = AuthGuard;
    exports.AuthService = AuthService;
    exports.BaseComponent = BaseComponent;
    exports.BaseDataComponent = BaseDataComponent;
    exports.CloudinaryWidget = CloudinaryWidget;
    exports.Dropdown = Dropdown;
    exports.HttpService = HttpService;
    exports.InterceptorService = InterceptorService;
    exports.PaystackWidget = PaystackWidget;
    exports.ScriptLoaderService = ScriptLoaderService;
    exports.ScriptStore = ScriptStore;
    exports.scrollIntoView = scrollIntoView;
    exports.selectedFilter = selectedFilter;
    exports.ɵb = AlertComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=library.umd.js.map
