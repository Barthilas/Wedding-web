import { Component, OnInit } from '@angular/core';
import { faMale, faFemale, faCampground, faMapMarkerAlt, faScroll } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  faMale = faMale;
  faFemale = faFemale;
  faCampground = faCampground;
  faMapMarkerAlt = faMapMarkerAlt;
  faScroll = faScroll;

  constructor() { }

  ngOnInit(): void {
  }

}
