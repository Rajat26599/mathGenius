import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MathZoneComponent } from '../math-zone/math-zone.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'math-zone',  component: MathZoneComponent },
  { path: 'contact',  component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
