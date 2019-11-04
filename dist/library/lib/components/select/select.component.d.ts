import { EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
export declare class SelectComponent {
    name: string;
    title?: string;
    data: any[];
    keyValue: string;
    keyText: string;
    formGroup: FormGroup;
    invalidText?: string;
    disabled: boolean;
    showLoader: boolean;
    imgSrc: string;
    className: string;
    onChange?: EventEmitter<any>;
    handleChange(event: any): void;
}
