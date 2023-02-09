import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //carga perezosa del auth m=modulo
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
  },
  {
    //carga perezosa del main
    path: 'dashboard',
    loadChildren: () =>
      import('../dashoard/dashoard.module').then(m => m.DashoardModule),
  },
  {
    //DESPUES DEL LOCALHOST ME REDIRIGE A LA PAGINA DESEADA ** EN ESTE CASO MODULE
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
