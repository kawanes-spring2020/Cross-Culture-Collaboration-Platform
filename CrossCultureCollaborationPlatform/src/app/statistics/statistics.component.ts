import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../customer.service";
import { Souvenir } from "../Souvenir";
import { Customer } from "../Customer";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"]
})
export class StatisticsComponent implements OnInit {
  public chartType: string = "bar";
  souvenir: Souvenir;
  customer: Customer;
  flag: boolean = false;
  souvenirArray;
  userArray;
  tempArray;
  yaxis: Array<number>;
  xaxis: Array<String>;
  userRegYearMap: Map<String, number>;
  public chartDatasets: Array<any> = [{ data: [], label: "" }];

  public chartLabels: Array<any> = [];
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 2
    }
  ];

  public chartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 20,
            stepSize: 2,
            beginAtZero: true,
            callback: function(value) {
              if (value % 1 === 0) {
                return value;
              }
            }
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 0.4
        }
      ]
    }
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}

  usersRegistered() {
    this.customerService.getAllUsers().subscribe(
      data => {
        this.yaxis = new Array();
        this.xaxis = new Array();
        this.userArray = new Array();
        this.tempArray = data;
        this.userRegYearMap = new Map<String, number>();
        for (let i = 0; i < this.tempArray.length; i++) {
          console.log("year: " + this.tempArray[i].year);
          if (this.userRegYearMap.has(this.tempArray[i].year)) {
            let currentUserCnt = this.userRegYearMap.get(
              this.tempArray[i].year
            );
            currentUserCnt++;
            this.userRegYearMap.set(this.tempArray[i].year, currentUserCnt);
          } else {
            this.userRegYearMap.set(this.tempArray[i].year, 1);
          }
        }

        this.userRegYearMap.forEach((value: number, key: String) => {
          this.yaxis.push(value);
          this.xaxis.push(key);
        });
        this.chartLabels = this.xaxis;
        console.log(this.chartDatasets);
        console.log(this.chartLabels);
        this.chartDatasets[0].label =
          "Number of Users Registered According to Year";
        this.chartDatasets[0].data = this.yaxis;
        this.flag = true;
        console.log("000 : 000 " + this.chartDatasets[0].data);
      },
      error => console.log(error)
    );
  }

  getSouvenirsBought() {
    this.customerService.getSouvenirs().subscribe(
      data => {
        this.yaxis = new Array();
        this.xaxis = new Array();
        this.souvenirArray = new Array();
        this.tempArray = data;
        for (let i = 0; i < this.tempArray.length; i++) {
          this.yaxis.push(this.tempArray[i].itemsBought);
          this.xaxis.push(this.tempArray[i].itemName);
        }
        this.chartLabels = this.xaxis;
        this.chartDatasets[0].label = "Souvenirs Bought";
        this.chartDatasets[0].data = this.yaxis;
        this.flag = true;
        console.log(this.chartDatasets);
      },
      error => console.log(error)
    );
  }

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    console.log("HEY>>>>>>>" + this.chartDatasets);
  }
}
