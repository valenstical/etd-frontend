/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from "@angular/core";
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from "@angular/router";
import { BaseComponent } from "../../helpers/base-component";
export class PageTransitionComponent extends BaseComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10cmFuc2l0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYWdlLXRyYW5zaXRpb24vcGFnZS10cmFuc2l0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxNQUFNLEVBRU4sb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNuQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU83RCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsYUFBYTs7OztJQU14RCxZQUFvQixNQUFjO1FBQ2hDLEtBQUssRUFBRSxDQUFDO1FBRFUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUp4QixpQkFBWSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5FLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFJaEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxDQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFRLEVBQUU7WUFDeEQsSUFBSSxLQUFLLFlBQVksb0JBQW9CLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3JCO2lCQUFNLElBQUksS0FBSyxZQUFZLGtCQUFrQixFQUFFO2dCQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsMk1BQStDOzthQUVoRDs7OztZQVhDLE1BQU07OzsyQkFjTCxNQUFNOzs7O0lBQVAsK0NBQW1FOztJQUVuRSwwQ0FBZ0I7Ozs7O0lBRUoseUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIFJvdXRlcixcbiAgUm91dGVyRXZlbnQsXG4gIFJvdXRlQ29uZmlnTG9hZFN0YXJ0LFxuICBSb3V0ZUNvbmZpZ0xvYWRFbmRcbn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2Jhc2UtY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItcGFnZS10cmFuc2l0aW9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZS10cmFuc2l0aW9uLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9wYWdlLXRyYW5zaXRpb24uY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlVHJhbnNpdGlvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKSBhY3RpdmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFkZFN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50OiBSb3V0ZXJFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRTdGFydCkge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRFbmQpIHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jbGVhclN1YnNjcmlwdGlvbigpO1xuICB9XG59XG4iXX0=