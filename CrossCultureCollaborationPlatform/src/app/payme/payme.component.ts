import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { CustomerService } from "../customer.service";
import { Souvenir } from "../Souvenir";
import { Customer } from "../customer";

declare var paypal;

@Component({
  selector: "app-payme",
  templateUrl: "./payme.component.html",
  styleUrls: ["./payme.component.scss"]
})
export class PaymeComponent implements OnInit {
  private username;
  private password;
  private authenticateString;
  private customer: Customer;
  @ViewChild("paypal", { static: true }) paypalElement: ElementRef;
  constructor(private customerService: CustomerService) {
    this.product = this.customerService.selectedSouvenir;
    this.username = sessionStorage.getItem("username");
    this.password = sessionStorage.getItem("password");
    this.authenticateString = this.username + "~" + this.password;
    this.customerService.getLoggedInUser(this.authenticateString).subscribe(
      data => {
        if (data != null) {
          this.customer = data;
        }
      },
      error => {}
    );
  }
  product: Souvenir;

  paidFor = false;

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.product.itemDesc,
                amount: {
                  currency_code: "USD",
                  value: this.product.itemPrice
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);

          this.customer.souvenirbought = this.product.itemImage;
          alert(this.customer.id);
          this.customerService.updateSoldCount(this.product).subscribe(
            data => {
              console.log("user", data);

              alert("count updated");
            },
            error => {}
          );
          this.customerService.updateSoldCount1(this.customer).subscribe(
            data => {
              alert("count updated");
            },
            error => {}
          );
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }
}
