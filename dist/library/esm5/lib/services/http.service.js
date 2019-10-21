/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    /** @nocollapse */ HttpService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(i0.ɵɵinject(i1.HttpClient)); }, token: HttpService, providedIn: "root" });
    return HttpService;
}());
export { HttpService };
if (false) {
    /** @type {?} */
    HttpService.BASE_URL;
    /**
     * @type {?}
     * @private
     */
    HttpService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFFbEQ7SUFNRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7Ozs7Ozs7O0lBRXhDLDZCQUFPOzs7Ozs7O0lBQVAsVUFDRSxRQUFnQixFQUNoQixNQUFXLEVBQ1gsTUFBYztRQUVkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBSSxXQUFXLENBQUMsUUFBUSxTQUFJLFFBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7Ozs7SUFFRCx5QkFBRzs7Ozs7SUFBSCxVQUFJLFFBQWdCLEVBQUUsSUFBUztRQUFULHFCQUFBLEVBQUEsU0FBUztRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFkTSxvQkFBUSxHQUFHLEVBQUUsQ0FBQzs7Z0JBSnRCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsVUFBVTs7O3NCQUZuQjtDQXVCQyxBQW5CRCxJQW1CQztTQWhCWSxXQUFXOzs7SUFDdEIscUJBQXFCOzs7OztJQUVULDJCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xuICBzdGF0aWMgQkFTRV9VUkwgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICByZXF1ZXN0PFQ+KFxuICAgIGVuZHBvaW50OiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgbWV0aG9kOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxUPiB8IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFttZXRob2RdKGAke0h0dHBTZXJ2aWNlLkJBU0VfVVJMfS8ke2VuZHBvaW50fWAsIHBhcmFtcyk7XG4gIH1cblxuICBnZXQoZW5kcG9pbnQ6IHN0cmluZywgZGF0YSA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KGVuZHBvaW50LCB7IHBhcmFtczogZGF0YSB9LCBcImdldFwiKTtcbiAgfVxufVxuIl19