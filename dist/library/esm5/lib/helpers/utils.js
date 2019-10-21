/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
export var scrollIntoView = (/**
 * @param {?} element
 * @param {?=} smooth
 * @return {?}
 */
function (element, smooth) {
    if (smooth === void 0) { smooth = true; }
    element.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "start",
        inline: "nearest"
    });
});
/** @type {?} */
export var selectedFilter = (/**
 * @param {?} params
 * @param {?} key
 * @param {?=} value
 * @return {?}
 */
function (params, key, value) {
    var _a;
    params = tslib_1.__assign({}, params, (_a = {}, _a[key] = value, _a.page = 1, _a));
    if (!value || !value.toString().trim().length) {
        delete params[key];
    }
    return params;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxLQUFPLGNBQWM7Ozs7O0FBQUcsVUFBQyxPQUFvQixFQUFFLE1BQWE7SUFBYix1QkFBQSxFQUFBLGFBQWE7SUFDaEUsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDcEMsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUUsU0FBUztLQUNsQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUE7O0FBRUQsTUFBTSxLQUFPLGNBQWM7Ozs7OztBQUFHLFVBQzVCLE1BQWMsRUFDZCxHQUFXLEVBQ1gsS0FBYzs7SUFFZCxNQUFNLHdCQUFRLE1BQU0sZUFBRyxHQUFHLElBQUcsS0FBSyxFQUFFLE9BQUksR0FBRSxDQUFDLE1BQUUsQ0FBQztJQUM5QyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY3JvbGxJbnRvVmlldyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgc21vb3RoID0gdHJ1ZSkgPT4ge1xuICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICBiZWhhdmlvcjogc21vb3RoID8gXCJzbW9vdGhcIiA6IFwiYXV0b1wiLFxuICAgIGJsb2NrOiBcInN0YXJ0XCIsXG4gICAgaW5saW5lOiBcIm5lYXJlc3RcIlxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZEZpbHRlciA9IChcbiAgcGFyYW1zOiBvYmplY3QsXG4gIGtleTogc3RyaW5nLFxuICB2YWx1ZT86IHN0cmluZ1xuKTogb2JqZWN0ID0+IHtcbiAgcGFyYW1zID0geyAuLi5wYXJhbXMsIFtrZXldOiB2YWx1ZSwgcGFnZTogMSB9O1xuICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS50b1N0cmluZygpLnRyaW0oKS5sZW5ndGgpIHtcbiAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gIH1cbiAgcmV0dXJuIHBhcmFtcztcbn07XG4iXX0=