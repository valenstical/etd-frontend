import { __assign } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { throwError } from 'rxjs';
import { AuthService } from 'library';
import { catchError } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Department() { }
if (false) {
    /** @type {?} */
    Department.prototype.id;
    /** @type {?} */
    Department.prototype.name;
    /** @type {?|undefined} */
    Department.prototype.createdAt;
    /** @type {?|undefined} */
    Department.prototype.updatedAt;
    /** @type {?|undefined} */
    Department.prototype.collegeId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DocumentType() { }
if (false) {
    /** @type {?} */
    DocumentType.prototype.text;
    /** @type {?} */
    DocumentType.prototype.value;
}
/**
 * @record
 */
function sortType() { }

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ResponseData() { }
if (false) {
    /** @type {?} */
    ResponseData.prototype.code;
    /** @type {?} */
    ResponseData.prototype.data;
    /** @type {?} */
    ResponseData.prototype.message;
    /** @type {?} */
    ResponseData.prototype.status;
    /** @type {?} */
    ResponseData.prototype.timestamp;
}
/**
 * @record
 */
function Pagination() { }
if (false) {
    /** @type {?} */
    Pagination.prototype.currentPage;
    /** @type {?} */
    Pagination.prototype.lastPage;
    /** @type {?} */
    Pagination.prototype.currentCount;
    /** @type {?} */
    Pagination.prototype.totalCount;
}
/**
 * @record
 */
function PageData() { }
if (false) {
    /** @type {?} */
    PageData.prototype.page;
    /** @type {?} */
    PageData.prototype.size;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SingleDocument() { }
if (false) {
    /** @type {?|undefined} */
    SingleDocument.prototype.id;
    /** @type {?|undefined} */
    SingleDocument.prototype.title;
    /** @type {?|undefined} */
    SingleDocument.prototype.author;
    /** @type {?|undefined} */
    SingleDocument.prototype.url;
    /** @type {?|undefined} */
    SingleDocument.prototype.degreeId;
    /** @type {?|undefined} */
    SingleDocument.prototype.type;
    /** @type {?|undefined} */
    SingleDocument.prototype.views;
    /** @type {?|undefined} */
    SingleDocument.prototype.tags;
    /** @type {?|undefined} */
    SingleDocument.prototype.abstract;
    /** @type {?|undefined} */
    SingleDocument.prototype.advisors;
    /** @type {?|undefined} */
    SingleDocument.prototype.downloads;
    /** @type {?|undefined} */
    SingleDocument.prototype.subject;
    /** @type {?|undefined} */
    SingleDocument.prototype.matNumber;
    /** @type {?|undefined} */
    SingleDocument.prototype.departmentId;
    /** @type {?|undefined} */
    SingleDocument.prototype.graduationYear;
    /** @type {?|undefined} */
    SingleDocument.prototype.submissionYear;
    /** @type {?|undefined} */
    SingleDocument.prototype.createdAt;
    /** @type {?|undefined} */
    SingleDocument.prototype.updatedAt;
    /** @type {?|undefined} */
    SingleDocument.prototype.collegeId;
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
                },
                body: __assign({}, request.body, { collegeId: authenticatedUser["collegeId"] })
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { InterceptorService };
//# sourceMappingURL=etd-library.js.map
