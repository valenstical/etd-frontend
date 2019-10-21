import { BaseComponent } from "./base-component";
export declare class Dropdown extends BaseComponent {
    private isOpen;
    onClick(): void;
    toggleDropdownMenu(event: MouseEvent): void;
    setDropdownState(state: boolean): void;
    isDropdownOpen(): boolean;
}
