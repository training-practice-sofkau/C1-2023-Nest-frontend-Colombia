// Libraries
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Routes
import { ToDoListRoutingModule } from './todo-list-routing.module';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NewItemComponent } from './pages/new-item/new-item.component';
import { ExperienciaLaboralComponent } from './pages/experiencia-laboral/experiencia-laboral.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    NewItemComponent,
    ExperienciaLaboralComponent,
    HeaderComponent,
    FooterComponent,
    EditItemComponent,
  ],
  imports: [CommonModule, ToDoListRoutingModule],
})
export class ToDoListModule {}
