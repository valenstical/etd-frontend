import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SelectComponent } from "./select.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [SelectComponent],
  exports: [SelectComponent]
})
export class SelectModule {}
