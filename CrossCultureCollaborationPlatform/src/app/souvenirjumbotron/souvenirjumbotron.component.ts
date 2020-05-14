import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-souvenirjumbotron",
  templateUrl: "./souvenirjumbotron.component.html",
  styleUrls: ["./souvenirjumbotron.component.scss"]
})
export class SouvenirjumbotronComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  navigate() {
    this.router.navigate(["sovenir-items"]);
  }
}
