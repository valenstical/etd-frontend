import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./input/input.component";
import { ButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [InputComponent, ButtonComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, ButtonComponent, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
