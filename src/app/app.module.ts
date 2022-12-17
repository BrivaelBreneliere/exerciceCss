import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomelanderComponent } from './homelander/homelander.component';

@NgModule({
  declarations: [
    AppComponent,
    HomelanderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomelanderComponent]
})
export class AppModule { }
