import { Component } from "@angular/core";
import { StoreService } from "./services/store.service";
import { environment } from "../environments/environment";
import { HttpService } from "library";

@Component({
  selector: "app-root",
  template: "<router-outlet></router-outlet>"
})
export class AppComponent {
  constructor(public store: StoreService) {
    HttpService.BASE_URL = environment.API_URL;
  }
}
