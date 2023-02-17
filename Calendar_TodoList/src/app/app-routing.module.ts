import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path:'login', component:LoginComponent, canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectLoggedInToDashboard}},
  { path:'dashboard'
  ,component:DashboardComponent
  ,canActivate:[AngularFireAuthGuard]
  ,data:{authGuardPipe:redirectUnauthorizedToLogin}},
  { path:'nuevo', component: NuevoComponent },
  { path:'editar/:id', component:EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginComponent,
  DashboardComponent, NuevoComponent, EditarComponent];
