import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentsComponent } from "./documents.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [DocumentsComponent],
  imports: [
    CommonModule,
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
