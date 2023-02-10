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
    path: '', // localhost:4200/tareas
    component : PrincipalComponent
  },
  {
    path: 'actualizartareas', // localhost:4200/tareas/actualizartareas
    component: ActualizartareasComponent,
  },
  {
    path: 'creartareas', // localhost:4200/hoja-de-vida/creartareas
    component: CreartareasComponent,
  },
  {
    path: 'eliminartareas', // localhost:4200/hoja-de-vida/eliminartareas
    component: EliminartareasComponent,
  },

  {
    path: 'traertareas', // localhost:4200/hoja-de-vida/experiencia-laboral
    component: TraertareasComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareasRoutingModule {}
