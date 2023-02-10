import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementsRoutingModule } from './movements-routing.module';
import { HistoryComponent } from './components/history/history.component';
import { MovementsComponent } from './pages/movements/movements.component';



@NgModule({
  declarations: [
    MovementsComponent,HistoryComponent
  ],
  imports: [
    CommonModule,MovementsRoutingModule
  ]
})
export class MovementsModule { }
