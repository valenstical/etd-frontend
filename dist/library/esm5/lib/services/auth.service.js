/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { HttpService } from "./http.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./http.service";
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
        return this.httpService.request(endpoint, tslib_1.__assign({}, data), "post");
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
    /** @nocollapse */ AuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.HttpService)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());
export { AuthService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUk3QztJQVFFLHFCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRnBFLFlBQU8sR0FBRyxNQUFNLENBQUM7SUFFc0QsQ0FBQzs7Ozs7O0lBRXhFLDJCQUFLOzs7OztJQUFMLFVBQU0sSUFBZSxFQUFFLFFBQWdCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSx1QkFBTyxJQUFJLEdBQUksTUFBTSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7OztJQUVELDRCQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDOUIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCwwQ0FBb0I7Ozs7SUFBcEIsVUFBcUIsaUJBQTRCO1FBQy9DLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVELDBDQUFvQjs7O0lBQXBCOztZQUNRLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1RCxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVPLDJDQUFxQjs7OztJQUE3QjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksT0FBTyxFQUFhLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7OztJQUVELGdDQUFVOzs7O0lBQVYsVUFBVyxHQUFXO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDOztZQUNoQixpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7UUFDckQsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBakRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsTUFBTTtnQkFDTixXQUFXOzs7c0JBSHBCO0NBeURDLEFBbERELElBa0RDO1NBL0NZLFdBQVc7Ozs7OztJQUN0Qix3Q0FBOEM7O0lBQzlDLGlDQUFtQjs7SUFDbkIsOEJBQWlCOzs7OztJQUVMLDZCQUFzQjs7Ozs7SUFBRSxrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1cGVyVXNlciB9IGZyb20gXCIuLi9tb2RlbHMvc3VwZXJVc2VyXCI7XG5pbXBvcnQgeyBMb2dpblVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzL2xvZ2luVXNlclwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhdXRoZW50aWNhdGVkVXNlcjogU3ViamVjdDxTdXBlclVzZXI+O1xuICBkZWZhdWx0VVJMOiBzdHJpbmc7XG4gIGF1dGhLZXkgPSBcInVzZXJcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkge31cblxuICBsb2dpbihkYXRhOiBMb2dpblVzZXIsIGVuZHBvaW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnJlcXVlc3QoZW5kcG9pbnQsIHsgLi4uZGF0YSB9LCBcInBvc3RcIik7XG4gIH1cblxuICBsb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoZW50aWNhdGVkVXNlciA9IG51bGw7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5hdXRoS2V5KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFwiL2xvZ2luXCIpO1xuICB9XG5cbiAgc2V0QXV0aGVudGljYXRlZFVzZXIoYXV0aGVudGljYXRlZFVzZXI6IFN1cGVyVXNlcik6IHZvaWQge1xuICAgIHRoaXMuaW5pdEF1dGhlbnRpY2F0ZWRVc2VyKCk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGVkVXNlci5uZXh0KGF1dGhlbnRpY2F0ZWRVc2VyKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmF1dGhLZXksIEpTT04uc3RyaW5naWZ5KGF1dGhlbnRpY2F0ZWRVc2VyKSk7XG4gIH1cblxuICBnZXRBdXRoZW50aWNhdGVkVXNlcigpOiBTdXBlclVzZXIge1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5hdXRoS2V5KTtcbiAgICBpZiAoYXV0aGVudGljYXRlZFVzZXIpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGF1dGhlbnRpY2F0ZWRVc2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGluaXRBdXRoZW50aWNhdGVkVXNlcigpIHtcbiAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRlZFVzZXIpIHtcbiAgICAgIHRoaXMuYXV0aGVudGljYXRlZFVzZXIgPSBuZXcgU3ViamVjdDxTdXBlclVzZXI+KCk7XG4gICAgfVxuICB9XG5cbiAgaXNMb2dnZWRJbih1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMuZGVmYXVsdFVSTCA9IHVybDtcbiAgICBjb25zdCBhdXRoZW50aWNhdGVkVXNlciA9IHRoaXMuZ2V0QXV0aGVudGljYXRlZFVzZXIoKTtcbiAgICBpZiAoYXV0aGVudGljYXRlZFVzZXIpIHtcbiAgICAgIHRoaXMuaW5pdEF1dGhlbnRpY2F0ZWRVc2VyKCk7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWRVc2VyLm5leHQoYXV0aGVudGljYXRlZFVzZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19