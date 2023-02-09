// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizartareasComponent } from './pages/actualizartareas/actualizartareas/actualizartareas.component';
import { CreartareasComponent } from './pages/creartareas/creartareas.component';
import { EliminartareasComponent } from './pages/eliminartareas/eliminartareas.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { TraertareasComponent } from './pages/traertareas/traertareas.component';

// Pages


const routes: Routes = [
  {
    path: 'crear', // localhost:4200/hoja-de-vida
    component: CreartareasComponent,
  },
  {
    path: 'actualizar', // localhost:4200/hoja-de-vida/estudios
    component: ActualizartareasComponent,
  },
  {
    path: 'traer', // localhost:4200/hoja-de-vida/experiencia-laboral
    component: TraertareasComponent,
  },
  {
    path: 'eliminar', // localhost:4200/hoja-de-vida/experiencia-laboral
    component: EliminartareasComponent,
  },
  {
    path: 'principal', // localhost:4200/hoja-de-vida/experiencia-laboral
    component: PrincipalComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojaDeVidaRoutingModule {}
