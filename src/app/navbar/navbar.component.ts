import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapsed = false;
  faFacebook = faFacebook;
  faWhatsApp = faWhatsapp;
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {

  }

  onShowNav($event: any)
  {
    this.collapsed = !this.collapsed;
  }

}
