// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { NewTransferComponent } from './pages/new-transfer/new-transfer.component'; 
import { TransfersDetailComponent } from './pages/transfers-detail/transfers-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TransfersDetailComponent },
      { path: 'add', component: NewTransferComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class transfersRoutingModule { }
