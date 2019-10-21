import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { AuthService } from "./auth.service";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authenticatedUser = this.authService.getAuthenticatedUser();
    if (authenticatedUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authenticatedUser.token}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err.status === 401) {
          this.authService.logout();
        }
        return throwError(err);
      })
    );
  }
}
