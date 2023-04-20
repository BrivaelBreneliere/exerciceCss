import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomelanderComponent } from './homelander/homelander.component';
import { WhiteboxComponent } from './whitebox/whitebox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomelanderComponent,
    WhiteboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [HomelanderComponent]
})
export class AppModule { }
