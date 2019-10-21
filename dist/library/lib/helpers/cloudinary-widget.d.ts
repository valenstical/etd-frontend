import { CloudinaryParameters } from "../models/cloudinaryParams";
export declare class CloudinaryWidget {
    private widget;
    constructor(handleSuccess: (params: any) => void, handleFailure: (params: any) => void, options: CloudinaryParameters);
    open(): void;
    private isUploadSuccess;
}
declare const _default: {};
export default _default;
