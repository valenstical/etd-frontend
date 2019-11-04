import { Component, OnInit, OnDestroy } from "@angular/core";
import { StoreService } from "../services/store.service";
import { AuthService, BaseComponent } from "library";
import { environment } from "../../environments/environment";
import { Router, RouterEvent, RouteConfigLoadStart } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html"
})
export class NavigationComponent extends BaseComponent
  implements OnInit, OnDestroy {
  public PUBLIC_SITE = environment.PUBLIC_SITE;
  constructor(
    public store: StoreService,
    public auth: AuthService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.addSubscription(
      this.router.events.subscribe(() => {
        this.store.toggleMenu();
      })
    );
  }
  ngOnDestroy(): void {
    this.clearSubscription();
  }
}
