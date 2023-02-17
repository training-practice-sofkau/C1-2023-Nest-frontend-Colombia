import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { DepositService } from '../../services/deposit.service';

@Component({
  selector: 'sofka-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent {
  formulario = { accountId: '', amount: 0 };
  constructor(
    private readonly depositServie: DepositService,
    private readonly route: ActivatedRoute
  ) {}

  createDeposit() {
    this.depositServie.createDeposit(this.formulario).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Tienes un error!',
        });
      },
      complete: () => {
        Swal.fire({
          icon: 'success',
          title: 'Oops...',
          text: 'Tu dinero a sido enviado!',
          footer: '<a href="">Deposito enviado!</a>',
        });
        console.log('complete');
      },
    });
  }
}
