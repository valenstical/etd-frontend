import { Component } from "@angular/core";
import { scrollIntoView } from "library";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html"
})
export class HeroComponent {
  scroll(element: HTMLElement) {
    scrollIntoView(element, true);
  }
}
