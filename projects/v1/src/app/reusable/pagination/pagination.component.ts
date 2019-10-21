import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Pagination, PageData } from "../../models/responseData";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html"
})
export class PaginationComponent {
  @Output() pageChange: EventEmitter<PageData> = new EventEmitter<PageData>();
  @Input() size: number = 20;
  @Input() pagination: Pagination = {
    currentCount: 0,
    currentPage: 1,
    totalCount: 0,
    lastPage: 1
  };
  isLastPage(): boolean {
    return this.pagination.currentPage === this.pagination.lastPage;
  }

  isFirstPage(): boolean {
    return this.pagination.currentPage === 1;
  }

  isNeeded(): boolean {
    return this.pagination.totalCount > this.size;
  }

  paginate(forward: boolean): void {
    const page = this.pagination.currentPage + (forward ? 1 : -1);
    this.pageChange.emit({
      page,
      size: this.size
    });
  }
}
