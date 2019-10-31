import { Component } from "@angular/core";
import { StoreService } from "../services/store.service";

@Component({
  selector: "app-root",
  templateUrl: "./protected.component.html"
})
export class ProtectedComponent {
  constructor(public store: StoreService) {}
}
