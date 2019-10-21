/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultFunc = (/**
 * @param {?} params
 * @return {?}
 */
(params) => { });
const ɵ0 = defaultFunc;
export class CloudinaryWidget {
    /**
     * @param {?=} handleSuccess
     * @param {?=} handleFailure
     * @param {?=} options
     */
    constructor(handleSuccess = defaultFunc, handleFailure = defaultFunc, options) {
        this.widget = window.cloudinary.createUploadWidget(options, (/**
         * @param {?} error
         * @param {?} result
         * @return {?}
         */
        (error, result) => {
            this.isUploadSuccess(error, result)
                ? handleSuccess(result.info.secure_url)
                : handleFailure(error);
        }));
    }
    /**
     * @return {?}
     */
    open() {
        this.widget.open();
    }
    /**
     * @private
     * @param {?} error
     * @param {?} result
     * @return {?}
     */
    isUploadSuccess(error, result) {
        return !error && result && result.event === "success";
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CloudinaryWidget.prototype.widget;
}
export default {};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRpbmFyeS13aWRnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvY2xvdWRpbmFyeS13aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7TUFJTSxXQUFXOzs7O0FBQUcsQ0FBQyxNQUFXLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQTs7QUFFdkMsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBRTNCLFlBQ0UsYUFBYSxHQUFHLFdBQVcsRUFDM0IsYUFBYSxHQUFHLFdBQVcsRUFDM0IsT0FBNkI7UUFFN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUNoRCxPQUFPOzs7OztRQUNQLENBQUMsS0FBVSxFQUFFLE1BQVcsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztnQkFDakMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFDTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEtBQVUsRUFBRSxNQUFXO1FBQzdDLE9BQU8sQ0FBQyxLQUFLLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDO0lBQ3hELENBQUM7Q0FDRjs7Ozs7O0lBdEJDLGtDQUFvQjs7QUF3QnRCLGVBQWUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xvdWRpbmFyeVBhcmFtZXRlcnMgfSBmcm9tIFwiLi4vbW9kZWxzL2Nsb3VkaW5hcnlQYXJhbXNcIjtcblxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XG5cbmNvbnN0IGRlZmF1bHRGdW5jID0gKHBhcmFtczogYW55KSA9PiB7fTtcblxuZXhwb3J0IGNsYXNzIENsb3VkaW5hcnlXaWRnZXQge1xuICBwcml2YXRlIHdpZGdldDogYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBoYW5kbGVTdWNjZXNzID0gZGVmYXVsdEZ1bmMsXG4gICAgaGFuZGxlRmFpbHVyZSA9IGRlZmF1bHRGdW5jLFxuICAgIG9wdGlvbnM6IENsb3VkaW5hcnlQYXJhbWV0ZXJzXG4gICkge1xuICAgIHRoaXMud2lkZ2V0ID0gd2luZG93LmNsb3VkaW5hcnkuY3JlYXRlVXBsb2FkV2lkZ2V0KFxuICAgICAgb3B0aW9ucyxcbiAgICAgIChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmlzVXBsb2FkU3VjY2VzcyhlcnJvciwgcmVzdWx0KVxuICAgICAgICAgID8gaGFuZGxlU3VjY2VzcyhyZXN1bHQuaW5mby5zZWN1cmVfdXJsKVxuICAgICAgICAgIDogaGFuZGxlRmFpbHVyZShlcnJvcik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBwdWJsaWMgb3BlbigpIHtcbiAgICB0aGlzLndpZGdldC5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIGlzVXBsb2FkU3VjY2VzcyhlcnJvcjogYW55LCByZXN1bHQ6IGFueSkge1xuICAgIHJldHVybiAhZXJyb3IgJiYgcmVzdWx0ICYmIHJlc3VsdC5ldmVudCA9PT0gXCJzdWNjZXNzXCI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge307XG4iXX0=