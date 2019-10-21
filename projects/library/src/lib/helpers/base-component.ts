import { Subscription, TeardownLogic } from "rxjs";

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

  protected toggleLoaders(value: boolean): void {
    this.isBusy = value;
    this.hideAlert = value;
  }
  protected showMessage(message: any, title: string, type: string): void {
    this.response.message = message;
    this.response.title = title;
    this.response.type = type;
  }

  clearSubscription(): void {
    this.subscription.unsubscribe();
  }

  addSubscription(logic: TeardownLogic): void {
    this.subscription.add(logic);
  }
}
