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
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(new RegExp(/^(0*[1-9][0-9]*)$/g)),
      ]),
      reason: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(500),
      ]),
    });
  }

  createTransfer() {
    this.transferService
      .createTransfer(this.frmTransfer.getRawValue())
      .subscribe({
        next: (data) => {},
        error: (err) => {
          console.log(err.error.message);
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
            this.router.navigate(['account']);
          }, 1500);
        },
      });
  }
  ngOnInit(): void {}
}
