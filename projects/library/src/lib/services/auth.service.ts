import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
import { HttpService } from "./http.service";
import { SuperUser } from "../models/superUser";
import { LoginUser } from "../models/loginUser";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private authenticatedUser: Subject<SuperUser>;
  defaultURL: string;
  authKey = "user";

  constructor(private router: Router, private httpService: HttpService) {}

  login(data: LoginUser, endpoint: string): Observable<any> {
    return this.httpService.request(endpoint, { ...data }, "post");
  }

  logout(): void {
    this.authenticatedUser = null;
    localStorage.removeItem(this.authKey);
    this.router.navigateByUrl("/login");
  }

  setAuthenticatedUser(authenticatedUser: SuperUser): void {
    this.initAuthenticatedUser();
    this.authenticatedUser.next(authenticatedUser);
    localStorage.setItem(this.authKey, JSON.stringify(authenticatedUser));
  }

  getAuthenticatedUser(): SuperUser {
    const authenticatedUser = localStorage.getItem(this.authKey);
    if (authenticatedUser) {
      return JSON.parse(authenticatedUser);
    }
    return null;
  }

  private initAuthenticatedUser() {
    if (!this.authenticatedUser) {
      this.authenticatedUser = new Subject<SuperUser>();
    }
  }

  isLoggedIn(url: string): boolean {
    this.defaultURL = url;
    const authenticatedUser = this.getAuthenticatedUser();
    if (authenticatedUser) {
      this.initAuthenticatedUser();
      this.authenticatedUser.next(authenticatedUser);
      return true;
    }
    return false;
  }
}
