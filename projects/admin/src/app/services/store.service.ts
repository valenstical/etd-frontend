import { Injectable } from "@angular/core";
import { initialState } from "../store";

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

  public set(key: string, value: any): void {
    this.store[key] = value;
  }

  //GETTERS
  public getTitle(): string {
    return this.store.title;
  }

  public isMenuShown(): boolean {
    return this.store.menuShown;
  }

  public get(key: string): any {
    return this.store[key];
  }

  //TOGGLES
  public toggleMenu(): void {
    this.store.menuShown = !this.store.menuShown;
  }
}
