import { Component, OnInit } from '@angular/core';
import { log } from 'util';

import { User } from '../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  months: string[];
  dates: number[];
  month: string;
  date: number;
  year: number;
  user: User;

  constructor() { }

  ngOnInit() {
    this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    this.user = new User();
  }

  setMonth(): void {
    if (this.month = "Feb") {
      if (this._isLeapYear()) {
        this.dates = Array(29).fill(29).map((x, i) => i + 1);
      } else {
        this.dates = Array(28).fill(28).map((x, i) => i + 1);
      }
      console.log("Dates: " + this.dates);
    } else if ((this.month = "Apr") || (this.month = "Jun") || (this.month = "Sep") || (this.month = "Nov")) {
      this.dates = Array(30).fill(30).map((x, i) => i);
    } else {
      this.dates = Array(31).fill(31).map((x, i) => i);
    }
  }

  _isLeapYear(): boolean {
    return (this.year % 4 == 0) && (this.year % 100 != 0);
  }

}
