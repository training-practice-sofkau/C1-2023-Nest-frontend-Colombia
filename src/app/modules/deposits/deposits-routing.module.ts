import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDepositComponent } from './new-deposit/new-deposit.component';
import { DepositsDetailComponent } from './deposits-detail/deposits-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'details', component: DepositsDetailComponent },
      { path: 'new', component: NewDepositComponent },
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: '**', redirectTo: 'signin' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositsRoutingModule { }
