/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class AlertComponent {
    constructor() {
        this.type = "warning";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.message = Array.isArray(this.message) ? this.message : [this.message];
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-alert",
                template: "<div class=\"alert alert-{{ type }} mb-4\">\n  <strong class=\"d-block mb-2\" *ngIf=\"title\">{{ title }}</strong>\n  <ul class=\"d-block mt-0 mb-0 list-unstyled\">\n    <li *ngFor=\"let item of message\" class=\"mb-2\">{{ item }}</li>\n  </ul>\n</div>\n"
            }] }
];
AlertComponent.propDecorators = {
    type: [{ type: Input }],
    title: [{ type: Input }],
    message: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AlertComponent.prototype.type;
    /** @type {?} */
    AlertComponent.prototype.title;
    /** @type {?} */
    AlertComponent.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFNekQsTUFBTSxPQUFPLGNBQWM7SUFKM0I7UUFLVyxTQUFJLEdBQUcsU0FBUyxDQUFDO0lBTTVCLENBQUM7Ozs7SUFIQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwwUUFBcUM7YUFDdEM7OzttQkFFRSxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQUZOLDhCQUEwQjs7SUFDMUIsK0JBQXdCOztJQUN4QixpQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLWFsZXJ0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYWxlcnQuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHR5cGUgPSBcIndhcm5pbmdcIjtcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lc3NhZ2U/OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+O1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBBcnJheS5pc0FycmF5KHRoaXMubWVzc2FnZSkgPyB0aGlzLm1lc3NhZ2UgOiBbdGhpcy5tZXNzYWdlXTtcbiAgfVxufVxuIl19