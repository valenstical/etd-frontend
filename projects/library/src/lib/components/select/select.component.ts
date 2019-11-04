import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "lib-select",
  templateUrl: "./select.component.html"
})
export class SelectComponent {
  @Input() name: string;
  @Input() title?: string;
  @Input() data: any[];
  @Input() keyValue: string;
  @Input() keyText: string;
  @Input() formGroup: FormGroup;
  @Input() invalidText?: string;
  @Input() disabled = false;
  @Input() showLoader = false;
  @Input() imgSrc: string;
  @Input() className: string = "";

  @Output() onChange?: EventEmitter<any> = new EventEmitter<any>();

  handleChange(event: any) {
    this.onChange.emit(event);
  }
}
