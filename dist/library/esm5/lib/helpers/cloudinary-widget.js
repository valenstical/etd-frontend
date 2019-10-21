/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultFunc = (/**
 * @param {?} params
 * @return {?}
 */
function (params) { });
var ɵ0 = defaultFunc;
var CloudinaryWidget = /** @class */ (function () {
    function CloudinaryWidget(handleSuccess, handleFailure, options) {
        var _this = this;
        if (handleSuccess === void 0) { handleSuccess = defaultFunc; }
        if (handleFailure === void 0) { handleFailure = defaultFunc; }
        this.widget = window.cloudinary.createUploadWidget(options, (/**
         * @param {?} error
         * @param {?} result
         * @return {?}
         */
        function (error, result) {
            _this.isUploadSuccess(error, result)
                ? handleSuccess(result.info.secure_url)
                : handleFailure(error);
        }));
    }
    /**
     * @return {?}
     */
    CloudinaryWidget.prototype.open = /**
     * @return {?}
     */
    function () {
        this.widget.open();
    };
    /**
     * @private
     * @param {?} error
     * @param {?} result
     * @return {?}
     */
    CloudinaryWidget.prototype.isUploadSuccess = /**
     * @private
     * @param {?} error
     * @param {?} result
     * @return {?}
     */
    function (error, result) {
        return !error && result && result.event === "success";
    };
    return CloudinaryWidget;
}());
export { CloudinaryWidget };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CloudinaryWidget.prototype.widget;
}
export default {};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvY2xvdWRpbmFyeS13aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7SUFJTSxXQUFXOzs7O0FBQUcsVUFBQyxNQUFXLElBQU0sQ0FBQyxDQUFBOztBQUV2QztJQUVFLDBCQUNFLGFBQTJCLEVBQzNCLGFBQTJCLEVBQzNCLE9BQTZCO1FBSC9CLGlCQWFDO1FBWkMsOEJBQUEsRUFBQSwyQkFBMkI7UUFDM0IsOEJBQUEsRUFBQSwyQkFBMkI7UUFHM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUNoRCxPQUFPOzs7OztRQUNQLFVBQUMsS0FBVSxFQUFFLE1BQVc7WUFDdEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO2dCQUNqQyxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN2QyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUNNLCtCQUFJOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7OztJQUVPLDBDQUFlOzs7Ozs7SUFBdkIsVUFBd0IsS0FBVSxFQUFFLE1BQVc7UUFDN0MsT0FBTyxDQUFDLEtBQUssSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUM7SUFDeEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQzs7Ozs7OztJQXRCQyxrQ0FBb0I7O0FBd0J0QixlQUFlLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsb3VkaW5hcnlQYXJhbWV0ZXJzIH0gZnJvbSBcIi4uL21vZGVscy9jbG91ZGluYXJ5UGFyYW1zXCI7XG5cbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xuXG5jb25zdCBkZWZhdWx0RnVuYyA9IChwYXJhbXM6IGFueSkgPT4ge307XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGluYXJ5V2lkZ2V0IHtcbiAgcHJpdmF0ZSB3aWRnZXQ6IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgaGFuZGxlU3VjY2VzcyA9IGRlZmF1bHRGdW5jLFxuICAgIGhhbmRsZUZhaWx1cmUgPSBkZWZhdWx0RnVuYyxcbiAgICBvcHRpb25zOiBDbG91ZGluYXJ5UGFyYW1ldGVyc1xuICApIHtcbiAgICB0aGlzLndpZGdldCA9IHdpbmRvdy5jbG91ZGluYXJ5LmNyZWF0ZVVwbG9hZFdpZGdldChcbiAgICAgIG9wdGlvbnMsXG4gICAgICAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5pc1VwbG9hZFN1Y2Nlc3MoZXJyb3IsIHJlc3VsdClcbiAgICAgICAgICA/IGhhbmRsZVN1Y2Nlc3MocmVzdWx0LmluZm8uc2VjdXJlX3VybClcbiAgICAgICAgICA6IGhhbmRsZUZhaWx1cmUoZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgcHVibGljIG9wZW4oKSB7XG4gICAgdGhpcy53aWRnZXQub3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1VwbG9hZFN1Y2Nlc3MoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpIHtcbiAgICByZXR1cm4gIWVycm9yICYmIHJlc3VsdCAmJiByZXN1bHQuZXZlbnQgPT09IFwic3VjY2Vzc1wiO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHt9O1xuIl19