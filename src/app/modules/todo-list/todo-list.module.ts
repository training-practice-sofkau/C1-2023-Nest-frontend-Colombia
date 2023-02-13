/* eslint-disable prettier/prettier */
// Libraries
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    PrincipalComponent,
    NewItemComponent,
    HeaderComponent,
    FooterComponent,
    EditItemComponent,
    ViewItemComponent,
    DeleteItemComponent,
  ],
  imports: [CommonModule, FormsModule,ToDoListRoutingModule, SharedModule, HttpClientModule]
})
export class ToDoListModule {}
