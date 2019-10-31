/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subscription } from "rxjs";
import { scrollIntoView } from "./utils";
import { ElementRef, ViewChild } from "@angular/core";
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
        if (this.topElement) {
            scrollIntoView(this.topElement.nativeElement, true);
        }
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
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    arrayValues(array) {
        /** @type {?} */
        const errorGroup = [];
        if (Array.isArray(array)) {
            array.forEach((/**
             * @param {?} element
             * @return {?}
             */
            (element) => {
                errorGroup.push(Object.values(element));
            }));
        }
        return errorGroup;
    }
    /**
     * @protected
     * @param {?} err
     * @return {?}
     */
    handleError(err) {
        this.toggleLoaders(false);
        let { error: { data, message } } = err;
        data = this.arrayValues(data);
        /** @type {?} */
        const title = data.length === 0 ? "" : message;
        message = title ? data : message;
        this.showMessage(message, title, "danger");
    }
}
BaseComponent.propDecorators = {
    topElement: [{ type: ViewChild, args: ["topElement", { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvYmFzZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQWlCLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEQsTUFBTSxPQUFPLGFBQWE7SUFBMUI7UUFDVSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQVEsR0FBRztZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7SUE4Q0osQ0FBQzs7Ozs7O0lBMUNXLGFBQWEsQ0FBQyxLQUFjO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7O0lBQ1MsV0FBVyxDQUFDLE9BQVksRUFBRSxLQUFhLEVBQUUsSUFBWTtRQUM3RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBb0I7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLEtBQVU7O2NBQ3RCLFVBQVUsR0FBRyxFQUFFO1FBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixLQUFLLENBQUMsT0FBTzs7OztZQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7Z0JBQzdCLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFFUyxXQUFXLENBQUMsR0FBUTtRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLEVBQ0YsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUN6QixHQUFHLEdBQUc7UUFDUCxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Y0FDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU87UUFDOUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozt5QkEzQ0EsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7Ozs7SUFYMUMscUNBQTBDOztJQUMxQywrQkFBZTs7SUFDZixnQ0FBZ0I7O0lBQ2hCLGdDQUFnQjs7SUFDaEIsa0NBQWlCOztJQUNqQixpQ0FJRTs7SUFFRixtQ0FBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24sIFRlYXJkb3duTG9naWMgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgc2Nyb2xsSW50b1ZpZXcgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgaXNCdXN5ID0gZmFsc2U7XG4gIGlzRW1wdHkgPSBmYWxzZTtcbiAgaXNFcnJvciA9IGZhbHNlO1xuICBoaWRlQWxlcnQgPSB0cnVlO1xuICByZXNwb25zZSA9IHtcbiAgICB0aXRsZTogXCJcIixcbiAgICBtZXNzYWdlOiBbXSxcbiAgICB0eXBlOiBcIlwiXG4gIH07XG5cbiAgQFZpZXdDaGlsZChcInRvcEVsZW1lbnRcIiwgeyBzdGF0aWM6IGZhbHNlIH0pIHRvcEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgcHJvdGVjdGVkIHRvZ2dsZUxvYWRlcnModmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzQnVzeSA9IHZhbHVlO1xuICAgIHRoaXMuaGlkZUFsZXJ0ID0gdmFsdWU7XG4gIH1cbiAgcHJvdGVjdGVkIHNob3dNZXNzYWdlKG1lc3NhZ2U6IGFueSwgdGl0bGU6IHN0cmluZywgdHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZXNwb25zZS5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnJlc3BvbnNlLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5yZXNwb25zZS50eXBlID0gdHlwZTtcblxuICAgIGlmICh0aGlzLnRvcEVsZW1lbnQpIHtcbiAgICAgIHNjcm9sbEludG9WaWV3KHRoaXMudG9wRWxlbWVudC5uYXRpdmVFbGVtZW50LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclN1YnNjcmlwdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgYWRkU3Vic2NyaXB0aW9uKGxvZ2ljOiBUZWFyZG93bkxvZ2ljKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKGxvZ2ljKTtcbiAgfVxuXG4gIHByaXZhdGUgYXJyYXlWYWx1ZXMoYXJyYXk6IGFueSk6IHN0cmluZyB8IEFycmF5PHN0cmluZz4ge1xuICAgIGNvbnN0IGVycm9yR3JvdXAgPSBbXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgIGFycmF5LmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICBlcnJvckdyb3VwLnB1c2goT2JqZWN0LnZhbHVlcyhlbGVtZW50KSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yR3JvdXA7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFuZGxlRXJyb3IoZXJyOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZUxvYWRlcnMoZmFsc2UpO1xuICAgIGxldCB7XG4gICAgICBlcnJvcjogeyBkYXRhLCBtZXNzYWdlIH1cbiAgICB9ID0gZXJyO1xuICAgIGRhdGEgPSB0aGlzLmFycmF5VmFsdWVzKGRhdGEpO1xuICAgIGNvbnN0IHRpdGxlID0gZGF0YS5sZW5ndGggPT09IDAgPyBcIlwiIDogbWVzc2FnZTtcbiAgICBtZXNzYWdlID0gdGl0bGUgPyBkYXRhIDogbWVzc2FnZTtcbiAgICB0aGlzLnNob3dNZXNzYWdlKG1lc3NhZ2UsIHRpdGxlLCBcImRhbmdlclwiKTtcbiAgfVxufVxuIl19