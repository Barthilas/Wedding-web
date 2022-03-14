import { Component, OnInit } from '@angular/core';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  faMobile = faMobileAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
