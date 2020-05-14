import { Component } from "@angular/core";
import { CustomerService } from "./customer.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Cross Culture Collaboration Platform";
  private login: boolean;
  constructor(private customerService: CustomerService) {}
}
