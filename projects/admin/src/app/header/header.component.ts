import { Component } from "@angular/core";
import { StoreService } from "../services/store.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(public store: StoreService, private location: Location) {}

  goBack() {
    this.location.back();
  }
}
