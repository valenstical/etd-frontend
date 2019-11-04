import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "lib-alert",
  templateUrl: "./alert.component.html"
})
export class AlertComponent implements OnInit {
  @Input() type: string = "warning";
  @Input() title?: string;
  @Input() message?: string | Array<string>;

  show: boolean = true;

  ngOnInit(): void {
    this.message = Array.isArray(this.message) ? this.message : [this.message];
  }
}
