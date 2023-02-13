import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsDetailComponent } from './pages/accounts-detail';
import { NewAccountComponent } from './pages/new-account'; 
import { DeleteAccountComponent } from './pages/delete-account/delete-account.component';

const routes: Routes = [
  { path: '', component: AccountsDetailComponent },
  {
    path: 'add',
    component: NewAccountComponent
  },
  {
    path: 'delete/:id',
    component: DeleteAccountComponent
  },
  {
    path: 'transactions/:id',
    component: DeleteAccountComponent
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  //{ path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
