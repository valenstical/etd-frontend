import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./input/input.component";
import { ButtonComponent } from "./button/button.component";
import { LoaderComponent } from "./loader/loader.component";
import { ModalModule } from "./modal/modal.module";

@NgModule({
  declarations: [InputComponent, ButtonComponent, LoaderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalModule],
  exports: [
    InputComponent,
    ButtonComponent,
    LoaderComponent,
    FormsModule,
    ModalModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
