import { Subscription, TeardownLogic } from "rxjs";
import { scrollIntoView } from "./utils";
import { ElementRef, ViewChild } from "@angular/core";

export class BaseComponent {
  private subscription = new Subscription();
  isBusy = false;
  isEmpty = false;
  isError = false;
  hideAlert = true;
  response = {
    title: "",
    message: [],
    type: ""
  };

  @ViewChild("topElement", { static: false }) topElement: ElementRef;

  protected toggleLoaders(value: boolean): void {
    this.isBusy = value;
    this.hideAlert = value;
  }
  protected showMessage(message: any, title: string, type: string): void {
    this.response.message = message;
    this.response.title = title;
    this.response.type = type;

    if (this.topElement) {
      scrollIntoView(this.topElement.nativeElement, true);
    }
  }

  clearSubscription(): void {
    this.subscription.unsubscribe();
  }

  addSubscription(logic: TeardownLogic): void {
    this.subscription.add(logic);
  }

  private arrayValues(array: any): string | Array<string> {
    const errorGroup = [];
    if (Array.isArray(array)) {
      array.forEach((element: any) => {
        errorGroup.push(Object.values(element));
      });
    }
    return errorGroup;
  }

  protected handleError(err: any): void {
    this.toggleLoaders(false);
    let {
      error: { data, message }
    } = err;
    data = this.arrayValues(data);
    const title = data.length === 0 ? "" : message;
    message = title ? data : message;
    this.showMessage(message, title, "danger");
  }
}
