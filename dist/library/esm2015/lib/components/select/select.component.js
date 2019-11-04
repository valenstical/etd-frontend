/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
export class SelectComponent {
    constructor() {
        this.disabled = false;
        this.showLoader = false;
        this.className = "";
        this.onChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleChange(event) {
        this.onChange.emit(event);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNM0MsTUFBTSxPQUFPLGVBQWU7SUFKNUI7UUFZVyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUV0QixhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFPLENBQUM7SUFLbkUsQ0FBQzs7Ozs7SUFIQyxZQUFZLENBQUMsS0FBVTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixveUJBQXNDO2FBQ3ZDOzs7bUJBRUUsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUVMLE1BQU07Ozs7SUFaUCwrQkFBc0I7O0lBQ3RCLGdDQUF3Qjs7SUFDeEIsK0JBQXFCOztJQUNyQixtQ0FBMEI7O0lBQzFCLGtDQUF5Qjs7SUFDekIsb0NBQThCOztJQUM5QixzQ0FBOEI7O0lBQzlCLG1DQUEwQjs7SUFDMUIscUNBQTRCOztJQUM1QixpQ0FBd0I7O0lBQ3hCLG9DQUFnQzs7SUFFaEMsbUNBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItc2VsZWN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2VsZWN0LmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogYW55W107XG4gIEBJbnB1dCgpIGtleVZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGtleVRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGludmFsaWRUZXh0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93TG9hZGVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGltZ1NyYzogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZyA9IFwiXCI7XG5cbiAgQE91dHB1dCgpIG9uQ2hhbmdlPzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==