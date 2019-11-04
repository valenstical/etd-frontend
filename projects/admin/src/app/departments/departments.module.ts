import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DepartmentsComponent } from "./departments.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [DepartmentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: DepartmentsComponent
      }
    ])
  ]
})
export class DepartmentsModule {}
