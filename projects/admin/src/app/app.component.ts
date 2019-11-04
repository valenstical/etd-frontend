import { Component } from "@angular/core";
import { StoreService } from "./services/store.service";
import { environment } from "../environments/environment";
import { HttpService } from "library";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  constructor(public store: StoreService) {
    HttpService.BASE_URL = environment.API_URL;
  }
}
