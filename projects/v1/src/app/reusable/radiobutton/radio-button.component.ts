import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-radio-button",
  templateUrl: "./radio-button.component.html"
})
export class RadioButtonComponent {
  @Input() name: string;
  @Input() value: string;
  @Input() label: string;
  @Input() selected: boolean = false;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onChange() {
    this.valueChange.emit(this.value);
  }
}
