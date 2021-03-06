import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html"
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() text: string = "Save Changes";
  @Input() showLoader: boolean = false;
  @Input() maxWidth: boolean = false;
}
