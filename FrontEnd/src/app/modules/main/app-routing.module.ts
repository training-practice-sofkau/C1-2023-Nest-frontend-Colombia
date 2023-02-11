import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {path: 'register',
   component: RegisterComponent 
  },
  {
   path: 'user',
   component: UserComponent
  },
  {
    path: 'deposit',
    component: DepositComponent
  },
  {
    path: 'transfer',
    component: TransferComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
