import { Component } from '@angular/core';
import { NewAccountModel } from '../../models/new-Account-model';
import { CreateAccountService } from '../../services/CreateAccount/create-account.service';

@Component({
  selector: 'sofka-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent {
  // clienteId': string;
  // tipoCuenta': string;
  // depositoInicial': string;

  constructor() {
    // this.clienteId = '134656';
    // this.tipoCuenta = '1';
    // this.depositoInicial = '100'
  }
  // sendData(): void {
  //   const CreateAccount = new NewAccountModel (this.clienteId, this.tipoCuenta , this.depositoInicial);
  //   this.
  //   ({
  //     next: data => console.log(data),
  //     error: err => console.error(err),
  //     complete: () => console.info('complete')
  // });
}
