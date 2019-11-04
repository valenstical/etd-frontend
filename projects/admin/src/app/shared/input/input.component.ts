import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html"
})
export class InputComponent {
  @Input() title: string;
  @Input() type: string = "text";
  @Input() name: string;
  @Input() autocomplete: string = "off";
  @Input() invalidText: string = "";
  @Input() formGroup: FormGroup;
  @Input() isInput: boolean = true;
  @Input() className: string = "";
}
