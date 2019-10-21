/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subscription } from "rxjs";
export class BaseComponent {
    constructor() {
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
    toggleLoaders(value) {
        this.isBusy = value;
        this.hideAlert = value;
    }
    /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} type
     * @return {?}
     */
    showMessage(message, title, type) {
        this.response.message = message;
        this.response.title = title;
        this.response.type = type;
    }
    /**
     * @return {?}
     */
    clearSubscription() {
        this.subscription.unsubscribe();
    }
    /**
     * @param {?} logic
     * @return {?}
     */
    addSubscription(logic) {
        this.subscription.add(logic);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvYmFzZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQWlCLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBQ1UsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFDLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixhQUFRLEdBQUc7WUFDVCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO0lBbUJKLENBQUM7Ozs7OztJQWpCVyxhQUFhLENBQUMsS0FBYztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7Ozs7OztJQUNTLFdBQVcsQ0FBQyxPQUFZLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBb0I7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGOzs7Ozs7SUE1QkMscUNBQTBDOztJQUMxQywrQkFBZTs7SUFDZixnQ0FBZ0I7O0lBQ2hCLGdDQUFnQjs7SUFDaEIsa0NBQWlCOztJQUNqQixpQ0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiwgVGVhcmRvd25Mb2dpYyB9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIGlzQnVzeSA9IGZhbHNlO1xuICBpc0VtcHR5ID0gZmFsc2U7XG4gIGlzRXJyb3IgPSBmYWxzZTtcbiAgaGlkZUFsZXJ0ID0gdHJ1ZTtcbiAgcmVzcG9uc2UgPSB7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgbWVzc2FnZTogW10sXG4gICAgdHlwZTogXCJcIlxuICB9O1xuXG4gIHByb3RlY3RlZCB0b2dnbGVMb2FkZXJzKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc0J1c3kgPSB2YWx1ZTtcbiAgICB0aGlzLmhpZGVBbGVydCA9IHZhbHVlO1xuICB9XG4gIHByb3RlY3RlZCBzaG93TWVzc2FnZShtZXNzYWdlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVzcG9uc2UubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5yZXNwb25zZS50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMucmVzcG9uc2UudHlwZSA9IHR5cGU7XG4gIH1cblxuICBjbGVhclN1YnNjcmlwdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgYWRkU3Vic2NyaXB0aW9uKGxvZ2ljOiBUZWFyZG93bkxvZ2ljKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKGxvZ2ljKTtcbiAgfVxufVxuIl19