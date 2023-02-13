import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NewUserModel } from '../../models/new-user.model';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  frmFormulario: FormGroup;

  constructor(private readonly users$: UsersService) {
    this.frmFormulario = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      email: new FormControl(''),
      phone: new FormControl('', [
        Validators.pattern(new RegExp(environment.regexEmail))
      ])
    });
  }

  sendData(): void {
    this.frmFormulario.get('email')?.addValidators(Validators.email);
    this.frmFormulario.get('email')?.updateValueAndValidity();
    // this.frmFormulario.setValue({
    //   name: 'Lasso',
    //   email: 'lasso@so.com.co',
    //   phone: null
    // });
    // this.frmFormulario.get('name')?.setValue('Andres');

    console.log('sendData', this.frmFormulario);

    console.log(this.frmFormulario.getRawValue());
    this.users$
      .createUser(this.frmFormulario.getRawValue() as NewUserModel)
      .subscribe({
        next: data => console.log(data),
        error: err => console.error(err),
        complete: () => console.info('complete')
      });
  }
}
