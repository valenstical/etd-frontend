/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subscription } from "rxjs";
import { scrollIntoView } from "./utils";
import { ElementRef, ViewChild } from "@angular/core";
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
        if (this.topElement) {
            scrollIntoView(this.topElement.nativeElement, true);
        }
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
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    BaseComponent.prototype.arrayValues = /**
     * @private
     * @param {?} array
     * @return {?}
     */
    function (array) {
        /** @type {?} */
        var errorGroup = [];
        if (Array.isArray(array)) {
            array.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                errorGroup.push(Object.values(element));
            }));
        }
        return errorGroup;
    };
    /**
     * @protected
     * @param {?} err
     * @return {?}
     */
    BaseComponent.prototype.handleError = /**
     * @protected
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.toggleLoaders(false);
        var _a = err.error, data = _a.data, message = _a.message;
        data = this.arrayValues(data);
        /** @type {?} */
        var title = data.length === 0 ? "" : message;
        message = title ? data : message;
        this.showMessage(message, title, "danger");
    };
    BaseComponent.propDecorators = {
        topElement: [{ type: ViewChild, args: ["topElement", { static: false },] }]
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
    /** @type {?} */
    BaseComponent.prototype.topElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvYmFzZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQWlCLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEQ7SUFBQTtRQUNVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsYUFBUSxHQUFHO1lBQ1QsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsRUFBRTtZQUNYLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQztJQThDSixDQUFDOzs7Ozs7SUExQ1cscUNBQWE7Ozs7O0lBQXZCLFVBQXdCLEtBQWM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7Ozs7SUFDUyxtQ0FBVzs7Ozs7OztJQUFyQixVQUFzQixPQUFZLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7Ozs7SUFFRCx5Q0FBaUI7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCx1Q0FBZTs7OztJQUFmLFVBQWdCLEtBQW9CO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7OztJQUVPLG1DQUFXOzs7OztJQUFuQixVQUFvQixLQUFVOztZQUN0QixVQUFVLEdBQUcsRUFBRTtRQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsS0FBSyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLE9BQVk7Z0JBQ3pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFFUyxtQ0FBVzs7Ozs7SUFBckIsVUFBc0IsR0FBUTtRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUEsY0FBd0IsRUFBZixjQUFJLEVBQUUsb0JBQVM7UUFFMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBQ3hCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPO1FBQzlDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs2QkEzQ0EsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBNEM1QyxvQkFBQztDQUFBLEFBeERELElBd0RDO1NBeERZLGFBQWE7Ozs7OztJQUN4QixxQ0FBMEM7O0lBQzFDLCtCQUFlOztJQUNmLGdDQUFnQjs7SUFDaEIsZ0NBQWdCOztJQUNoQixrQ0FBaUI7O0lBQ2pCLGlDQUlFOztJQUVGLG1DQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiwgVGVhcmRvd25Mb2dpYyB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBzY3JvbGxJbnRvVmlldyB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBpc0J1c3kgPSBmYWxzZTtcbiAgaXNFbXB0eSA9IGZhbHNlO1xuICBpc0Vycm9yID0gZmFsc2U7XG4gIGhpZGVBbGVydCA9IHRydWU7XG4gIHJlc3BvbnNlID0ge1xuICAgIHRpdGxlOiBcIlwiLFxuICAgIG1lc3NhZ2U6IFtdLFxuICAgIHR5cGU6IFwiXCJcbiAgfTtcblxuICBAVmlld0NoaWxkKFwidG9wRWxlbWVudFwiLCB7IHN0YXRpYzogZmFsc2UgfSkgdG9wRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBwcm90ZWN0ZWQgdG9nZ2xlTG9hZGVycyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNCdXN5ID0gdmFsdWU7XG4gICAgdGhpcy5oaWRlQWxlcnQgPSB2YWx1ZTtcbiAgfVxuICBwcm90ZWN0ZWQgc2hvd01lc3NhZ2UobWVzc2FnZTogYW55LCB0aXRsZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlc3BvbnNlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMucmVzcG9uc2UudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnJlc3BvbnNlLnR5cGUgPSB0eXBlO1xuXG4gICAgaWYgKHRoaXMudG9wRWxlbWVudCkge1xuICAgICAgc2Nyb2xsSW50b1ZpZXcodGhpcy50b3BFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyU3Vic2NyaXB0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBhZGRTdWJzY3JpcHRpb24obG9naWM6IFRlYXJkb3duTG9naWMpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQobG9naWMpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcnJheVZhbHVlcyhhcnJheTogYW55KTogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiB7XG4gICAgY29uc3QgZXJyb3JHcm91cCA9IFtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgYXJyYXkuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgIGVycm9yR3JvdXAucHVzaChPYmplY3QudmFsdWVzKGVsZW1lbnQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3JHcm91cDtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYW5kbGVFcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlTG9hZGVycyhmYWxzZSk7XG4gICAgbGV0IHtcbiAgICAgIGVycm9yOiB7IGRhdGEsIG1lc3NhZ2UgfVxuICAgIH0gPSBlcnI7XG4gICAgZGF0YSA9IHRoaXMuYXJyYXlWYWx1ZXMoZGF0YSk7XG4gICAgY29uc3QgdGl0bGUgPSBkYXRhLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBtZXNzYWdlO1xuICAgIG1lc3NhZ2UgPSB0aXRsZSA/IGRhdGEgOiBtZXNzYWdlO1xuICAgIHRoaXMuc2hvd01lc3NhZ2UobWVzc2FnZSwgdGl0bGUsIFwiZGFuZ2VyXCIpO1xuICB9XG59XG4iXX0=