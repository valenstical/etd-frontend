import { Component, OnInit } from "@angular/core";
import { StoreService } from "../services/store.service";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html"
})
export class DocumentsComponent implements OnInit {
  constructor(private store: StoreService) {}
  ngOnInit() {
    this.store.setTitle("Documents");
  }
}
