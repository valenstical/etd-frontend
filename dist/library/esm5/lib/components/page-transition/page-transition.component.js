/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from "@angular/core";
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from "@angular/router";
import { BaseComponent } from "../../helpers/base-component";
var PageTransitionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PageTransitionComponent, _super);
    function PageTransitionComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.activeChange = new EventEmitter();
        _this.loading = false;
        return _this;
    }
    /**
     * @return {?}
     */
    PageTransitionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.addSubscription(this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event instanceof RouteConfigLoadStart) {
                _this.loading = true;
            }
            else if (event instanceof RouteConfigLoadEnd) {
                _this.loading = false;
            }
        })));
    };
    /**
     * @return {?}
     */
    PageTransitionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearSubscription();
    };
    PageTransitionComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-page-transition",
                    template: "<div class=\"progress page-loader\" *ngIf=\"loading\">\n  <div\n    class=\"progress-bar bg-danger progress-bar-striped progress-bar-animated\"\n    style=\"width: 100%\"\n  ></div>\n</div>\n",
                    styles: [".page-loader{border-radius:0;height:5px;position:fixed;z-index:10000;top:0;left:0;right:0}"]
                }] }
    ];
    /** @nocollapse */
    PageTransitionComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    PageTransitionComponent.propDecorators = {
        activeChange: [{ type: Output }]
    };
    return PageTransitionComponent;
}(BaseComponent));
export { PageTransitionComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10cmFuc2l0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYWdlLXRyYW5zaXRpb24vcGFnZS10cmFuc2l0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsTUFBTSxFQUVOLG9CQUFvQixFQUNwQixrQkFBa0IsRUFDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFN0Q7SUFLNkMsbURBQWE7SUFNeEQsaUNBQW9CLE1BQWM7UUFBbEMsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLFlBQU0sR0FBTixNQUFNLENBQVE7UUFKeEIsa0JBQVksR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRSxhQUFPLEdBQUcsS0FBSyxDQUFDOztJQUloQixDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsZUFBZSxDQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxLQUFrQjtZQUM5QyxJQUFJLEtBQUssWUFBWSxvQkFBb0IsRUFBRTtnQkFDekMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDckI7aUJBQU0sSUFBSSxLQUFLLFlBQVksa0JBQWtCLEVBQUU7Z0JBQzlDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDJNQUErQzs7aUJBRWhEOzs7O2dCQVhDLE1BQU07OzsrQkFjTCxNQUFNOztJQXVCVCw4QkFBQztDQUFBLEFBOUJELENBSzZDLGFBQWEsR0F5QnpEO1NBekJZLHVCQUF1Qjs7O0lBRWxDLCtDQUFtRTs7SUFFbkUsMENBQWdCOzs7OztJQUVKLHlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBSb3V0ZXIsXG4gIFJvdXRlckV2ZW50LFxuICBSb3V0ZUNvbmZpZ0xvYWRTdGFydCxcbiAgUm91dGVDb25maWdMb2FkRW5kXG59IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9iYXNlLWNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLXBhZ2UtdHJhbnNpdGlvblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2UtdHJhbnNpdGlvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcGFnZS10cmFuc2l0aW9uLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZVRyYW5zaXRpb25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KCkgYWN0aXZlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hZGRTdWJzY3JpcHRpb24oXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudDogUm91dGVyRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgUm91dGVDb25maWdMb2FkU3RhcnQpIHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgUm91dGVDb25maWdMb2FkRW5kKSB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2xlYXJTdWJzY3JpcHRpb24oKTtcbiAgfVxufVxuIl19