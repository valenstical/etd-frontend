import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AddDepartmentComponent } from "./add-department.component";

@NgModule({
  declarations: [AddDepartmentComponent],
  imports: [
    CommonModule,
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
