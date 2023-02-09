import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    FormComponent, LoginComponent
  ],
  imports: [
    CommonModule, SecurityRoutingModule
  ]
})
export class SecurityModule { }
