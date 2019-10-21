import { TeardownLogic } from "rxjs";
export declare class BaseComponent {
    private subscription;
    isBusy: boolean;
    isEmpty: boolean;
    isError: boolean;
    hideAlert: boolean;
    response: {
        title: string;
        message: any[];
        type: string;
    };
    protected toggleLoaders(value: boolean): void;
    protected showMessage(message: any, title: string, type: string): void;
    clearSubscription(): void;
    addSubscription(logic: TeardownLogic): void;
}
