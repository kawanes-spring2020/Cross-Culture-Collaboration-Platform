import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-home-display",
  templateUrl: "./home-display.component.html",
  styleUrls: ["./home-display.component.scss"]
})
export class HomeDisplayComponent implements OnInit {
  private login;
  constructor(
    private _router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit() {}
}
