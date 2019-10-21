/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaystackWidget = /** @class */ (function () {
    function PaystackWidget(_a, onSuccess, onFailure) {
        var key = _a.key, ref = _a.ref, plan = _a.plan, email = _a.email;
        this.handler = PaystackPop.setup({
            key: key,
            email: email,
            ref: ref,
            plan: plan,
            callback: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                onSuccess(response);
            }),
            onClose: (/**
             * @return {?}
             */
            function () {
                onFailure();
            })
        });
    }
    /**
     * @return {?}
     */
    PaystackWidget.prototype.open = /**
     * @return {?}
     */
    function () {
        this.handler.openIframe();
    };
    return PaystackWidget;
}());
export { PaystackWidget };
if (false) {
    /** @type {?} */
    PaystackWidget.prototype.handler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5c3RhY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvcGF5c3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBO0lBRUUsd0JBQVksRUFBeUIsRUFBRSxTQUFTLEVBQUUsU0FBUztZQUE3QyxZQUFHLEVBQUUsWUFBRyxFQUFFLGNBQUksRUFBRSxnQkFBSztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDL0IsR0FBRyxLQUFBO1lBQ0gsS0FBSyxPQUFBO1lBQ0wsR0FBRyxLQUFBO1lBQ0gsSUFBSSxNQUFBO1lBQ0osUUFBUTs7OztZQUFFLFVBQVMsUUFBYTtnQkFDOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQTtZQUNELE9BQU87OztZQUFFO2dCQUNQLFNBQVMsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFBO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUNELDZCQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQzs7OztJQWxCQyxpQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIFBheXN0YWNrUG9wOiBhbnk7XG5leHBvcnQgY2xhc3MgUGF5c3RhY2tXaWRnZXQge1xuICBoYW5kbGVyOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHsga2V5LCByZWYsIHBsYW4sIGVtYWlsIH0sIG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gUGF5c3RhY2tQb3Auc2V0dXAoe1xuICAgICAga2V5LFxuICAgICAgZW1haWwsXG4gICAgICByZWYsXG4gICAgICBwbGFuLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlKTtcbiAgICAgIH0sXG4gICAgICBvbkNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgb25GYWlsdXJlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZXIub3BlbklmcmFtZSgpO1xuICB9XG59XG4iXX0=