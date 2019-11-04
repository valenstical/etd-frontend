import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AddDocumentComponent } from "./add-document.component";
import { SharedModule } from "../shared/shared.module";
import { SelectModule, AlertModule } from "library";

@NgModule({
  declarations: [AddDocumentComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlertModule,
    SelectModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: AddDocumentComponent
      }
    ])
  ]
})
export class AddDocumentModule {}
