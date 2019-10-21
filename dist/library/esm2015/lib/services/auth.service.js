/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { HttpService } from "./http.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./http.service";
export class AuthService {
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
/** @nocollapse */ AuthService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.HttpService)); }, token: AuthService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBTzdDLE1BQU0sT0FBTyxXQUFXOzs7OztJQUt0QixZQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRnBFLFlBQU8sR0FBRyxNQUFNLENBQUM7SUFFc0QsQ0FBQzs7Ozs7O0lBRXhFLEtBQUssQ0FBQyxJQUFlLEVBQUUsUUFBZ0I7UUFDckMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLG9CQUFPLElBQUksR0FBSSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDOUIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxpQkFBNEI7UUFDL0MsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9DLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7O0lBRUQsb0JBQW9COztjQUNaLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1RCxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVPLHFCQUFxQjtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBYSxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQzs7Y0FDaEIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1FBQ3JELElBQUksaUJBQWlCLEVBQUU7WUFDckIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQWpERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFQUSxNQUFNO1lBQ04sV0FBVzs7Ozs7Ozs7SUFRbEIsd0NBQThDOztJQUM5QyxpQ0FBbUI7O0lBQ25CLDhCQUFpQjs7Ozs7SUFFTCw2QkFBc0I7Ozs7O0lBQUUsa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIi4vaHR0cC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdXBlclVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzL3N1cGVyVXNlclwiO1xuaW1wb3J0IHsgTG9naW5Vc2VyIH0gZnJvbSBcIi4uL21vZGVscy9sb2dpblVzZXJcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgYXV0aGVudGljYXRlZFVzZXI6IFN1YmplY3Q8U3VwZXJVc2VyPjtcbiAgZGVmYXVsdFVSTDogc3RyaW5nO1xuICBhdXRoS2V5ID0gXCJ1c2VyXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHt9XG5cbiAgbG9naW4oZGF0YTogTG9naW5Vc2VyLCBlbmRwb2ludDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5yZXF1ZXN0KGVuZHBvaW50LCB7IC4uLmRhdGEgfSwgXCJwb3N0XCIpO1xuICB9XG5cbiAgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aGVudGljYXRlZFVzZXIgPSBudWxsO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuYXV0aEtleSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9sb2dpblwiKTtcbiAgfVxuXG4gIHNldEF1dGhlbnRpY2F0ZWRVc2VyKGF1dGhlbnRpY2F0ZWRVc2VyOiBTdXBlclVzZXIpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRBdXRoZW50aWNhdGVkVXNlcigpO1xuICAgIHRoaXMuYXV0aGVudGljYXRlZFVzZXIubmV4dChhdXRoZW50aWNhdGVkVXNlcik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5hdXRoS2V5LCBKU09OLnN0cmluZ2lmeShhdXRoZW50aWNhdGVkVXNlcikpO1xuICB9XG5cbiAgZ2V0QXV0aGVudGljYXRlZFVzZXIoKTogU3VwZXJVc2VyIHtcbiAgICBjb25zdCBhdXRoZW50aWNhdGVkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuYXV0aEtleSk7XG4gICAgaWYgKGF1dGhlbnRpY2F0ZWRVc2VyKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShhdXRoZW50aWNhdGVkVXNlcik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0QXV0aGVudGljYXRlZFVzZXIoKSB7XG4gICAgaWYgKCF0aGlzLmF1dGhlbnRpY2F0ZWRVc2VyKSB7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWRVc2VyID0gbmV3IFN1YmplY3Q8U3VwZXJVc2VyPigpO1xuICAgIH1cbiAgfVxuXG4gIGlzTG9nZ2VkSW4odXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0aGlzLmRlZmF1bHRVUkwgPSB1cmw7XG4gICAgY29uc3QgYXV0aGVudGljYXRlZFVzZXIgPSB0aGlzLmdldEF1dGhlbnRpY2F0ZWRVc2VyKCk7XG4gICAgaWYgKGF1dGhlbnRpY2F0ZWRVc2VyKSB7XG4gICAgICB0aGlzLmluaXRBdXRoZW50aWNhdGVkVXNlcigpO1xuICAgICAgdGhpcy5hdXRoZW50aWNhdGVkVXNlci5uZXh0KGF1dGhlbnRpY2F0ZWRVc2VyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==