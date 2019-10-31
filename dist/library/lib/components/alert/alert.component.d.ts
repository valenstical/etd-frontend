import { OnInit } from "@angular/core";
export declare class AlertComponent implements OnInit {
    type: string;
    title?: string;
    message?: string | Array<string>;
    ngOnInit(): void;
}
