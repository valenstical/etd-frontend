import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentsComponent } from "./documents.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [DocumentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        pathMatch: "full",
        component: DocumentsComponent
      }
    ])
  ]
})
export class DocumentsModule {}
