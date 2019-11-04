import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AddDepartmentComponent } from "./add-department.component";
import { SharedModule } from "../shared/shared.module";
import { AlertModule } from "library";

@NgModule({
  declarations: [AddDepartmentComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlertModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: AddDepartmentComponent
      }
    ])
  ]
})
export class AddDepartmentModule {}
