import { Component } from "@angular/core";
import { StoreService } from "../services/store.service";
import { AuthService } from "library";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html"
})
export class NavigationComponent {
  constructor(public store: StoreService, public auth: AuthService) {}
}
