import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DepositService } from '../../services/deposit.service';
import { NewDepositModel } from '../../models/new-deposit.model';
import { DepositInterface } from '../../interfaces/deposit.interface';

@Component({
  selector: 'sofka-bank-new-deposit',
  templateUrl: './new-deposit.component.html',
  styleUrls: ['./new-deposit.component.scss']
})
export class NewDepositComponent implements OnInit {
  
  @Input() accountId!: string;
  @Output() added = new EventEmitter<boolean>();
  value!:number;

  constructor(private readonly deposit$: DepositService) {
    this.value = 0;
  }

  ngOnInit(): void {  }

  onSubmit(amount: number): void {
    const deposit = new NewDepositModel(amount, this.accountId);
    this.deposit$.addDeposit(deposit).subscribe({
      next: (data: DepositInterface) => this.added.emit(true),
      error: (err: Error) => console.log(err)
    })
  }
}
