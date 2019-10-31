import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { SharedModule } from "../shared/shared.module";
import { AlertModule } from "library";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlertModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: LoginComponent
      }
    ])
  ]
})
export class LoginModule {}
