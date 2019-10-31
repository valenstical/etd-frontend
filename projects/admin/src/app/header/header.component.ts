import { Component } from "@angular/core";
import { StoreService } from "../services/store.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(public store: StoreService) {}
}
