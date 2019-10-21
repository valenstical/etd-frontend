import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";
import { BaseComponent } from "./base-component";
import { selectedFilter } from "./utils";

export abstract class BaseDataComponent extends BaseComponent {
  public params: any;
  public debouceTime = 500;
  public dataSize = 0;
  public data = [];
  public pagination: any;
  isBusy = true;

  constructor() {
    super();
    this.params = {
      page: 1,
      size: 1000
    };
  }

  onPopulateTableComplete(
    data: any,
    totalRecords: number,
    pagination: any
  ): void {
    this.data = data;
    this.dataSize = totalRecords;
    this.isEmpty = data.length === 0;
    this.pagination = pagination;
    this.isBusy = false;
  }

  registerSearchObservables(observableKeyword: string): void {
    this.registerObservables(observableKeyword, "isBusy", (value: any) => {
      this.filter(observableKeyword, value);
    });
  }

  handleSearch(key: string, value: string): void {
    this[`${key}$`].next(value);
  }

  handleError() {
    this.isBusy = false;
    this.isError = true;
  }

  registerObservables(
    observableKeyword: string,
    loader: string,
    callback: any
  ): void {
    this.addSubscription(
      this[`${observableKeyword}$`]
        .pipe(
          tap(_ => {
            this[loader] = true;
          }),
          debounceTime(this.debouceTime),
          tap(_ => {
            this[loader] = false;
          }),
          distinctUntilChanged()
        )
        .subscribe((value: string) => {
          callback(value);
        })
    );
  }

  public filter(key: string, value: string): void {
    this.params = selectedFilter(this.params, key, value);
    this.populateTable();
  }

  public abstract populateTable(): void;

  public paginate({ page, size }): void {
    this.params.size = size;
    this.params.page = page;
    this.populateTable();
  }
}
