/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HostListener } from "@angular/core";
import { BaseComponent } from "./base-component";
var Dropdown = /** @class */ (function (_super) {
    tslib_1.__extends(Dropdown, _super);
    function Dropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isOpen = false;
        return _this;
    }
    /**
     * @return {?}
     */
    Dropdown.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.setDropdownState(false);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Dropdown.prototype.toggleDropdownMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.isOpen = !this.isOpen;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    Dropdown.prototype.setDropdownState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.isOpen = state;
    };
    /**
     * @return {?}
     */
    Dropdown.prototype.isDropdownOpen = /**
     * @return {?}
     */
    function () {
        return this.isOpen;
    };
    Dropdown.propDecorators = {
        onClick: [{ type: HostListener, args: ["document:click",] }]
    };
    return Dropdown;
}(BaseComponent));
export { Dropdown };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Dropdown.prototype.isOpen;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvZHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQUE4QixvQ0FBYTtJQUEzQztRQUFBLHFFQW9CQztRQW5CUyxZQUFNLEdBQUcsS0FBSyxDQUFDOztJQW1CekIsQ0FBQzs7OztJQWhCQywwQkFBTzs7O0lBRFA7UUFFRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxxQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBaUI7UUFDbEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsbUNBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQWM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELGlDQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzswQkFoQkEsWUFBWSxTQUFDLGdCQUFnQjs7SUFpQmhDLGVBQUM7Q0FBQSxBQXBCRCxDQUE4QixhQUFhLEdBb0IxQztTQXBCWSxRQUFROzs7Ozs7SUFDbkIsMEJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdExpc3RlbmVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi9iYXNlLWNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBpc09wZW4gPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKFwiZG9jdW1lbnQ6Y2xpY2tcIilcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNldERyb3Bkb3duU3RhdGUoZmFsc2UpO1xuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd25NZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XG4gIH1cblxuICBzZXREcm9wZG93blN0YXRlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSBzdGF0ZTtcbiAgfVxuXG4gIGlzRHJvcGRvd25PcGVuKCkge1xuICAgIHJldHVybiB0aGlzLmlzT3BlbjtcbiAgfVxufVxuIl19