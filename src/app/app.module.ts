import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { HotelCardComponent } from './hotels/hotel-card/hotel-card.component';
import { HeroComponent } from './hero/hero.component';
import { CountdownComponent } from './countdown/countdown.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ParkingComponent } from './parking/parking.component';
import { PlacesComponent } from './places/places.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GeneralComponent } from './general/general.component';
import { ProgramComponent } from './program/program.component';
import { ProgramItemComponent } from './program/program-item/program-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HotelCardComponent,
    HeroComponent,
    CountdownComponent,
    HotelsComponent,
    ParkingComponent,
    PlacesComponent,
    FooterComponent,
    ContactsComponent,
    GeneralComponent,
    ProgramComponent,
    ProgramItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
