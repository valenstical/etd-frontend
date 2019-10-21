import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { HttpService } from "./http.service";
import { SuperUser } from "../models/superUser";
import { LoginUser } from "../models/loginUser";
export declare class AuthService {
    private router;
    private httpService;
    private authenticatedUser;
    defaultURL: string;
    authKey: string;
    constructor(router: Router, httpService: HttpService);
    login(data: LoginUser, endpoint: string): Observable<any>;
    logout(): void;
    setAuthenticatedUser(authenticatedUser: SuperUser): void;
    getAuthenticatedUser(): SuperUser;
    private initAuthenticatedUser;
    isLoggedIn(url: string): boolean;
}
