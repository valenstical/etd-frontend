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
export const ScriptStore = [
    {
        name: "cloudinary",
        src: "https://widget.cloudinary.com/v2.0/global/all.js"
    },
    { name: "paystack", src: "https://js.paystack.co/v1/inline.js" }
];
export class ScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((/**
         * @param {?} script
         * @return {?}
         */
        (script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        }));
    }
    /**
     * @param {...?} scripts
     * @return {?}
     */
    load(...scripts) {
        /** @type {?} */
        const promises = [];
        scripts.forEach((/**
         * @param {?} script
         * @return {?}
         */
        script => promises.push(this.loadScript(script))));
        return Promise.all(promises);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    loadScript(name) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (!this.scripts[name].loaded) {
                /** @type {?} */
                const script = document.createElement("script");
                script.type = "text/javascript";
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    script.onreadystatechange = (/**
                     * @return {?}
                     */
                    () => {
                        if (script.readyState === "loaded" ||
                            script.readyState === "complete") {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: "Loaded" });
                        }
                    });
                }
                else {
                    script.onload = (/**
                     * @return {?}
                     */
                    () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: "Loaded" });
                    });
                }
                script.onerror = (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => resolve({ script: name, loaded: false, status: "Loaded" }));
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: "Already Loaded" });
            }
        }));
    }
}
ScriptLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
ScriptLoaderService.ctorParameters = () => [];
/** @nocollapse */ ScriptLoaderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ScriptLoaderService_Factory() { return new ScriptLoaderService(); }, token: ScriptLoaderService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScriptLoaderService.prototype.scripts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zY3JpcHQtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRTNDLHNCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYixzQkFBWTs7O0FBR2QsTUFBTSxPQUFPLFdBQVcsR0FBYztJQUNwQztRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLEdBQUcsRUFBRSxrREFBa0Q7S0FDeEQ7SUFDRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLHFDQUFxQyxFQUFFO0NBQ2pFO0FBT0QsTUFBTSxPQUFPLG1CQUFtQjtJQUc5QjtRQUZRLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFHeEIsV0FBVyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUMxQixNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7YUFDaEIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsR0FBRyxPQUFpQjs7Y0FDakIsUUFBUSxHQUFVLEVBQUU7UUFDMUIsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDbEUsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFOztzQkFDeEIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO2dCQUMvQyxNQUFNLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO2dCQUNoQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUNwQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7b0JBQ3JCLE1BQU0sQ0FBQyxrQkFBa0I7OztvQkFBRyxHQUFHLEVBQUU7d0JBQy9CLElBQ0UsTUFBTSxDQUFDLFVBQVUsS0FBSyxRQUFROzRCQUM5QixNQUFNLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFDaEM7NEJBQ0EsTUFBTSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQzs0QkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUNqQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7eUJBQzNEO29CQUNILENBQUMsQ0FBQSxDQUFDO2lCQUNIO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxNQUFNOzs7b0JBQUcsR0FBRyxFQUFFO3dCQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ2pDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDNUQsQ0FBQyxDQUFBLENBQUM7aUJBQ0g7Z0JBQ0QsTUFBTSxDQUFDLE9BQU87Ozs7Z0JBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUM5QixPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDN0QsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM5RDtpQkFBTTtnQkFDTCxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQzthQUNuRTtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbkRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztJQUVDLHNDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbnRlcmZhY2UgU2NyaXB0cyB7XG4gIG5hbWU6IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTY3JpcHRTdG9yZTogU2NyaXB0c1tdID0gW1xuICB7XG4gICAgbmFtZTogXCJjbG91ZGluYXJ5XCIsXG4gICAgc3JjOiBcImh0dHBzOi8vd2lkZ2V0LmNsb3VkaW5hcnkuY29tL3YyLjAvZ2xvYmFsL2FsbC5qc1wiXG4gIH0sXG4gIHsgbmFtZTogXCJwYXlzdGFja1wiLCBzcmM6IFwiaHR0cHM6Ly9qcy5wYXlzdGFjay5jby92MS9pbmxpbmUuanNcIiB9XG5dO1xuXG5kZWNsYXJlIGNvbnN0IGRvY3VtZW50OiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgU2NyaXB0TG9hZGVyU2VydmljZSB7XG4gIHByaXZhdGUgc2NyaXB0czogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgU2NyaXB0U3RvcmUuZm9yRWFjaCgoc2NyaXB0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2NyaXB0c1tzY3JpcHQubmFtZV0gPSB7XG4gICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgIHNyYzogc2NyaXB0LnNyY1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWQoLi4uc2NyaXB0czogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwcm9taXNlczogYW55W10gPSBbXTtcbiAgICBzY3JpcHRzLmZvckVhY2goc2NyaXB0ID0+IHByb21pc2VzLnB1c2godGhpcy5sb2FkU2NyaXB0KHNjcmlwdCkpKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICB9XG5cbiAgbG9hZFNjcmlwdChuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNjcmlwdHNbbmFtZV0ubG9hZGVkKSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICAgICAgc2NyaXB0LnNyYyA9IHRoaXMuc2NyaXB0c1tuYW1lXS5zcmM7XG4gICAgICAgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSkge1xuICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHNjcmlwdC5yZWFkeVN0YXRlID09PSBcImxvYWRlZFwiIHx8XG4gICAgICAgICAgICAgIHNjcmlwdC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgdGhpcy5zY3JpcHRzW25hbWVdLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJlc29sdmUoeyBzY3JpcHQ6IG5hbWUsIGxvYWRlZDogdHJ1ZSwgc3RhdHVzOiBcIkxvYWRlZFwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0c1tuYW1lXS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZSh7IHNjcmlwdDogbmFtZSwgbG9hZGVkOiB0cnVlLCBzdGF0dXM6IFwiTG9hZGVkXCIgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBzY3JpcHQub25lcnJvciA9IChlcnJvcjogYW55KSA9PlxuICAgICAgICAgIHJlc29sdmUoeyBzY3JpcHQ6IG5hbWUsIGxvYWRlZDogZmFsc2UsIHN0YXR1czogXCJMb2FkZWRcIiB9KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHsgc2NyaXB0OiBuYW1lLCBsb2FkZWQ6IHRydWUsIHN0YXR1czogXCJBbHJlYWR5IExvYWRlZFwiIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=