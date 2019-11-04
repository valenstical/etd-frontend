import { Component, OnInit, OnDestroy } from "@angular/core";
import { StoreService } from "../services/store.service";
import { BaseDataComponent } from "library";
import { SingleDocument } from "etd-library";
import { DocumentsService } from "../services/docuement.service";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html"
})
export class DocumentsComponent extends BaseDataComponent
  implements OnInit, OnDestroy {
  data: SingleDocument[] = [];
  modal = {
    show: false,
    showLoader: false,
    invalidText: ""
  };

  selectedDocument: SingleDocument = null;
  selectedIndex: number = -1;

  dummyDocument: SingleDocument = {
    tags: [],
    advisors: [],
    title: "",
    author: "",
    url: "",
    type: 0,
    departmentId: null,
    abstract: "",
    submissionYear: null,
    id: null
  };

  DOCUMENT_TYPE = ["Thesis", "Dessertation"];

  constructor(
    public store: StoreService,
    private documentService: DocumentsService
  ) {
    super();
  }

  populateTable(): void {
    this.addSubscription(
      this.documentService.getDocuments().subscribe({
        next: response => {
          const { result, pagination } = response.data;
          this.onPopulateTableComplete(
            result,
            pagination.totalCount,
            pagination
          );
        }
      })
    );
  }

  deleteDocument(): void {
    this.modal.showLoader = true;
    this.modal.invalidText = "";
    this.addSubscription(
      this.documentService
        .deleteData({ id: this.selectedDocument.id }, "documents")
        .subscribe({
          next: () => {
            this.modal.showLoader = false;
            this.modal.show = false;
            this.data.splice(this.selectedIndex, 1);
          },
          error: e => {
            this.modal.invalidText = `* ${e.error.message}`;
            this.modal.showLoader = false;
          }
        })
    );
  }

  setSelectedDocument(document: SingleDocument, selectedIndex: number): void {
    this.modal.show = true;
    this.modal.showLoader = false;
    this.modal.invalidText = "";
    this.selectedDocument = document;
    this.selectedIndex = selectedIndex;
  }

  trackDocument(index: number, document: SingleDocument): number {
    return document ? document.id : null;
  }
  ngOnDestroy(): void {
    this.clearSubscription();
  }

  ngOnInit(): void {
    this.store.setTitle("Documents");
    this.populateTable();
  }
}
