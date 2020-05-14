import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../customer.service";
import { Souvenir } from "../Souvenir";
import { Router } from "@angular/router";

@Component({
  selector: "app-souvenir-items",
  templateUrl: "./souvenir-items.component.html",
  styleUrls: ["./souvenir-items.component.scss"]
})
export class SouvenirItemsComponent implements OnInit {
  souvenir: Souvenir;
  souvenirArray;
  tempArray;
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  payout(card: Souvenir) {
    if (sessionStorage.getItem("username") === "") {
      this.router.navigate(["login"]);
    } else {
      // alert(card.itemPrice);
      this.customerService.selectedSouvenir = card;
      this.router.navigate(["pay"]);
    }
  }

  getAllSouvenirs() {
    console.log("in getAllSouvenirs");
    this.customerService.getSouvenirs().subscribe(
      data => {
        this.tempArray = new Array();
        this.souvenirArray = new Array();
        this.tempArray = data;
        for (let i = 0; i < this.tempArray.length; i++) {
          console.log(this.tempArray[i]);
          this.souvenir = new Souvenir();
          this.souvenir.id = this.tempArray[i].id;
          this.souvenir.itemName = this.tempArray[i].itemName;
          this.souvenir.itemDesc = this.tempArray[i].itemDesc;
          this.souvenir.itemPrice = this.tempArray[i].itemPrice;
          this.souvenir.itemBought = this.tempArray[i].itemsBought;
          this.souvenir.itemImage =
            "assets/resize/item" + this.tempArray[i].itemImg + ".jpg";
          this.souvenirArray.push(this.souvenir);
          console.log(this.souvenir);
        }
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.getAllSouvenirs();
  }
}
