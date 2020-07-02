import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MathZoneComponent } from '../math-zone/math-zone.component';
import { ContactComponent } from '../contact/contact.component';

import { AlgebraComponent } from '../algebra/algebra.component';
import { ArithmeticComponent } from '../arithmetic/arithmetic.component';
import { GeometryComponent } from '../geometry/geometry.component';
import { TwoDimComponent } from '../two-dim/two-dim.component';
import { ThreeDimComponent } from '../three-dim/three-dim.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'math-zone', redirectTo: '/math-zone/algebra', pathMatch: 'full' },
  { path: 'contact',  component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'math-zone/algebra',  component: AlgebraComponent },
  { path: 'math-zone/arithmetic',  component: ArithmeticComponent },
  { path: 'math-zone/geometry',  component: GeometryComponent },
  { path: 'math-zone/2d-shapes',  component: TwoDimComponent },
  { path: 'math-zone/3d-shapes',  component: ThreeDimComponent },

];
