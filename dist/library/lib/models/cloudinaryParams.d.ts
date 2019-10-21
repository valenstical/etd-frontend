export interface CloudinaryParameters {
    cloudName: string;
    uploadPreset: string;
    cropping: boolean;
    croppingAspectRatio: number;
    croppingDefaultSelectionRatio: number;
    resourceType: string;
    clientAllowedFormats: string[];
    maxImageWidth: number;
    maxImageHeight: number;
    multiple: boolean;
    styles: any;
    buttonClass: string;
    sources: string[];
}
