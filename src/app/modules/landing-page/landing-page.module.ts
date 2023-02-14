import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPgeComponent } from './pages/landing-pge/landing-pge.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LoginComponent } from '../authentication/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LandingPgeComponent,
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LandingPageModule { }
