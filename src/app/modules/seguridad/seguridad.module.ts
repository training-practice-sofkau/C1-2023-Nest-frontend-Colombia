import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
