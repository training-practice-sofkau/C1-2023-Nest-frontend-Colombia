import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '', // localhost:4200/hoja-de-vida
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'sign_in', // localhost:4200/hoja-de-vida/estudios
        component: SignInComponent,
      },
      {
        path: 'log_in', // localhost:4200/hoja-de-vida/experiencia-laboral
        component: LoginComponent,
      },
      /*{
        path: 'profile', // localhost:4200/hoja-de-vida/experiencia-laboral
        component: ProfileComponent,
      },*/
    ],
  },
  /*{
    path: '', // localhost:4200/hoja-de-vida
    component: MainComponent,
  },
  {
    path: 'sign_in',
    component: SignInComponent
  },
  {
    path: 'log_in',
    component: LoginComponent
  },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
