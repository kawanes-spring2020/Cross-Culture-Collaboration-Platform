import { Component, OnInit } from "@angular/core";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: "app-recentpost",
  templateUrl: "./recentpost.component.html",
  styleUrls: ["./recentpost.component.scss"]
})
export class RecentpostComponent implements OnInit {
  constructor() {}

  discover(evt) {
    //alert(evt.target.id);
  }
  ngOnInit() {}
}
