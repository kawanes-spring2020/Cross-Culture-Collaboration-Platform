import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
//import { countryDiscover } from "./countryDiscover";
//import { CountryAspect } from "./CountryAspect";
import { CountryAspects } from "../CountryAspects";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-discover-cultures",
  templateUrl: "./discover-cultures.component.html",
  styleUrls: ["./discover-cultures.component.scss"]
})
export class DiscoverCulturesComponent implements OnInit {
  carousel = document.querySelector("#carouselId");
  carousel1: Element = document.getElementsByClassName("carousel")[0];
  cellCount: number = 5;
  selectedIndex: number = 0;
  currentIndex = 0;
  colorArray: Array<any> = [
    "color:#df744a",
    "color:#bfdbd2",
    "color:#eb6e80",
    "color:#94618e",
    "color:#d9b310"
  ];
  cardColor;
  ContentMap: Map<number, Array<Map<String, String>>>;
  mapToDisplay: Array<Map<String, String>>;
  pageTitle: String;
  constructor(private route: ActivatedRoute, private doms: DomSanitizer) {}
  ngOnInit() {
    let countAsp = new CountryAspects();
    this.route.paramMap.subscribe(params => {
      let heading = params.get("country");
      if (params.get("country") == "india") {
        //this.getIndianCultureAspects();
        this.ContentMap = countAsp.getIndianAspects();
      } else if (params.get("country") == "china") {
        this.ContentMap = countAsp.getChineseAspects();
      }
      let elem = document.getElementById("countryTitle") as HTMLElement;
      elem.innerHTML = heading.toUpperCase();
      this.displayInfo();
    });
  }
  safeCss(style) {
    console.log("in hereee");
    return this.doms.bypassSecurityTrustStyle(style);
  }
  displayInfo() {
    console.log("in here at: " + this.currentIndex);
    this.mapToDisplay = new Array<Map<String, String>>();
    this.mapToDisplay = this.ContentMap.get(this.currentIndex);
    this.pageTitle = this.ContentMap.get(5)[0].get(this.currentIndex + "");
    this.cardColor = this.colorArray[this.currentIndex];
    /*let myContainer = document.getElementById("headTitle") as HTMLElement;
    console.log(myContainer.innerHTML);
    // myContainer.innerHTML = "Food";
    myContainer.innerHTML = "food";
    var styles: HTMLCollectionOf<Element> = document.getElementsByClassName(
      "carousel__cell"
    );
    for (var i = 0; i < styles.length; i++) {
      var cardStyle = getComputedStyle(styles[i]).transform;
      console.log(cardStyle + "  " + styles[i].innerHTML);
    }*/
    //document.getElementById("headTitle").setAttribute("data-content", "Food");
  }

  rotateCarousel() {
    var angle = (this.selectedIndex / this.cellCount) * -360;
    this.carousel.setAttribute(
      "style",
      "transform:translateZ(-686px) rotateY(" + angle + "deg)"
    );
    this.displayInfo();
  }

  previousButton() {
    this.carousel = document.getElementById("carouselId");
    console.log(this.carousel);
    console.log("here");
    console.log(this.selectedIndex);
    this.selectedIndex--;
    if (this.currentIndex == 0) this.currentIndex = 4;
    else this.currentIndex--;
    console.log(this.selectedIndex);
    this.rotateCarousel();
  }

  nextButton() {
    this.carousel = document.getElementById("carouselId");
    this.selectedIndex++;
    if (this.currentIndex == 4) this.currentIndex = 0;
    else this.currentIndex++;
    this.rotateCarousel();
  }
}
