/* eslint-disable prettier/prettier */
/**
 * Componente que representa la página principal del módulo de Lista de Tareas.
 *
 * @remarks
 * Este componente muestra la lista de tareas del usuario y proporciona opciones para agregar nuevos elementos, editar elementos existentes y eliminar elementos.
 *
 * @example
 * ```
 * <sofka-principal></sofka-principal>
 * ```
 */
// Libraries
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
// Routes


import { ToDoListRoutingModule } from './todo-list-routing.module';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NewItemComponent } from './pages/new-item/new-item.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
import { ViewItemComponent } from './pages/view-item/view-item.component';
import { DeleteItemComponent } from './pages/delete-item/delete-item.component';
import { HttpClientModule } from '@angular/common/http';

import { LocalStorageService } from 'ngx-webstorage';

//import { AppModule } from '../main/app.module';
import { FirstWordPipe } from './pipes/first-word/first-word.pipe';

@NgModule({
  declarations: [
    PrincipalComponent,
    NewItemComponent,
    HeaderComponent,
    FooterComponent,
    EditItemComponent,
    ViewItemComponent,
    DeleteItemComponent,
    FirstWordPipe,
  ],
  imports: [CommonModule, FormsModule,ReactiveFormsModule, ToDoListRoutingModule, SharedModule, HttpClientModule],
  providers: [LocalStorageService],
})
export class ToDoListModule {}
