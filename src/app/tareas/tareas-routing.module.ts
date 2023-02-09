// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { ActualizartareasComponent } from './pages/actualizartareas/actualizartareas.component';
import { CreartareasComponent } from './pages/creartareas/creartareas.component';
import { EliminartareasComponent } from './pages/eliminartareas/eliminartareas.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { TraertareasComponent } from './pages/traertareas/traertareas.component';

// Pages


const routes: Routes = [
  {
    path: 'actualizartareas', // localhost:4200/hoja-de-vida
    component: CreartareasComponent,
  },
  {
    path: 'creartareas', // localhost:4200/hoja-de-vida/estudios
    component: ActualizartareasComponent,
  },
  {
    path: 'eliminartareas', // localhost:4200/hoja-de-vida/experiencia-laboral
    component: TraertareasComponent,
  },
  {
    path: 'principal', // localhost:4200/hoja-de-vida/experiencia-laboral
    component: EliminartareasComponent,
  },
  {
    path: 'traertaareas', // localhost:4200/hoja-de-vida/experiencia-laboral
    component: PrincipalComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareasRoutingModule {}
