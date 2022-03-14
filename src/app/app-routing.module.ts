import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'secret', component: PageNotFoundComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
