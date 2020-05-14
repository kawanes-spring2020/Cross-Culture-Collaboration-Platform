import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../customer.service";
import { Customer } from "../customer";

@Component({
  selector: "app-userprofile",
  templateUrl: "./userprofile.component.html",
  styleUrls: ["./userprofile.component.scss"]
})
export class UserprofileComponent implements OnInit {
  private customer;
  private product = null;
  private username;
  private password;
  private url;
  private authenticateString;
  constructor(private customerService: CustomerService) {
    this.username = sessionStorage.getItem("username");
    this.password = sessionStorage.getItem("password");
    this.authenticateString = this.username + "~" + this.password;
    this.customerService.getLoggedInUser(this.authenticateString).subscribe(
      data => {
        console.log("user", data);

        this.customer = data;
        this.url = this.customer.profile;
      },
      error => {}
    );
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = event => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
        this.authenticateString = this.authenticateString + "~" + this.url;
        this.customerService.attachProfile(this.authenticateString).subscribe(
          data => {
            alert("done");
          },
          error => {}
        );
      };
    }
  }
  public delete() {
    this.url = null;
  }

  ngOnInit() {}
}
