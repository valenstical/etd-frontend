/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class AlertComponent {
    constructor() {
        this.type = "warning";
        this.show = true;
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
                template: "<div class=\"alert alert-{{ type }} mb-4 fade show\" *ngIf=\"show\">\n  <button type=\"button\" (click)=\"show = false\" class=\"close\" aria-label=\"Close\">\n    &times;\n  </button>\n  <strong class=\"d-block mb-2\" *ngIf=\"title\">{{ title }}</strong>\n  <ul class=\"d-block mt-0 mb-0 list-unstyled\">\n    <li *ngFor=\"let item of message\" class=\"mb-2\">{{ item }}</li>\n  </ul>\n</div>\n"
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
    /** @type {?} */
    AlertComponent.prototype.show;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFNekQsTUFBTSxPQUFPLGNBQWM7SUFKM0I7UUFLVyxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSWxDLFNBQUksR0FBWSxJQUFJLENBQUM7SUFLdkIsQ0FBQzs7OztJQUhDLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3RSxDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHVaQUFxQzthQUN0Qzs7O21CQUVFLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBRk4sOEJBQWtDOztJQUNsQywrQkFBd0I7O0lBQ3hCLGlDQUEwQzs7SUFFMUMsOEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1hbGVydFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FsZXJ0LmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSBcIndhcm5pbmdcIjtcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lc3NhZ2U/OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+O1xuXG4gIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWVzc2FnZSA9IEFycmF5LmlzQXJyYXkodGhpcy5tZXNzYWdlKSA/IHRoaXMubWVzc2FnZSA6IFt0aGlzLm1lc3NhZ2VdO1xuICB9XG59XG4iXX0=