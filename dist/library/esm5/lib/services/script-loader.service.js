/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
/**
 * @record
 */
function Scripts() { }
if (false) {
    /** @type {?} */
    Scripts.prototype.name;
    /** @type {?} */
    Scripts.prototype.src;
}
/** @type {?} */
export var ScriptStore = [
    {
        name: "cloudinary",
        src: "https://widget.cloudinary.com/v2.0/global/all.js"
    },
    { name: "paystack", src: "https://js.paystack.co/v1/inline.js" }
];
var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        var _this = this;
        this.scripts = {};
        ScriptStore.forEach((/**
         * @param {?} script
         * @return {?}
         */
        function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        }));
    }
    /**
     * @param {...?} scripts
     * @return {?}
     */
    ScriptLoaderService.prototype.load = /**
     * @param {...?} scripts
     * @return {?}
     */
    function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        /** @type {?} */
        var promises = [];
        scripts.forEach((/**
         * @param {?} script
         * @return {?}
         */
        function (script) { return promises.push(_this.loadScript(script)); }));
        return Promise.all(promises);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ScriptLoaderService.prototype.loadScript = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!_this.scripts[name].loaded) {
                /** @type {?} */
                var script_1 = document.createElement("script");
                script_1.type = "text/javascript";
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = (/**
                     * @return {?}
                     */
                    function () {
                        if (script_1.readyState === "loaded" ||
                            script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: "Loaded" });
                        }
                    });
                }
                else {
                    script_1.onload = (/**
                     * @return {?}
                     */
                    function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: "Loaded" });
                    });
                }
                script_1.onerror = (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return resolve({ script: name, loaded: false, status: "Loaded" });
                });
                document.getElementsByTagName("head")[0].appendChild(script_1);
            }
            else {
                resolve({ script: name, loaded: true, status: "Already Loaded" });
            }
        }));
    };
    ScriptLoaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    ScriptLoaderService.ctorParameters = function () { return []; };
    /** @nocollapse */ ScriptLoaderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ScriptLoaderService_Factory() { return new ScriptLoaderService(); }, token: ScriptLoaderService, providedIn: "root" });
    return ScriptLoaderService;
}());
export { ScriptLoaderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScriptLoaderService.prototype.scripts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zY3JpcHQtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRTNDLHNCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYixzQkFBWTs7O0FBR2QsTUFBTSxLQUFPLFdBQVcsR0FBYztJQUNwQztRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLEdBQUcsRUFBRSxrREFBa0Q7S0FDeEQ7SUFDRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLHFDQUFxQyxFQUFFO0NBQ2pFO0FBSUQ7SUFNRTtRQUFBLGlCQU9DO1FBVE8sWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUd4QixXQUFXLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBVztZQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDMUIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHO2FBQ2hCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsa0NBQUk7Ozs7SUFBSjtRQUFBLGlCQUlDO1FBSkksaUJBQW9CO2FBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtZQUFwQiw0QkFBb0I7OztZQUNqQixRQUFRLEdBQVUsRUFBRTtRQUMxQixPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQXRDLENBQXNDLEVBQUMsQ0FBQztRQUNsRSxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUF2QixpQkE4QkM7UUE3QkMsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7O29CQUN4QixRQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQy9DLFFBQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ2hDLFFBQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3BDLElBQUksUUFBTSxDQUFDLFVBQVUsRUFBRTtvQkFDckIsUUFBTSxDQUFDLGtCQUFrQjs7O29CQUFHO3dCQUMxQixJQUNFLFFBQU0sQ0FBQyxVQUFVLEtBQUssUUFBUTs0QkFDOUIsUUFBTSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQ2hDOzRCQUNBLFFBQU0sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7NEJBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDakMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO3lCQUMzRDtvQkFDSCxDQUFDLENBQUEsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxRQUFNLENBQUMsTUFBTTs7O29CQUFHO3dCQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3QkFDakMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUM1RCxDQUFDLENBQUEsQ0FBQztpQkFDSDtnQkFDRCxRQUFNLENBQUMsT0FBTzs7OztnQkFBRyxVQUFDLEtBQVU7b0JBQzFCLE9BQUEsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFBMUQsQ0FBMEQsQ0FBQSxDQUFDO2dCQUM3RCxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQU0sQ0FBQyxDQUFDO2FBQzlEO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2FBQ25FO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7OEJBbkJEO0NBcUVDLEFBcERELElBb0RDO1NBakRZLG1CQUFtQjs7Ozs7O0lBQzlCLHNDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbnRlcmZhY2UgU2NyaXB0cyB7XG4gIG5hbWU6IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTY3JpcHRTdG9yZTogU2NyaXB0c1tdID0gW1xuICB7XG4gICAgbmFtZTogXCJjbG91ZGluYXJ5XCIsXG4gICAgc3JjOiBcImh0dHBzOi8vd2lkZ2V0LmNsb3VkaW5hcnkuY29tL3YyLjAvZ2xvYmFsL2FsbC5qc1wiXG4gIH0sXG4gIHsgbmFtZTogXCJwYXlzdGFja1wiLCBzcmM6IFwiaHR0cHM6Ly9qcy5wYXlzdGFjay5jby92MS9pbmxpbmUuanNcIiB9XG5dO1xuXG5kZWNsYXJlIGNvbnN0IGRvY3VtZW50OiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgU2NyaXB0TG9hZGVyU2VydmljZSB7XG4gIHByaXZhdGUgc2NyaXB0czogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgU2NyaXB0U3RvcmUuZm9yRWFjaCgoc2NyaXB0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2NyaXB0c1tzY3JpcHQubmFtZV0gPSB7XG4gICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIHNyYzogc2NyaXB0LnNyY1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWQoLi4uc2NyaXB0czogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwcm9taXNlczogYW55W10gPSBbXTtcbiAgICBzY3JpcHRzLmZvckVhY2goc2NyaXB0ID0+IHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KHNjcmlwdCkpKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICB9XG5cbiAgbG9hZFNjcmlwdChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNjcmlwdHNbbmFtZV0ubG9hZGVkKSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICAgICAgc2NyaXB0LnNyYyA9IHRoaXMuc2NyaXB0c1tuYW1lXS5zcmM7XG4gICAgICAgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSkge1xuICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHNjcmlwdC5yZWFkeVN0YXRlID09PSBcImxvYWRlZFwiIHx8XG4gICAgICAgICAgICAgIHNjcmlwdC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgdGhpcy5zY3JpcHRzW25hbWVdLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUoeyBzY3JpcHQ6IG5hbWUsIGxvYWRlZDogdHJ1ZSwgc3RhdHVzOiBcIkxvYWRlZFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0c1tuYW1lXS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZSh7IHNjcmlwdDogbmFtZSwgbG9hZGVkOiB0cnVlLCBzdGF0dXM6IFwiTG9hZGVkXCIgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzY3JpcHQub25lcnJvciA9IChlcnJvcjogYW55KSA9PlxuICAgICAgICAgIHJlc29sdmUoeyBzY3JpcHQ6IG5hbWUsIGxvYWRlZDogZmFsc2UsIHN0YXR1czogXCJMb2FkZWRcIiB9KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHsgc2NyaXB0OiBuYW1lLCBsb2FkZWQ6IHRydWUsIHN0YXR1czogXCJBbHJlYWR5IExvYWRlZFwiIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=