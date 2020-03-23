import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { ErrorModule } from './error/error.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    LoginModule,
    HomeModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
