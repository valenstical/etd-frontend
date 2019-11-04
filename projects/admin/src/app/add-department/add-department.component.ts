import { Component, OnInit } from "@angular/core";
import { StoreService } from "../services/store.service";
import { Department } from "etd-library";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "projects/library/src/public-api";
import { Router } from "@angular/router";
import { DocumentsService } from "../services/docuement.service";
import { ResponseData } from "projects/v1/src/app/models/responseData";

@Component({
  selector: "app-add-department",
  templateUrl: "./add-department.component.html"
})
export class AddDepartmentComponent extends BaseComponent implements OnInit {
  department: Department = null;
  formGroup: FormGroup = this.builder.group({
    name: ["", Validators.required],
    id: [""]
  });

  constructor(
    private store: StoreService,
    private builder: FormBuilder,
    private router: Router,
    private documentService: DocumentsService
  ) {
    super();
  }

  ngOnInit() {
    this.department = this.store.getDepartment();
    if (this.department) {
      this.store.shouldShowBackButton(true);
      this.store.setTitle(this.getTitle());
      this.initDepartment();
    } else {
      this.navigateToDepartments();
    }
  }

  initDepartment(): void {
    const { name, id } = this.department;
    this.formGroup.setValue({
      name,
      id
    });
  }

  getTitle() {
    return this.department.id ? "Edit Department" : "Add Department";
  }

  ngOnDestroy(): void {
    this.store.shouldShowBackButton(false);
  }

  navigateToDepartments(): void {
    this.router.navigateByUrl("/departments");
  }

  onSaveSuccessful(response: ResponseData) {
    this.hideAlert = false;
    this.showMessage(response.message, "", "success");
    if (this.department.id) {
      this.navigateToDepartments();
    }
    this.toggleLoaders(false);
    this.formGroup.enable();
    this.formGroup.controls.name.reset();
  }
  saveChanges(): void {
    this.toggleLoaders(true);
    this.formGroup.disable();
    this.addSubscription(
      this.documentService
        .saveData(this.formGroup.value, "departments")
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
}
