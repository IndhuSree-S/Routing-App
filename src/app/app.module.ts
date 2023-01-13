import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginMdComponent } from './login-md/login-md.component';
import { LoginDetailsComponent } from './login/login-details/login-details.component';
import { LoginMdDetailsComponent } from './login-md/login-md-details/login-md-details.component';
import { HomeComponent } from './home/home.component';
import { FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginMdComponent,
    LoginDetailsComponent,
    LoginMdDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
