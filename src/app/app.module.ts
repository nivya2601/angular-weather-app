import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FutureComponent } from './future/future.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodayComponent } from './today/today.component';
@NgModule({
  declarations: [
    AppComponent,
    FutureComponent,
    TodayComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
