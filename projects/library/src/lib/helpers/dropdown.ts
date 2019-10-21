import { HostListener } from "@angular/core";
import { BaseComponent } from "./base-component";

export class Dropdown extends BaseComponent {
  private isOpen = false;

  @HostListener("document:click")
  onClick(): void {
    this.setDropdownState(false);
  }

  toggleDropdownMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  setDropdownState(state: boolean): void {
    this.isOpen = state;
  }

  isDropdownOpen() {
    return this.isOpen;
  }
}
