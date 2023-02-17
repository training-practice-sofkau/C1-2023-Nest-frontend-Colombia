import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ComponenteEjemploComponent } from '../../shared/components/componente-ejemplo/componente-ejemplo.component';
import { ListarComponent } from '../calendario/listar/listar.component';
import { IndexComponent } from './pages/index/index.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from "@angular/fire/compat/auth-guard";
import { RegistrarseComponent } from './components/registrarse/registrarse.component';


const redirectUnautorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectUnautorizedToItem = () => redirectLoggedInTo(['items']);

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe:redirectUnautorizedToItem}
  },
  {
    path: 'items',
    loadChildren: () =>
      import('../calendario/calendario.module').then(
        module => module.CalendarioModule
      ),
      canActivate:[AngularFireAuthGuard],
      data:{authGuardPipe:redirectUnautorizedToLogin}
  },
  {
    path: 'sign-up',
    component: RegistrarseComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}

