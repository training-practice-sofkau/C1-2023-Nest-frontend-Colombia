import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    SignInComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
  ]
})
export class AuthenticationModule { }
