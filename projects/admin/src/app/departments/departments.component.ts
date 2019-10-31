import { Component, OnInit } from "@angular/core";
import { StoreService } from "../services/store.service";

@Component({
  selector: "app-departments",
  templateUrl: "./departments.component.html"
})
export class DepartmentsComponent implements OnInit {
  constructor(private store: StoreService) {}

  ngOnInit() {
    this.store.setTitle("Departments");
  }
}
