import { Injectable } from "@angular/core";
import { initialState } from "../store";
import { Department, SingleDocument } from "etd-library";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  private store: any;
  constructor() {
    this.store = { ...initialState };
  }

  //SETTERS
  public setTitle(title: string): void {
    this.store.title = title;
  }

  public shouldShowBackButton(state: boolean): void {
    this.store.showBackButton = state;
  }

  public setDepartment(department: Department): void {
    this.store.department = department;
  }

  public setDocument(document: SingleDocument): void {
    this.store.document = document;
  }

  public setCollegeId(id: number): void {
    this.store.collegeId = id;
  }

  public set(key: string, value: any): void {
    this.store[key] = value;
  }

  //GETTERS
  public getTitle(): string {
    return this.store.title;
  }

  public getDepartment(): Department {
    return this.store.department;
  }

  public getDocument(): SingleDocument {
    return this.store.document;
  }

  public getCollegeId(): string {
    return this.store.collegeId;
  }

  public isMenuShown(): boolean {
    return this.store.menuShown;
  }

  public isShowBackButton(): boolean {
    return this.store.showBackButton;
  }

  public get(key: string): any {
    return this.store[key];
  }

  //TOGGLES
  public toggleMenu(): void {
    this.store.menuShown = !this.store.menuShown;
  }
}
