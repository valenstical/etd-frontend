/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.disabled = false;
        this.showLoader = false;
        this.className = "";
        this.onChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onChange.emit(event);
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-select",
                    template: "<div class=\"form-group\">\n  <label for=\"{{ title }}\"\n    >{{ title }} <img *ngIf=\"showLoader && imgSrc\" [src]=\"imgSrc\" width=\"20\"\n  /></label>\n  <select\n    class=\"form-control custom-select {{ className }}\"\n    [formControl]=\"formGroup.controls[name]\"\n    [value]=\"formGroup.controls[name].value\"\n    (change)=\"handleChange(formGroup.controls[name].value)\"\n    [attr.disabled]=\"disabled || showLoader ? 'true' : null\"\n  >\n    <option value=\"\">-- Choose one --</option>\n    <option *ngFor=\"let item of data\" [value]=\"item[keyValue]\">\n      {{ item[keyText] }}</option\n    >\n  </select>\n  <span\n    class=\"error-text mt-1\"\n    *ngIf=\"formGroup.controls[name].invalid && formGroup.controls[name].dirty\"\n    >{{ invalidText }}</span\n  >\n</div>\n"
                }] }
    ];
    SelectComponent.propDecorators = {
        name: [{ type: Input }],
        title: [{ type: Input }],
        data: [{ type: Input }],
        keyValue: [{ type: Input }],
        keyText: [{ type: Input }],
        formGroup: [{ type: Input }],
        invalidText: [{ type: Input }],
        disabled: [{ type: Input }],
        showLoader: [{ type: Input }],
        imgSrc: [{ type: Input }],
        className: [{ type: Input }],
        onChange: [{ type: Output }]
    };
    return SelectComponent;
}());
export { SelectComponent };
if (false) {
    /** @type {?} */
    SelectComponent.prototype.name;
    /** @type {?} */
    SelectComponent.prototype.title;
    /** @type {?} */
    SelectComponent.prototype.data;
    /** @type {?} */
    SelectComponent.prototype.keyValue;
    /** @type {?} */
    SelectComponent.prototype.keyText;
    /** @type {?} */
    SelectComponent.prototype.formGroup;
    /** @type {?} */
    SelectComponent.prototype.invalidText;
    /** @type {?} */
    SelectComponent.prototype.disabled;
    /** @type {?} */
    SelectComponent.prototype.showLoader;
    /** @type {?} */
    SelectComponent.prototype.imgSrc;
    /** @type {?} */
    SelectComponent.prototype.className;
    /** @type {?} */
    SelectComponent.prototype.onChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFBQTtRQVlXLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUVuQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGFBQVEsR0FBdUIsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUtuRSxDQUFDOzs7OztJQUhDLHNDQUFZOzs7O0lBQVosVUFBYSxLQUFVO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLG95QkFBc0M7aUJBQ3ZDOzs7dUJBRUUsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUVMLE1BQU07O0lBS1Qsc0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWxCWSxlQUFlOzs7SUFDMUIsK0JBQXNCOztJQUN0QixnQ0FBd0I7O0lBQ3hCLCtCQUFxQjs7SUFDckIsbUNBQTBCOztJQUMxQixrQ0FBeUI7O0lBQ3pCLG9DQUE4Qjs7SUFDOUIsc0NBQThCOztJQUM5QixtQ0FBMEI7O0lBQzFCLHFDQUE0Qjs7SUFDNUIsaUNBQXdCOztJQUN4QixvQ0FBZ0M7O0lBRWhDLG1DQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLXNlbGVjdFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3NlbGVjdC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGE6IGFueVtdO1xuICBASW5wdXQoKSBrZXlWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBrZXlUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBpbnZhbGlkVGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd0xvYWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBpbWdTcmM6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmcgPSBcIlwiO1xuXG4gIEBPdXRwdXQoKSBvbkNoYW5nZT86IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=