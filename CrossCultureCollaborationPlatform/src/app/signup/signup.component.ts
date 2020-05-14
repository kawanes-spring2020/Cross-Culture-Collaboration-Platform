import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";
import { stringify } from "querystring";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

function hello() {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
}

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  customer: Customer = new Customer();
  name;
  loginObject: Customer;
  username;
  password;
  authenticateString: String;
  validLogin: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customer = new Customer();
    this.loginObject = new Customer();
    if (this.customerService.isUserLoggedIn()) {
      this.router.navigate(["home"]);
    }
  }

  ngOnInit() {
    hello();
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  save() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.name = this.customer.firstname;
    this.customerService.createCustomer(this.customer).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.customer = new Customer();
    alert("SUCCESS!!");
  }

  onSubmit() {
    this.save();
  }

  validateUser() {
    //alert(this.username);
    this.loginObject.username = this.username;
    this.loginObject.password = this.password;
    this.authenticateString = this.username + "~" + this.password;
    //alert(this.authenticateString);
    this.customerService.authenticate(this.loginObject).subscribe(
      data => {
        console.log("data", data);
        if (data) {
          sessionStorage.setItem("username", this.username.toString());
          sessionStorage.setItem("password", this.password.toString());
          this.customerService.username = this.username.toString();
          this.validLogin = true;
          this.customerService.loginCheck = true;
          this.router.navigate(["home"]);

          this.customerService
            .getLoggedInUser(this.authenticateString)
            .subscribe(
              data => {
                console.log("user", data);
                this.customerService.loggedInCustomer = data;
                sessionStorage.setItem("loggedinuser", data);
              },
              error => {}
            );
        } else {
          console.log(data);
          this.validLogin = false;
          this.customerService.loginCheck = false;
          alert("Invalid Credentials");
        }
      },
      error => {}
    );
  }
}
