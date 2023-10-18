import { Component } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cols : Card[][] = [
    [
      {
        heading : "Sales",
        number : "2.382",
        percent : {
          success : false,
          number : 3.65
        },
        icon : "truck"
      },
      {
        heading : "Visitors",
        number : "14.212",
        percent : {
          success : true,
          number :  5.25
        },
        icon : "users"
      },
    ],
    [
      {
        heading : "Earnings",
        number : "$21.300",
        percent : {
          success :  true,
          number : 6.65
        },
        icon : "dollar-sign"
      },
      {
        heading : "Orders",
        number : "64",
        percent : {
          success : false,
          number :  2.25
        },
        icon : "shopping-cart"
      },
    ],
  ];
}
