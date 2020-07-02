import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MathZoneComponent } from './math-zone/math-zone.component';
import { ContactComponent } from './contact/contact.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AlgebraComponent } from './algebra/algebra.component';
import { GeometryComponent } from './geometry/geometry.component';
import { TwoDimComponent } from './two-dim/two-dim.component';
import { ThreeDimComponent } from './three-dim/three-dim.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ArithmeticComponent } from './arithmetic/arithmetic.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MathZoneComponent,
    ContactComponent,
    HeaderComponent,
    AlgebraComponent,
    GeometryComponent,
    TwoDimComponent,
    ThreeDimComponent,
    SidenavComponent,
    ArithmeticComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
