import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpService } from './data.service';

const appRoutes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'hobbies' , component: HobbiesComponent },
  { path: 'contacts' , component: ContactsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HobbiesComponent,
    ContactsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
