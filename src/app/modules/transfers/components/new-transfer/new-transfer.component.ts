import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransferInterface } from '../../interfaces';
import { TransferService } from '../../services';
import { NewTransferModel } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountInterface } from 'src/app/modules/account';

@Component({
  selector: 'sofka-bank-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  @Input() incomeAccounts!: AccountInterface[];
  @Input() outcomeAccount!: AccountInterface;
  @Input() maxAmount!: number;
  @Output() added = new EventEmitter<boolean>();
  amount!: number;
  reason!: string;
  checkoutForm!: FormGroup;
  incomeAccountId!: string;

  constructor(
    private readonly transfer$: TransferService,
    private readonly formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      amount: [0, [
        Validators.required,
        Validators.nullValidator,
        Validators.min(0),
        Validators.max(this.outcomeAccount.balance),
        Validators.pattern(new RegExp(/^[0-9]+$/))
      ]],
      reason: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.nullValidator,
      ]],
      incomeAccountId: ['', [
        Validators.required,
        Validators.nullValidator,
      ]],
    });
    this.incomeAccounts = JSON.parse(JSON.stringify(this.incomeAccounts));
    this.incomeAccountId = this.checkoutForm.value.incomeAccountId;
    const a = this.incomeAccounts.find(a => a.id === this.outcomeAccount.id)
    let b: number;
    if (a) { b = this.incomeAccounts.indexOf(a) }
    else { b = -1 }
    if (b >= 0) { this.incomeAccounts.splice(b, 1) }
  }

  onSubmit(): void {
    this.incomeAccountId = this.checkoutForm.value.incomeAccountId;
    this.amount = this.checkoutForm.value.amount;
    this.reason = this.checkoutForm.value.reason;
    this.checkoutForm.markAllAsTouched()
    const transfer = new NewTransferModel(this.outcomeAccount.id, this.incomeAccountId, this.amount, this.reason);
    if (this.checkoutForm.valid) {
      this.transfer$.addTransfer(transfer).subscribe({
        next: (data: TransferInterface) => this.added.emit(true),
        error: (err: Error) => console.log(err)
      })
    }
  }

  handlerValidators(param: 'amount' | 'reason' | 'incomeAccountId'): string {
    return this.checkoutForm.controls[param].errors && this.checkoutForm.controls[param].touched ? 'is-invalid' : ''
  }

  handlerMessage(param: 'amount' | 'reason' | 'incomeAccountId'): string {
    const messages = {
      pattern: `Please provide a valid ${param}`,
      required: `Enter ${param} here`,
      min: ` USDs minimum`,
      max: ` USDs maximum`,
      minlength: ` chars minimum`,
    }
    let message = '';
    const errorValue = (Object.values(this.checkoutForm.controls[param].errors ?? {})[0])
    console.log(errorValue);
    const errorKey = (Object.keys(this.checkoutForm.controls[param].errors ?? {}))[0]
    switch (errorKey) {
      case 'required': message = messages.required
        break
      case 'pattern': message = messages.pattern
        break
      case 'min': message = errorValue?.min + messages.min
        break
      case 'max': message = errorValue?.max + messages.max + '. Current amount exceeds current balance.'
        break
      case 'minlength': message = errorValue?.requiredLength + messages.minlength
        break
    }
    return message;
  }
}
