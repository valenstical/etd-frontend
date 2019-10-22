import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  ElementRef
} from "@angular/core";
import { Department } from "../models/department";
import { DocumentsService } from "../services/documents.service";
import { DocumentType } from "../models/documentType";
import { SingleDocument } from "../models/singleDocument";
import { BaseDataComponent } from "library";
import { Subject } from "rxjs";
import { scrollIntoView } from "projects/library/src/public-api";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html"
})
export class ContentComponent extends BaseDataComponent
  implements OnInit, OnDestroy, AfterViewInit {
  departments: Department[] = [];
  data: SingleDocument[] = [];
  isFetchingDepartments = true;
  q$: Subject<string> = new Subject<string>();

  @ViewChild("resultPane", { static: false }) resultPane: ElementRef;

  types: DocumentType[] = [
    { text: "All Categories", value: "" },
    { text: "Thesis", value: "0" },
    { text: "Dissertations", value: "1" }
  ];

  constructor(private documentService: DocumentsService) {
    super();
  }

  ngOnInit(): void {
    this.params.size = 10;
    this.registerSearchObservables("q");
    this.fetchDepartments();
  }

  ngAfterViewInit(): void {
    this.populateTable();
    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    this.clearSubscription();
  }

  filterByType(type: string): void {
    this.filter("type", type);
  }

  filterByDepartment(department: string): void {
    this.filter("departmentId", department);
  }

  filterAndSort(order: string): void {
    this.filter("order", order);
  }

  fetchDepartments(): void {
    this.addSubscription(
      this.documentService.getDepartments().subscribe({
        next: response => {
          this.departments = response.data.result;
          this.isFetchingDepartments = false;
        }
      })
    );
  }

  search(event: Event, value: string): void {
    event.preventDefault();
    this.filter("q", value);
  }

  trackDocument(index: number, document: SingleDocument): number {
    return document ? document.id : null;
  }

  populateTable(): void {
    scrollIntoView(this.resultPane.nativeElement, false);
    this.isBusy = true;
    this.isError = false;
    this.addSubscription(
      this.documentService.getDocuments(this.params).subscribe({
        next: response => {
          const { result, pagination } = response.data;
          this.onPopulateTableComplete(
            result,
            pagination.totalCount,
            pagination
          );
        },
        error: () => {
          this.handleError();
        }
      })
    );
  }
}
