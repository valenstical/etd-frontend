/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";
import { BaseComponent } from "./base-component";
import { selectedFilter } from "./utils";
/**
 * @abstract
 */
var /**
 * @abstract
 */
BaseDataComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BaseDataComponent, _super);
    function BaseDataComponent() {
        var _this = _super.call(this) || this;
        _this.debouceTime = 500;
        _this.dataSize = 0;
        _this.data = [];
        _this.isBusy = true;
        _this.params = {
            page: 1,
            size: 1000
        };
        return _this;
    }
    /**
     * @param {?} data
     * @param {?} totalRecords
     * @param {?} pagination
     * @return {?}
     */
    BaseDataComponent.prototype.onPopulateTableComplete = /**
     * @param {?} data
     * @param {?} totalRecords
     * @param {?} pagination
     * @return {?}
     */
    function (data, totalRecords, pagination) {
        this.data = data;
        this.dataSize = totalRecords;
        this.isEmpty = data.length === 0;
        this.pagination = pagination;
        this.isBusy = false;
    };
    /**
     * @param {?} observableKeyword
     * @return {?}
     */
    BaseDataComponent.prototype.registerSearchObservables = /**
     * @param {?} observableKeyword
     * @return {?}
     */
    function (observableKeyword) {
        var _this = this;
        this.registerObservables(observableKeyword, "isBusy", (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.filter(observableKeyword, value);
        }));
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    BaseDataComponent.prototype.handleSearch = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this[key + "$"].next(value);
    };
    /**
     * @return {?}
     */
    BaseDataComponent.prototype.handleError = /**
     * @return {?}
     */
    function () {
        this.isBusy = false;
        this.isError = true;
    };
    /**
     * @param {?} observableKeyword
     * @param {?} loader
     * @param {?} callback
     * @return {?}
     */
    BaseDataComponent.prototype.registerObservables = /**
     * @param {?} observableKeyword
     * @param {?} loader
     * @param {?} callback
     * @return {?}
     */
    function (observableKeyword, loader, callback) {
        var _this = this;
        this.addSubscription(this[observableKeyword + "$"]
            .pipe(tap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this[loader] = true;
        })), debounceTime(this.debouceTime), tap((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this[loader] = false;
        })), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            callback(value);
        })));
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    BaseDataComponent.prototype.filter = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.params = selectedFilter(this.params, key, value);
        this.populateTable();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    BaseDataComponent.prototype.paginate = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var page = _a.page, size = _a.size;
        this.params.size = size;
        this.params.page = page;
        this.populateTable();
    };
    return BaseDataComponent;
}(BaseComponent));
/**
 * @abstract
 */
export { BaseDataComponent };
if (false) {
    /** @type {?} */
    BaseDataComponent.prototype.params;
    /** @type {?} */
    BaseDataComponent.prototype.debouceTime;
    /** @type {?} */
    BaseDataComponent.prototype.dataSize;
    /** @type {?} */
    BaseDataComponent.prototype.data;
    /** @type {?} */
    BaseDataComponent.prototype.pagination;
    /** @type {?} */
    BaseDataComponent.prototype.isBusy;
    /**
     * @abstract
     * @return {?}
     */
    BaseDataComponent.prototype.populateTable = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvaGVscGVycy9iYXNlLWRhdGEtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQUV6Qzs7OztJQUFnRCw2Q0FBYTtJQVEzRDtRQUFBLFlBQ0UsaUJBQU8sU0FLUjtRQVpNLGlCQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixVQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWpCLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFJWixLQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7O0lBQ0osQ0FBQzs7Ozs7OztJQUVELG1EQUF1Qjs7Ozs7O0lBQXZCLFVBQ0UsSUFBUyxFQUNULFlBQW9CLEVBQ3BCLFVBQWU7UUFFZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQscURBQXlCOzs7O0lBQXpCLFVBQTBCLGlCQUF5QjtRQUFuRCxpQkFJQztRQUhDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxRQUFROzs7O1FBQUUsVUFBQyxLQUFVO1lBQy9ELEtBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCx3Q0FBWTs7Ozs7SUFBWixVQUFhLEdBQVcsRUFBRSxLQUFhO1FBQ3JDLElBQUksQ0FBSSxHQUFHLE1BQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7Ozs7OztJQUVELCtDQUFtQjs7Ozs7O0lBQW5CLFVBQ0UsaUJBQXlCLEVBQ3pCLE1BQWMsRUFDZCxRQUFhO1FBSGYsaUJBcUJDO1FBaEJDLElBQUksQ0FBQyxlQUFlLENBQ2xCLElBQUksQ0FBSSxpQkFBaUIsTUFBRyxDQUFDO2FBQzFCLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ0gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLEVBQUMsRUFDRixZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUM5QixHQUFHOzs7O1FBQUMsVUFBQSxDQUFDO1lBQ0gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN2QjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWE7WUFDdkIsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUMsRUFBQyxDQUNMLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTSxrQ0FBTTs7Ozs7SUFBYixVQUFjLEdBQVcsRUFBRSxLQUFhO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUlNLG9DQUFROzs7O0lBQWYsVUFBZ0IsRUFBYztZQUFaLGNBQUksRUFBRSxjQUFJO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUE5RUQsQ0FBZ0QsYUFBYSxHQThFNUQ7Ozs7Ozs7SUE3RUMsbUNBQW1COztJQUNuQix3Q0FBeUI7O0lBQ3pCLHFDQUFvQjs7SUFDcEIsaUNBQWlCOztJQUNqQix1Q0FBdUI7O0lBQ3ZCLG1DQUFjOzs7OztJQWlFZCw0REFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi9iYXNlLWNvbXBvbmVudFwiO1xuaW1wb3J0IHsgc2VsZWN0ZWRGaWx0ZXIgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZURhdGFDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgcHVibGljIHBhcmFtczogYW55O1xuICBwdWJsaWMgZGVib3VjZVRpbWUgPSA1MDA7XG4gIHB1YmxpYyBkYXRhU2l6ZSA9IDA7XG4gIHB1YmxpYyBkYXRhID0gW107XG4gIHB1YmxpYyBwYWdpbmF0aW9uOiBhbnk7XG4gIGlzQnVzeSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhcmFtcyA9IHtcbiAgICAgIHBhZ2U6IDEsXG4gICAgICBzaXplOiAxMDAwXG4gICAgfTtcbiAgfVxuXG4gIG9uUG9wdWxhdGVUYWJsZUNvbXBsZXRlKFxuICAgIGRhdGE6IGFueSxcbiAgICB0b3RhbFJlY29yZHM6IG51bWJlcixcbiAgICBwYWdpbmF0aW9uOiBhbnlcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmRhdGFTaXplID0gdG90YWxSZWNvcmRzO1xuICAgIHRoaXMuaXNFbXB0eSA9IGRhdGEubGVuZ3RoID09PSAwO1xuICAgIHRoaXMucGFnaW5hdGlvbiA9IHBhZ2luYXRpb247XG4gICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcbiAgfVxuXG4gIHJlZ2lzdGVyU2VhcmNoT2JzZXJ2YWJsZXMob2JzZXJ2YWJsZUtleXdvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJPYnNlcnZhYmxlcyhvYnNlcnZhYmxlS2V5d29yZCwgXCJpc0J1c3lcIiwgKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyKG9ic2VydmFibGVLZXl3b3JkLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2goa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzW2Ake2tleX0kYF0ubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVFcnJvcigpIHtcbiAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xuICAgIHRoaXMuaXNFcnJvciA9IHRydWU7XG4gIH1cblxuICByZWdpc3Rlck9ic2VydmFibGVzKFxuICAgIG9ic2VydmFibGVLZXl3b3JkOiBzdHJpbmcsXG4gICAgbG9hZGVyOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6IGFueVxuICApOiB2b2lkIHtcbiAgICB0aGlzLmFkZFN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXNbYCR7b2JzZXJ2YWJsZUtleXdvcmR9JGBdXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRhcChfID0+IHtcbiAgICAgICAgICAgIHRoaXNbbG9hZGVyXSA9IHRydWU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VjZVRpbWUpLFxuICAgICAgICAgIHRhcChfID0+IHtcbiAgICAgICAgICAgIHRoaXNbbG9hZGVyXSA9IGZhbHNlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgY2FsbGJhY2sodmFsdWUpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wYXJhbXMgPSBzZWxlY3RlZEZpbHRlcih0aGlzLnBhcmFtcywga2V5LCB2YWx1ZSk7XG4gICAgdGhpcy5wb3B1bGF0ZVRhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgcG9wdWxhdGVUYWJsZSgpOiB2b2lkO1xuXG4gIHB1YmxpYyBwYWdpbmF0ZSh7IHBhZ2UsIHNpemUgfSk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1zLnNpemUgPSBzaXplO1xuICAgIHRoaXMucGFyYW1zLnBhZ2UgPSBwYWdlO1xuICAgIHRoaXMucG9wdWxhdGVUYWJsZSgpO1xuICB9XG59XG4iXX0=