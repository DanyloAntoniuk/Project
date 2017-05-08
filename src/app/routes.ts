import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HobbiesComponent} from './hobbies/hobbies.component';
import {ContactsComponent} from './contacts/contacts.component';

const appRoutes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'hobbies' , component: HobbiesComponent },
  { path: 'contacts' , component: ContactsComponent}
];

export const routes = RouterModule.forRoot(appRoutes);
