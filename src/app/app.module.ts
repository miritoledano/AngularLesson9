import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyListComponent } from './fly-list/fly-list.component';
import { FlyOne2Component } from './fly-one2/fly-one2.component';
import { AddFlyComponent } from './add-fly/add-fly.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FlyListComponent,
    FlyOne2Component,
    AddFlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
