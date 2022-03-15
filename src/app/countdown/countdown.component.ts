import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  private endDate = new Date('may 28, 2022 13:00:00').getTime();
  data: DateData
  expired = false;

  constructor() { }

  ngOnInit(): void {
  }

  x = setInterval(() => {
    let now = new Date().getTime();
    let diff = this.endDate - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / (1000));
    this.data = new DateData(days, hours, minutes, seconds);

    if(diff<0)
    {
      clearInterval(this.x);
      this.expired = true;
      this.data = new DateData(0, 0, 0, 0);
    }
  });
}

class DateData {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor(_days: number, _hours: number, _minutes: number, _seconds: number)
  {
    	this.days = _days;
      this.hours = _hours;
      this.minutes = _minutes;
      this.seconds = _seconds;
  }
}
