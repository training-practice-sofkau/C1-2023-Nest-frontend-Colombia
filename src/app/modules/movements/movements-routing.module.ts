import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementsComponent } from './pages/movements/movements.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { VaucherComponent } from './components/vaucher/vaucher.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovementsRoutingModule {}
