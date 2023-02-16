import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  ) { }

  createDeposit() {
    this.depositServie.createDeposit(this.formulario).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
