import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { AuthenticationService } from './services/authentication.service';
import { SharedService } from './services/shared.service';
import { AlertsService } from './services/alerts.service';
import { AlertsComponent } from './components/alerts/alerts.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    SharedService,
    AlertsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
