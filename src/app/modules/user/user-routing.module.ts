import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../authentication/layouts/main-layout/main-layout.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '', // localhost:4200/hoja-de-vida
    component: MainLayoutComponent,
    children: [
      {
        path: 'profile',
        component: UserProfileComponent,
      },
    ],
  },
  /*{
    path: 'profile',
    component: UserProfileComponent,
  },*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
