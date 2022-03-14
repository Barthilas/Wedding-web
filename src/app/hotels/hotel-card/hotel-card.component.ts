import { Component, Input, OnInit } from '@angular/core';
import { faMap, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  @Input() img: string
  @Input() title: string
  @Input() text: string
  @Input() address: string
  @Input() contact: string

  faMap = faMap;
  faPhone = faPhone;

  constructor() { }

  ngOnInit(): void {
  }

}
