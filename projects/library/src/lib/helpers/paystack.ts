declare var PaystackPop: any;
export class PaystackWidget {
  handler: any;
  constructor({ key, ref, plan, email }, onSuccess, onFailure) {
    this.handler = PaystackPop.setup({
      key,
      email,
      ref,
      plan,
      callback: function(response: any) {
        onSuccess(response);
      },
      onClose: function() {
        onFailure();
      }
    });
  }
  open(): void {
    this.handler.openIframe();
  }
}
