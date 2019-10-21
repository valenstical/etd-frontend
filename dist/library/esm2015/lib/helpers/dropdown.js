/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HostListener } from "@angular/core";
import { BaseComponent } from "./base-component";
export class Dropdown extends BaseComponent {
    constructor() {
        super(...arguments);
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.setDropdownState(false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleDropdownMenu(event) {
        event.stopPropagation();
        this.isOpen = !this.isOpen;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setDropdownState(state) {
        this.isOpen = state;
    }
    /**
     * @return {?}
     */
    isDropdownOpen() {
        return this.isOpen;
    }
}
Dropdown.propDecorators = {
    onClick: [{ type: HostListener, args: ["document:click",] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    Dropdown.prototype.isOpen;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvZHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE1BQU0sT0FBTyxRQUFTLFNBQVEsYUFBYTtJQUEzQzs7UUFDVSxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBbUJ6QixDQUFDOzs7O0lBaEJDLE9BQU87UUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxLQUFpQjtRQUNsQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7OztzQkFoQkEsWUFBWSxTQUFDLGdCQUFnQjs7Ozs7OztJQUY5QiwwQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb3N0TGlzdGVuZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gXCIuL2Jhc2UtY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBwcml2YXRlIGlzT3BlbiA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoXCJkb2N1bWVudDpjbGlja1wiKVxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0RHJvcGRvd25TdGF0ZShmYWxzZSk7XG4gIH1cblxuICB0b2dnbGVEcm9wZG93bk1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgfVxuXG4gIHNldERyb3Bkb3duU3RhdGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbiA9IHN0YXRlO1xuICB9XG5cbiAgaXNEcm9wZG93bk9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuO1xuICB9XG59XG4iXX0=