/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.type = "warning";
        this.show = true;
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.message = Array.isArray(this.message) ? this.message : [this.message];
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-alert",
                    template: "<div class=\"alert alert-{{ type }} mb-4 fade show\" *ngIf=\"show\">\n  <button type=\"button\" (click)=\"show = false\" class=\"close\" aria-label=\"Close\">\n    &times;\n  </button>\n  <strong class=\"d-block mb-2\" *ngIf=\"title\">{{ title }}</strong>\n  <ul class=\"d-block mt-0 mb-0 list-unstyled\">\n    <li *ngFor=\"let item of message\" class=\"mb-2\">{{ item }}</li>\n  </ul>\n</div>\n"
                }] }
    ];
    AlertComponent.propDecorators = {
        type: [{ type: Input }],
        title: [{ type: Input }],
        message: [{ type: Input }]
    };
    return AlertComponent;
}());
export { AlertComponent };
if (false) {
    /** @type {?} */
    AlertComponent.prototype.type;
    /** @type {?} */
    AlertComponent.prototype.title;
    /** @type {?} */
    AlertComponent.prototype.message;
    /** @type {?} */
    AlertComponent.prototype.show;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQ7SUFBQTtRQUtXLFNBQUksR0FBVyxTQUFTLENBQUM7UUFJbEMsU0FBSSxHQUFZLElBQUksQ0FBQztJQUt2QixDQUFDOzs7O0lBSEMsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQix1WkFBcUM7aUJBQ3RDOzs7dUJBRUUsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7O0lBT1IscUJBQUM7Q0FBQSxBQWRELElBY0M7U0FWWSxjQUFjOzs7SUFDekIsOEJBQWtDOztJQUNsQywrQkFBd0I7O0lBQ3hCLGlDQUEwQzs7SUFFMUMsOEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1hbGVydFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FsZXJ0LmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSBcIndhcm5pbmdcIjtcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lc3NhZ2U/OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+O1xuXG4gIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZSA9IEFycmF5LmlzQXJyYXkodGhpcy5tZXNzYWdlKSA/IHRoaXMubWVzc2FnZSA6IFt0aGlzLm1lc3NhZ2VdO1xuICB9XG59XG4iXX0=