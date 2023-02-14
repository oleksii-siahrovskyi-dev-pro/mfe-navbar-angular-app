import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VegaComponentModule } from "@heartlandone/vega-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VegaComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
