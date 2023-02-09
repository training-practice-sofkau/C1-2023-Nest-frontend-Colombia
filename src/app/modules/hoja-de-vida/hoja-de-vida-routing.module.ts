// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { EstudiosComponent } from './pages/estudios/estudios.component';
import { ExperienciaLaboralComponent } from './pages/experiencia-laboral/experiencia-laboral.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {
    path: '', // localhost:4200/hoja-de-vida
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: PrincipalComponent,
      },
      {
        path: 'estudios', // localhost:4200/hoja-de-vida/estudios
        component: EstudiosComponent,
      },
      {
        path: 'experiencia-laboral', // localhost:4200/hoja-de-vida/experiencia-laboral
        component: ExperienciaLaboralComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojaDeVidaRoutingModule {}
