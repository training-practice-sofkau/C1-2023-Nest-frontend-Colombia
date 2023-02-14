import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../services/transfer/transfer.service';
import { TransferModel } from '../../models/transfer.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  outComeId = this.transferService.getCustomerSubjectOut();
  inComeId: string;
  amount: string;
  reason: string;
  constructor(
    private readonly transferService: TransferService,
    private readonly router: Router
  ) {
    this.inComeId = '';
    this.amount = '';
    this.reason = '';
  }

  createTransfer() {
    const transfer = new TransferModel(
      this.outComeId,
      this.inComeId,
      this.reason,
      this.amount
    );
    this.transferService.createTransfer(transfer).subscribe({
      next: (data) => {},
      error: (err) => {
        console.log(err.error.message);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Transferencia erronea',
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
