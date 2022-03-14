import { Component, OnInit } from '@angular/core';
import { faLink, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {


  faLink = faLink;
  faMapMarked = faMapMarkedAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
