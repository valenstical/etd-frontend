import { CloudinaryParameters } from "../models/cloudinaryParams";

declare var window: any;

const defaultFunc = (params: any) => {};

export class CloudinaryWidget {
  private widget: any;
  constructor(
    handleSuccess = defaultFunc,
    handleFailure = defaultFunc,
    options: CloudinaryParameters
  ) {
    this.widget = window.cloudinary.createUploadWidget(
      options,
      (error: any, result: any) => {
        this.isUploadSuccess(error, result)
          ? handleSuccess(result.info.secure_url)
          : handleFailure(error);
      }
    );
  }
  public open() {
    this.widget.open();
  }

  private isUploadSuccess(error: any, result: any) {
    return !error && result && result.event === "success";
  }
}

export default {};
