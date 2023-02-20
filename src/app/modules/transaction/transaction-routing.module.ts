// Libraries
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components 
import { TransactionsComponent } from './components';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TransactionsComponent },
      { path: ':id', component: TransactionsComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
      //{ path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
