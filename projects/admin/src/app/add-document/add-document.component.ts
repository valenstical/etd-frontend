import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from "@angular/core";
import { StoreService } from "../services/store.service";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ResponseData, SingleDocument } from "etd-library";
import { BaseComponent, CloudinaryWidget, ScriptLoaderService } from "library";
import { DocumentsService } from "../services/docuement.service";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-add-document",
  templateUrl: "./add-document.component.html"
})
export class AddDocumentComponent extends BaseComponent
  implements OnInit, OnDestroy {
  document: SingleDocument = null;
  department = {
    data: [],
    isBusy: true
  };
  formGroup: FormGroup = this.builder.group({
    title: ["", Validators.required],
    author: ["", Validators.required],
    submissionYear: [
      "",
      [Validators.required, Validators.max(9999), Validators.min(1000)]
    ],
    type: ["0"],
    departmentId: ["", Validators.required],
    advisors: [""],
    abstract: ["", Validators.required],
    tags: [""],
    url: [""],
    id: [""]
  });

  widget: any;
  uploading: boolean = false;

  @ViewChild("topElement", { static: false }) topElement: ElementRef;

  constructor(
    private store: StoreService,
    private builder: FormBuilder,
    private router: Router,
    private documentService: DocumentsService,
    private scriptLoaderService: ScriptLoaderService
  ) {
    super();
  }

  ngOnInit() {
    this.document = this.store.getDocument();
    if (this.document) {
      this.store.shouldShowBackButton(true);
      this.store.setTitle(this.getTitle());
      this.initDocument();
      this.initDepartments();
    } else {
      this.navigateToDocuments();
    }
  }

  initDocument(): void {
    this.formGroup.setValue({
      title: this.document.title,
      author: this.document.author,
      submissionYear: this.document.submissionYear,
      type: `${this.document.type}`,
      departmentId: this.document.departmentId || "",
      advisors: this.document.advisors.toString(),
      abstract: this.document.abstract,
      tags: this.document.tags.toString(),
      url: this.document.url,
      id: this.document.id
    });
  }

  initDepartments() {
    this.addSubscription(
      this.documentService.getDepartments().subscribe({
        next: response => {
          this.department.data = response.data.result;
          this.department.isBusy = false;
        }
      })
    );
  }

  getTitle() {
    return this.document.id ? "Edit Document" : "Add Document";
  }

  ngOnDestroy(): void {
    this.store.shouldShowBackButton(false);
    this.clearSubscription();
  }

  navigateToDocuments(): void {
    this.router.navigateByUrl("/documents");
  }

  onSaveSuccessful(response: ResponseData) {
    if (this.document.id) {
      return this.navigateToDocuments();
    }
    this.formGroup.enable();
    this.formGroup.reset();
    this.initDocument();

    this.showMessage(response.message, "", "success");
    this.toggleLoaders(false);
  }
  saveChanges(): void {
    this.toggleLoaders(true);
    this.formGroup.disable();
    this.addSubscription(
      this.documentService
        .saveData(this.formGroup.value, "documents")
        .subscribe(
          response => {
            this.onSaveSuccessful(response);
          },
          error => {
            this.handleError(error);
            this.formGroup.enable();
          }
        )
    );
  }

  configureWidget(): void {
    this.widget = new CloudinaryWidget(
      (url: string | any) => {
        this.formGroup.controls.url.setValue(url);
        this.uploading = false;
      },
      () => {
        this.uploading = false;
      },
      {
        cloudName: environment.CLOUDINARY_KEY,
        uploadPreset: "etdpreset",
        clientAllowedFormats: ["pdf"],
        multiple: false,
        sources: ["local"]
      } as any
    );
  }

  uploadFile() {
    this.uploading = true;
    if (!this.widget) {
      this.scriptLoaderService.load("cloudinary").then(_ => {
        this.configureWidget();
        this.widget.open();
      });
    } else {
      this.widget.open();
    }
  }
}
