//Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { SigninComponent } from './pages/signin/signin.component';

//Routes
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SignupComponent } from './pages/signup/signup.component';



@NgModule({
  declarations: [
    SigninComponent,
    ResetPasswordComponent,
    SignupComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ],
  exports: []
})
export class AuthModule { }
