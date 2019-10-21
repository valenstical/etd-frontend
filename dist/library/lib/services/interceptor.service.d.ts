import { Observable } from "rxjs";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { AuthService } from "./auth.service";
export declare class InterceptorService implements HttpInterceptor {
    private authService;
    constructor(authService: AuthService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
