/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class PaystackWidget {
    /**
     * @param {?} __0
     * @param {?} onSuccess
     * @param {?} onFailure
     */
    constructor({ key, ref, plan, email }, onSuccess, onFailure) {
        this.handler = PaystackPop.setup({
            key,
            email,
            ref,
            plan,
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
    open() {
        this.handler.openIframe();
    }
}
if (false) {
    /** @type {?} */
    PaystackWidget.prototype.handler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5c3RhY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvcGF5c3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFFekIsWUFBWSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTO1FBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUMvQixHQUFHO1lBQ0gsS0FBSztZQUNMLEdBQUc7WUFDSCxJQUFJO1lBQ0osUUFBUTs7OztZQUFFLFVBQVMsUUFBYTtnQkFDOUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQTtZQUNELE9BQU87OztZQUFFO2dCQUNQLFNBQVMsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFBO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUNELElBQUk7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FDRjs7O0lBbEJDLGlDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgUGF5c3RhY2tQb3A6IGFueTtcbmV4cG9ydCBjbGFzcyBQYXlzdGFja1dpZGdldCB7XG4gIGhhbmRsZXI6IGFueTtcbiAgY29uc3RydWN0b3IoeyBrZXksIHJlZiwgcGxhbiwgZW1haWwgfSwgb25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcbiAgICB0aGlzLmhhbmRsZXIgPSBQYXlzdGFja1BvcC5zZXR1cCh7XG4gICAgICBrZXksXG4gICAgICBlbWFpbCxcbiAgICAgIHJlZixcbiAgICAgIHBsYW4sXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24ocmVzcG9uc2U6IGFueSkge1xuICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UpO1xuICAgICAgfSxcbiAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBvbkZhaWx1cmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlci5vcGVuSWZyYW1lKCk7XG4gIH1cbn1cbiJdfQ==