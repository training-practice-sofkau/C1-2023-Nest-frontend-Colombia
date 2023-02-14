import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../services/transfer/transfer.service';
import { TransferModel } from '../../models/transfer.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  outComeId = this.transferService.getCustomerSubjectOut();
  frmTransfer: FormGroup;

  constructor(
    private readonly transferService: TransferService,
    private readonly router: Router
  ) {
    this.frmTransfer = new FormGroup({
      inComeId: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      outComeId: new FormControl(this.outComeId),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(new RegExp(/\d+(\.\d{0,9})?/)),
      ]),
      reason: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(500),
      ]),
    });
  }

  createTransfer() {
    const transfer = TransferModel;
    this.transferService
      .createTransfer(this.frmTransfer.getRawValue())
      .subscribe({
        next: (data) => {
          this.transferService.setTransferId(data.id);
          console.log('-----------');
          console.log(this.transferService.getTransferIdSubject());
        },
        error: (err) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Transferencia errónea',
            showConfirmButton: false,
            timer: 3500,
          });
        },
        complete: () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Transferencia correcta',
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            this.router.navigate(['movements/vaucher']);
          }, 1500);
        },
      });
  }
  ngOnInit(): void {}
}
