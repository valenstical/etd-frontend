/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";
import { BaseComponent } from "./base-component";
import { selectedFilter } from "./utils";
/**
 * @abstract
 */
export class BaseDataComponent extends BaseComponent {
    constructor() {
        super();
        this.debouceTime = 500;
        this.dataSize = 0;
        this.data = [];
        this.isBusy = true;
        this.params = {
            page: 1,
            size: 1000
        };
    }
    /**
     * @param {?} data
     * @param {?} totalRecords
     * @param {?} pagination
     * @return {?}
     */
    onPopulateTableComplete(data, totalRecords, pagination) {
        this.data = data;
        this.dataSize = totalRecords;
        this.isEmpty = data.length === 0;
        this.pagination = pagination;
        this.isBusy = false;
    }
    /**
     * @param {?} observableKeyword
     * @return {?}
     */
    registerSearchObservables(observableKeyword) {
        this.registerObservables(observableKeyword, "isBusy", (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.filter(observableKeyword, value);
        }));
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    handleSearch(key, value) {
        this[`${key}$`].next(value);
    }
    /**
     * @return {?}
     */
    handleError() {
        this.isBusy = false;
        this.isError = true;
    }
    /**
     * @param {?} observableKeyword
     * @param {?} loader
     * @param {?} callback
     * @return {?}
     */
    registerObservables(observableKeyword, loader, callback) {
        this.addSubscription(this[`${observableKeyword}$`]
            .pipe(tap((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this[loader] = true;
        })), debounceTime(this.debouceTime), tap((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this[loader] = false;
        })), distinctUntilChanged())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            callback(value);
        })));
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    filter(key, value) {
        this.params = selectedFilter(this.params, key, value);
        this.populateTable();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    paginate({ page, size }) {
        this.params.size = size;
        this.params.page = page;
        this.populateTable();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvaGVscGVycy9iYXNlLWRhdGEtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O0FBRXpDLE1BQU0sT0FBZ0IsaUJBQWtCLFNBQVEsYUFBYTtJQVEzRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBUEgsZ0JBQVcsR0FBRyxHQUFHLENBQUM7UUFDbEIsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLFNBQUksR0FBRyxFQUFFLENBQUM7UUFFakIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUlaLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCx1QkFBdUIsQ0FDckIsSUFBUyxFQUNULFlBQW9CLEVBQ3BCLFVBQWU7UUFFZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQseUJBQXlCLENBQUMsaUJBQXlCO1FBQ2pELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxRQUFROzs7O1FBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsWUFBWSxDQUFDLEdBQVcsRUFBRSxLQUFhO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQzs7Ozs7OztJQUVELG1CQUFtQixDQUNqQixpQkFBeUIsRUFDekIsTUFBYyxFQUNkLFFBQWE7UUFFYixJQUFJLENBQUMsZUFBZSxDQUNsQixJQUFJLENBQUMsR0FBRyxpQkFBaUIsR0FBRyxDQUFDO2FBQzFCLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUMsRUFBQyxFQUNGLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzlCLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdkI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUMzQixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxFQUFDLENBQ0wsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFJTSxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjs7O0lBN0VDLG1DQUFtQjs7SUFDbkIsd0NBQXlCOztJQUN6QixxQ0FBb0I7O0lBQ3BCLGlDQUFpQjs7SUFDakIsdUNBQXVCOztJQUN2QixtQ0FBYzs7Ozs7SUFpRWQsNERBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSBcIi4vYmFzZS1jb21wb25lbnRcIjtcbmltcG9ydCB7IHNlbGVjdGVkRmlsdGVyIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VEYXRhQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIHB1YmxpYyBwYXJhbXM6IGFueTtcbiAgcHVibGljIGRlYm91Y2VUaW1lID0gNTAwO1xuICBwdWJsaWMgZGF0YVNpemUgPSAwO1xuICBwdWJsaWMgZGF0YSA9IFtdO1xuICBwdWJsaWMgcGFnaW5hdGlvbjogYW55O1xuICBpc0J1c3kgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYXJhbXMgPSB7XG4gICAgICBwYWdlOiAxLFxuICAgICAgc2l6ZTogMTAwMFxuICAgIH07XG4gIH1cblxuICBvblBvcHVsYXRlVGFibGVDb21wbGV0ZShcbiAgICBkYXRhOiBhbnksXG4gICAgdG90YWxSZWNvcmRzOiBudW1iZXIsXG4gICAgcGFnaW5hdGlvbjogYW55XG4gICk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5kYXRhU2l6ZSA9IHRvdGFsUmVjb3JkcztcbiAgICB0aGlzLmlzRW1wdHkgPSBkYXRhLmxlbmd0aCA9PT0gMDtcbiAgICB0aGlzLnBhZ2luYXRpb24gPSBwYWdpbmF0aW9uO1xuICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XG4gIH1cblxuICByZWdpc3RlclNlYXJjaE9ic2VydmFibGVzKG9ic2VydmFibGVLZXl3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyT2JzZXJ2YWJsZXMob2JzZXJ2YWJsZUtleXdvcmQsIFwiaXNCdXN5XCIsICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmZpbHRlcihvYnNlcnZhYmxlS2V5d29yZCwgdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpc1tgJHtrZXl9JGBdLm5leHQodmFsdWUpO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IoKSB7XG4gICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcbiAgICB0aGlzLmlzRXJyb3IgPSB0cnVlO1xuICB9XG5cbiAgcmVnaXN0ZXJPYnNlcnZhYmxlcyhcbiAgICBvYnNlcnZhYmxlS2V5d29yZDogc3RyaW5nLFxuICAgIGxvYWRlcjogc3RyaW5nLFxuICAgIGNhbGxiYWNrOiBhbnlcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5hZGRTdWJzY3JpcHRpb24oXG4gICAgICB0aGlzW2Ake29ic2VydmFibGVLZXl3b3JkfSRgXVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YXAoXyA9PiB7XG4gICAgICAgICAgICB0aGlzW2xvYWRlcl0gPSB0cnVlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91Y2VUaW1lKSxcbiAgICAgICAgICB0YXAoXyA9PiB7XG4gICAgICAgICAgICB0aGlzW2xvYWRlcl0gPSBmYWxzZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGZpbHRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucGFyYW1zID0gc2VsZWN0ZWRGaWx0ZXIodGhpcy5wYXJhbXMsIGtleSwgdmFsdWUpO1xuICAgIHRoaXMucG9wdWxhdGVUYWJsZSgpO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHBvcHVsYXRlVGFibGUoKTogdm9pZDtcblxuICBwdWJsaWMgcGFnaW5hdGUoeyBwYWdlLCBzaXplIH0pOiB2b2lkIHtcbiAgICB0aGlzLnBhcmFtcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLnBhcmFtcy5wYWdlID0gcGFnZTtcbiAgICB0aGlzLnBvcHVsYXRlVGFibGUoKTtcbiAgfVxufVxuIl19