import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "library";

import { ProtectedComponent } from "./protected/protected.component";

const routes: Routes = [
  {
    path: "login",
    pathMatch: "full",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "",
    canActivate: [AuthGuard],
    component: ProtectedComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "/documents"
      },
      {
        path: "documents",
        pathMatch: "full",
        loadChildren: () =>
          import("./documents/documents.module").then(m => m.DocumentsModule)
      },
      {
        path: "departments",
        pathMatch: "full",
        loadChildren: () =>
          import("./departments/departments.module").then(
            m => m.DepartmentsModule
          )
      },
      {
        path: "departments/edit/:id",
        pathMatch: "full",
        loadChildren: () =>
          import("./add-department/add-department.module").then(
            m => m.AddDepartmentModule
          )
      },
      {
        path: "documents/edit/:id",
        pathMatch: "full",
        loadChildren: () =>
          import("./add-document/add-document.module").then(
            m => m.AddDocumentModule
          )
      },

      {
        path: "departments/create",
        pathMatch: "full",
        loadChildren: () =>
          import("./add-department/add-department.module").then(
            m => m.AddDepartmentModule
          )
      },
      {
        path: "documents/create",
        pathMatch: "full",
        loadChildren: () =>
          import("./add-document/add-document.module").then(
            m => m.AddDocumentModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      useHash: true,
      urlUpdateStrategy: "eager"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
