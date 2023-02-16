import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareaRoutingModule } from './tareas.module.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarTareasComponent } from './pages/actualizarTareas/actualizarTareas.component';
import { CrearTareasComponent } from './pages/crearTareas/crearTareas.component';
import { TraerTareasComponent } from './pages/traerTareas/traerTareas.component';
import { EliminarTareasComponent } from './pages/eliminarTareas/eliminarTareas.component';
import { HttpClientModule } from '@angular/common/http';
import { IntermedioComponent } from './plantillas/intermedio/intermedio.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { LayoutsComponent } from './layouts/layouts.component';


@NgModule({
  declarations: [
    ActualizarTareasComponent,
    CrearTareasComponent,
    TraerTareasComponent,
    EliminarTareasComponent,
    LayoutsComponent,
    IntermedioComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    TareaRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ]
})
export class TareasModule {}
