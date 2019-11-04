import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from "@angular/core";
import {
  Router,
  RouterEvent,
  RouteConfigLoadStart,
  RouteConfigLoadEnd
} from "@angular/router";
import { BaseComponent } from "../../helpers/base-component";

@Component({
  selector: "lib-page-transition",
  templateUrl: "./page-transition.component.html",
  styleUrls: ["./page-transition.component.css"]
})
export class PageTransitionComponent extends BaseComponent
  implements OnInit, OnDestroy {
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter();

  loading = false;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    this.addSubscription(
      this.router.events.subscribe((event: RouterEvent): void => {
        if (event instanceof RouteConfigLoadStart) {
          this.loading = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.loading = false;
        }
      })
    );
  }

  ngOnDestroy() {
    this.clearSubscription();
  }
}
