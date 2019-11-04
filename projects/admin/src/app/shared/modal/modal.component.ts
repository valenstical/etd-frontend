import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html"
})
export class ModalComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() title: string = "Confirm Delete";
  @Input() message: string;
  @Input() btnPositiveText = "Delete";
  @Input() btnNegetiveText = "Cancel";
  @Input() showLoader: boolean = false;
  @Input() invalidText: string;

  @Output() onCancel: EventEmitter<string> = new EventEmitter();
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  ngOnInit() {}

  handleCancel(): void {
    this.onCancel.emit();
  }

  handleClick(): void {
    this.onClick.emit();
  }
}
