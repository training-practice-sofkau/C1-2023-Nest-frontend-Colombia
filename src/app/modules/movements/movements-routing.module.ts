import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementsComponent } from './pages/movements/movements.component';
import { TransferComponent } from './components/transfer/transfer.component';

const routes: Routes = [
  {
    path: '',
    component: MovementsComponent,
  },
  {
    path: 'transfer',
    component: TransferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovementsRoutingModule {}
