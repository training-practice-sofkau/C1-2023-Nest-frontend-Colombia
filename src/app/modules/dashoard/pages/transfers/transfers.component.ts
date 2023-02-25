import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferModel } from '../../models/transfer.model';
import { TransferService } from '../../services/transfer/transfer.service';

@Component({
  selector: 'sofka-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss'],
})
export class TransfersComponent implements OnInit {
  @Input() outcome!: string;
  frmTransfer: FormGroup;
  // localStorage(id: string) {}
  constructor(
    private readonly transferService: TransferService,
    private readonly router: Router
  ) {
    this.frmTransfer = new FormGroup({
      income: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      amount: new FormControl<number>(0, [
        Validators.required,
        Validators.pattern(new RegExp(/\d+(\.\d{0,9})?/)),
      ]),
      reason: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(500),
      ]),
    });
  }
  ngOnInit(): void {
    this.getOutcome();
  }
  //prueba
  getOutcome() {
    this.outcome = localStorage.getItem('outcome') as string;
  }
  createTransfer() {
    console.log(this.outcome);
    const transfer = {
      outcome: this.outcome,
      income: this.frmTransfer.get('income')?.value ?? '',
      reason: this.frmTransfer.get('reason')?.value ?? '',
      amount: Number(this.frmTransfer.get('amount')?.value),
    };
    console.log(transfer);
    this.transferService.createTransfer(transfer).subscribe({
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
