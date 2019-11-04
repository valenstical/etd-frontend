import { Component, OnInit, OnDestroy } from "@angular/core";
import { StoreService } from "../services/store.service";
import { BaseDataComponent } from "library";
import { Department } from "etd-library";
import { DocumentsService } from "../services/docuement.service";

@Component({
  selector: "app-departments",
  templateUrl: "./departments.component.html"
})
export class DepartmentsComponent extends BaseDataComponent
  implements OnInit, OnDestroy {
  data: Department[] = [];
  modal = {
    show: false,
    showLoader: false,
    invalidText: ""
  };

  selectedDepartment: Department = null;
  selectedIndex: number = -1;

  dummyDepartment: Department = {
    id: null,
    name: ""
  };
  constructor(
    public store: StoreService,
    private documentService: DocumentsService
  ) {
    super();
  }

  populateTable(): void {
    this.addSubscription(
      this.documentService.getDepartments().subscribe({
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

  deleteDepartment(): void {
    this.modal.showLoader = true;
    this.modal.invalidText = "";
    this.addSubscription(
      this.documentService
        .deleteData({ id: this.selectedDepartment.id }, "departments")
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

  setSelectedDepartment(department: Department, selectedIndex: number): void {
    this.modal.show = true;
    this.modal.showLoader = false;
    this.modal.invalidText = "";
    this.selectedDepartment = department;
    this.selectedIndex = selectedIndex;
  }

  trackDepartment(index: number, department: Department): number {
    return department ? department.id : null;
  }
  ngOnDestroy(): void {
    this.clearSubscription();
  }

  ngOnInit(): void {
    this.store.setTitle("Departments");
    this.populateTable();
  }
}
