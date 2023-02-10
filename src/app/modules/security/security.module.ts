import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { FormSignupComponent } from './components/form-signup/form-signup.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent, LoginComponent, FormSignupComponent, FormSignupComponent
  ],
  imports: [
    CommonModule, SecurityRoutingModule, FormsModule
  ]
})
export class SecurityModule { }
