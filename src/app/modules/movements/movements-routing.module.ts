import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementsComponent } from './pages/movements/movements.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { VaucherComponent } from './components/vaucher/vaucher.component';
import { DepositComponent } from './components/deposit/deposit.component';

const routes: Routes = [
  {
    path: '',
    component: MovementsComponent,
  },
  {
    path: 'transfer',
    component: TransferComponent,
  },
  {
    path: 'vaucher',
    component: VaucherComponent,
  },
  {
    path: 'deposit',
    component: DepositComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovementsRoutingModule {}
