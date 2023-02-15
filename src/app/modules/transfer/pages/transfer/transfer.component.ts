import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransferModel } from '../../models/transfer.model';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {
  transfers!: TransferModel[]

  constructor(private router: Router,
    private readonly transferService: TransferService){
    }

    ngOnInit(): void {
      this.getTransferOutcome()
    }

  getTransferOutcome(){
    this.transferService.getAllByOutcome().subscribe({
      next: data  => {
        console.log('re ', data)
        this.transfers = data
      },
      error: err => console.error('err', err),
      complete: () => console.info('complete')
    }
    );
  }
}
