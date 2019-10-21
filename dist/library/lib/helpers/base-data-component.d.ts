import { BaseComponent } from "./base-component";
export declare abstract class BaseDataComponent extends BaseComponent {
    params: any;
    debouceTime: number;
    dataSize: number;
    data: any[];
    pagination: any;
    isBusy: boolean;
    constructor();
    onPopulateTableComplete(data: any, totalRecords: number, pagination: any): void;
    registerSearchObservables(observableKeyword: string): void;
    handleSearch(key: string, value: string): void;
    handleError(): void;
    registerObservables(observableKeyword: string, loader: string, callback: any): void;
    filter(key: string, value: string): void;
    abstract populateTable(): void;
    paginate({ page, size }: {
        page: any;
        size: any;
    }): void;
}
