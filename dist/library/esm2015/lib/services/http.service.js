/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class HttpService {
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
/** @nocollapse */ HttpService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HttpService_Factory() { return new HttpService(i0.ɵɵinject(i1.HttpClient)); }, token: HttpService, providedIn: "root" });
if (false) {
    /** @type {?} */
    HttpService.BASE_URL;
    /**
     * @type {?}
     * @private
     */
    HttpService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9odHRwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFLbEQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFHdEIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7Ozs7Ozs7O0lBRXhDLE9BQU8sQ0FDTCxRQUFnQixFQUNoQixNQUFXLEVBQ1gsTUFBYztRQUVkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxRQUFRLElBQUksUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7O0lBRUQsR0FBRyxDQUFDLFFBQWdCLEVBQUUsSUFBSSxHQUFHLEVBQUU7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDOztBQWRNLG9CQUFRLEdBQUcsRUFBRSxDQUFDOztZQUp0QixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxVQUFVOzs7OztJQU1qQixxQkFBcUI7Ozs7O0lBRVQsMkJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XG4gIHN0YXRpYyBCQVNFX1VSTCA9IFwiXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIHJlcXVlc3Q8VD4oXG4gICAgZW5kcG9pbnQ6IHN0cmluZyxcbiAgICBwYXJhbXM6IGFueSxcbiAgICBtZXRob2Q6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFQ+IHwgYW55IHtcbiAgICByZXR1cm4gdGhpcy5odHRwW21ldGhvZF0oYCR7SHR0cFNlcnZpY2UuQkFTRV9VUkx9LyR7ZW5kcG9pbnR9YCwgcGFyYW1zKTtcbiAgfVxuXG4gIGdldChlbmRwb2ludDogc3RyaW5nLCBkYXRhID0ge30pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoZW5kcG9pbnQsIHsgcGFyYW1zOiBkYXRhIH0sIFwiZ2V0XCIpO1xuICB9XG59XG4iXX0=