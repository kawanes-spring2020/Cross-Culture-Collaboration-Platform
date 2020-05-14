import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CustomerService } from "./customer.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    if (!this.customerService.isUserLoggedIn()) {
      this.router.navigate(["login"]);
      return false;
    }
    // this.router.navigate(["home"]);
    return true;
  }

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}
}
