import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../customer.service";
import { Customer } from "../customer";
declare var $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  private username;
  private password;
  private authenticateString;
  private customer: Customer;
  private userRole: boolean = false;
  constructor(private customerService: CustomerService) {
    this.loadComponent = false;
    this.username = sessionStorage.getItem("username");
    this.password = sessionStorage.getItem("password");
    this.authenticateString = this.username + "~" + this.password;
    this.customerService.getLoggedInUser(this.authenticateString).subscribe(
      data => {
        if (data != null) {
          this.customer = data;
        } else {
          this.customer.profile =
            "https://www.w3schools.com/howto/img_avatar.png";
        }
      },
      error => {}
    );
  }
  loadComponent: boolean;
  ngOnInit() {
    $(document).ready(function() {
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
          $(".navbar").css("background", "black");
        } else {
          $(".navbar").css("background", "transparent");
        }
      });
    });
  }

  showSignUp() {
    this.loadComponent = true;
    alert(this.loadComponent);
  }
}
