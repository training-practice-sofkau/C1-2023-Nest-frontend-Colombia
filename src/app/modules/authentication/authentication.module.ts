import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [
    SignInComponent,
    MainComponent,
    LoginComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
  ]
})
export class AuthenticationModule { }
