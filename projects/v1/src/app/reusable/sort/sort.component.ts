import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from "@angular/core";
import { distinctUntilChanged } from "rxjs/operators";
import { Dropdown } from "library";
import { sortType } from "../../models/documentType";
import { Subject } from "rxjs";

@Component({
  selector: "app-sort",
  templateUrl: "./sort.component.html"
})
export class SortComponent extends Dropdown implements OnInit, OnDestroy {
  sortOptions: sortType[] = [
    { value: "title,ASC", text: "Alphabetical" },
    { value: "submissionYear,DESC", text: "Most recent" },
    { value: "downloads,DESC", text: "Most downloads" }
  ];

  item$: Subject<string> = new Subject<string>();
  selectedItem = this.sortOptions[0].value;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.addSubscription(
      this.item$.pipe(distinctUntilChanged()).subscribe(value => {
        this.selectedItem = value;
        this.valueChange.emit(value);
      })
    );
  }

  onItemSelected(item: string): void {
    this.item$.next(item);
    this.setDropdownState(false);
  }

  isSelected(item: string) {
    return item === this.selectedItem;
  }

  ngOnDestroy(): void {
    this.clearSubscription();
  }
}
