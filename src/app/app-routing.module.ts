import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginMdDetailsComponent } from './login-md/login-md-details/login-md-details.component';
import { LoginMdComponent } from './login-md/login-md.component';
import { LoginDetailsComponent } from './login/login-details/login-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "login-md", component: LoginMdComponent},
  {path: "login/login-details", component: LoginDetailsComponent},
  {path: "login-md/login-md-details", component: LoginMdDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
