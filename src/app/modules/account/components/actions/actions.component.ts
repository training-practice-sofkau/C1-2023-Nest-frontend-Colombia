import { Component, Input, OnInit } from '@angular/core';
import { TransferService } from '../../../movements/services/transfer/transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'account-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  constructor(
    private readonly transferService: TransferService,
    private readonly router: Router
  ) {}
  @Input() id!: string;
  transferencia() {
    this.transferService.setCustomerOut(this.id);
    this.router.navigate(['movements/transfer']);
  }
  ngOnInit(): void {}
}
