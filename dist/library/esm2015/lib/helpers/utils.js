/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const scrollIntoView = (/**
 * @param {?} element
 * @param {?=} smooth
 * @return {?}
 */
(element, smooth = true) => {
    element.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "start",
        inline: "nearest"
    });
});
/** @type {?} */
export const selectedFilter = (/**
 * @param {?} params
 * @param {?} key
 * @param {?=} value
 * @return {?}
 */
(params, key, value) => {
    params = Object.assign({}, params, { [key]: value, page: 1 });
    if (!value || !value.toString().trim().length) {
        delete params[key];
    }
    return params;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL2hlbHBlcnMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sY0FBYzs7Ozs7QUFBRyxDQUFDLE9BQW9CLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxFQUFFO0lBQ3BFLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3BDLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxFQUFFLFNBQVM7S0FDbEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBOztBQUVELE1BQU0sT0FBTyxjQUFjOzs7Ozs7QUFBRyxDQUM1QixNQUFjLEVBQ2QsR0FBVyxFQUNYLEtBQWMsRUFDTixFQUFFO0lBQ1YsTUFBTSxxQkFBUSxNQUFNLElBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRSxDQUFDO0lBQzlDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO1FBQzdDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNjcm9sbEludG9WaWV3ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzbW9vdGggPSB0cnVlKSA9PiB7XG4gIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe1xuICAgIGJlaGF2aW9yOiBzbW9vdGggPyBcInNtb290aFwiIDogXCJhdXRvXCIsXG4gICAgYmxvY2s6IFwic3RhcnRcIixcbiAgICBpbmxpbmU6IFwibmVhcmVzdFwiXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkRmlsdGVyID0gKFxuICBwYXJhbXM6IG9iamVjdCxcbiAga2V5OiBzdHJpbmcsXG4gIHZhbHVlPzogc3RyaW5nXG4pOiBvYmplY3QgPT4ge1xuICBwYXJhbXMgPSB7IC4uLnBhcmFtcywgW2tleV06IHZhbHVlLCBwYWdlOiAxIH07XG4gIGlmICghdmFsdWUgfHwgIXZhbHVlLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCkge1xuICAgIGRlbGV0ZSBwYXJhbXNba2V5XTtcbiAgfVxuICByZXR1cm4gcGFyYW1zO1xufTtcbiJdfQ==