import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoCostumerComponent } from './pages/info-costumer/info-costumer.component';
import { InfoDepositComponent } from './pages/info-deposit/info-deposit.component';
import { InfoTransferComponent } from './pages/info-transfer/info-transfer.component';
import { UpdateCostumerComponent } from './pages/update-costumer/update-costumer.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "customer", component: InfoCostumerComponent },
  { path: "transfer", component: InfoTransferComponent },
  { path: "deposit", component: InfoDepositComponent },
  { path: "account", component: AccountComponent },
  { path: "customer/updateCustomer", component: UpdateCostumerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
