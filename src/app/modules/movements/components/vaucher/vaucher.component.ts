import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../services/transfer/transfer.service';
import { TransferInterface } from '../../interfaces/transfer.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vaucher',
  templateUrl: './vaucher.component.html',
  styleUrls: ['./vaucher.component.scss'],
})
export class VaucherComponent implements OnInit {
  transferId = this.transferService.getTransferIdSubject();
  transfer!: TransferInterface;
  constructor(private readonly transferService: TransferService) {}

  ngOnInit(): void {
    this.transferId = this.transferService.getTransferIdSubject();
    this.transferService.getTransfer(this.transferId).subscribe({
      next: (data) => {
        this.transfer = data;
      },
      error: (err) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Vaucher no disponible',
          showConfirmButton: false,
          timer: 3500,
        });
      },
      complete: () => console.log('completed'),
    });
  }
}
