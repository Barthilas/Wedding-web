import { Component, OnInit } from '@angular/core';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: number
  faFacebook = faFacebook;
  faWhatsApp = faWhatsapp;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
