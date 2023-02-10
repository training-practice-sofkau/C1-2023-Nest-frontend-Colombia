// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { NewDepositComponent } from './pages/new-deposit/new-deposit.component';
import { DepositsDetailComponent } from './pages/deposits-detail/deposits-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DepositsDetailComponent },
      { path: 'add', component: NewDepositComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositsRoutingModule { }
