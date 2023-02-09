// Libraries
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Routes
import { ToDoListRoutingModule } from './to-do-list-routing.module';

// Components
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DetalleToDoListComponent } from './pages/detalle-to-do-list/detalle-to-do-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AgregarToDoListComponent } from './pages/agregar-to-do-list/agregar-to-do-list.component';
import { ToDoListLayoutComponent } from './layouts/to-do-list-layout/to-do-list-layout.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DetalleToDoListComponent,
    HeaderComponent,
    FooterComponent,
    AgregarToDoListComponent,
    ToDoListLayoutComponent,
  ],
  imports: [CommonModule, ToDoListRoutingModule],
})
export class ToDoListModule {}
