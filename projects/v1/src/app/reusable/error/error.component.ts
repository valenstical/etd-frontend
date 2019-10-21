import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html"
})
export class ErrorComponent {
  @Output() handleClick: EventEmitter<string> = new EventEmitter();

  onClick() {
    this.handleClick.emit(null);
  }
}
