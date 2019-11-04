import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { BaseComponent, AuthService } from "library";
import { StoreService } from "../services/store.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent extends BaseComponent implements OnInit, OnDestroy {
  public formGroup: FormGroup = this.formBuilder.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: StoreService
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigateByUrl("/documents");
    }
  }
  ngOnDestroy(): void {
    this.clearSubscription();
  }

  handleLogin() {
    this.toggleLoaders(true);
    this.formGroup.disable();
    this.addSubscription(
      this.authService.login(this.formGroup.value, "users/login").subscribe(
        response => {
          const { data } = response;
          this.hideAlert = false;
          this.showMessage(
            "Redirecting you...",
            "Log in successful",
            "success"
          );
          this.authService.setAuthenticatedUser(data);
          this.store.setCollegeId(data.collegeId);
          this.router.navigateByUrl("/documents");
        },
        error => {
          this.handleError(error);
          this.formGroup.enable();
        }
      )
    );
  }
}
