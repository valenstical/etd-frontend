import { Component, Input } from "@angular/core";
import { SingleDocument } from "../../models/singleDocument";
import { Department } from "../../models/department";
import { DocumentType } from "../../models/documentType";

@Component({
  selector: "app-document",
  templateUrl: "./document.component.html"
})
export class DocumentComponent {
  @Input() document: SingleDocument;
  @Input() departments: Department[];
  @Input() types: DocumentType[];

  getDepartment(departmentId: number): Department {
    return this.departments.find(department => {
      return department.id === departmentId;
    });
  }

  getType(typeId: number): DocumentType {
    return this.types.find(type => {
      return type.value === typeId.toString();
    });
  }
}
