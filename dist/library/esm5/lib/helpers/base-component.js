/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subscription } from "rxjs";
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
export { BaseComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvYmFzZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQWlCLE1BQU0sTUFBTSxDQUFDO0FBRW5EO0lBQUE7UUFDVSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQVEsR0FBRztZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7SUFtQkosQ0FBQzs7Ozs7O0lBakJXLHFDQUFhOzs7OztJQUF2QixVQUF3QixLQUFjO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7O0lBQ1MsbUNBQVc7Ozs7Ozs7SUFBckIsVUFBc0IsT0FBWSxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCx5Q0FBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCx1Q0FBZTs7OztJQUFmLFVBQWdCLEtBQW9CO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7Ozs7Ozs7SUE1QkMscUNBQTBDOztJQUMxQywrQkFBZTs7SUFDZixnQ0FBZ0I7O0lBQ2hCLGdDQUFnQjs7SUFDaEIsa0NBQWlCOztJQUNqQixpQ0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiwgVGVhcmRvd25Mb2dpYyB9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIGlzQnVzeSA9IGZhbHNlO1xuICBpc0VtcHR5ID0gZmFsc2U7XG4gIGlzRXJyb3IgPSBmYWxzZTtcbiAgaGlkZUFsZXJ0ID0gdHJ1ZTtcbiAgcmVzcG9uc2UgPSB7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgbWVzc2FnZTogW10sXG4gICAgdHlwZTogXCJcIlxuICB9O1xuXG4gIHByb3RlY3RlZCB0b2dnbGVMb2FkZXJzKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0J1c3kgPSB2YWx1ZTtcbiAgICB0aGlzLmhpZGVBbGVydCA9IHZhbHVlO1xuICB9XG4gIHByb3RlY3RlZCBzaG93TWVzc2FnZShtZXNzYWdlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVzcG9uc2UubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5yZXNwb25zZS50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMucmVzcG9uc2UudHlwZSA9IHR5cGU7XG4gIH1cblxuICBjbGVhclN1YnNjcmlwdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgYWRkU3Vic2NyaXB0aW9uKGxvZ2ljOiBUZWFyZG93bkxvZ2ljKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKGxvZ2ljKTtcbiAgfVxufVxuIl19