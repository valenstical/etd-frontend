import { OnInit, OnDestroy, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { BaseComponent } from "../../helpers/base-component";
export declare class PageTransitionComponent extends BaseComponent implements OnInit, OnDestroy {
    private router;
    activeChange: EventEmitter<boolean>;
    loading: boolean;
    constructor(router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
