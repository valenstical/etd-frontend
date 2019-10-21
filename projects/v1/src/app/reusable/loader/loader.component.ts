import { Component, Input } from "@angular/core";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html"
})
export class LoaderComponent {
  @Input() count = [1, 1, 1];
}
