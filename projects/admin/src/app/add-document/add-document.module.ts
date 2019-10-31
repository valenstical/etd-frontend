import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AddDocumentComponent } from "./add-document.component";

@NgModule({
  declarations: [AddDocumentComponent],
  imports: [
    CommonModule,
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
