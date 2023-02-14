import { Component } from '@angular/core';
import { NewUserModel } from '../../models/new-user-models';
import { UsersService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'sofka-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  //se de clara el formulario
  formRegister: FormGroup;
  constructor(private readonly users$: UsersService, private router: Router) {
    //se inicializa el formulario
    this.formRegister = new FormGroup({
      documentTypeId: new FormControl('', Validators.required),
      document: new FormControl('', Validators.required),
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),
      email: new FormControl('', [
        Validators.pattern(new RegExp(environment.regexEmail)),
      ]),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  sendData(): void {
    this.formRegister.get('email')?.addValidators(Validators.email);
    this.formRegister.get('email')?.updateValueAndValidity();
    console.log('sendData', this.formRegister);
    console.log(this.formRegister.getRawValue());
    this.users$
      .createUser(this.formRegister.getRawValue() as NewUserModel)
      .subscribe({
        next: token => {
          localStorage.setItem('token', token.access_token);
          localStorage.setItem('id', token.id);
        },
        error: err => console.error(err),
        complete: () => {
          this.router.navigate(['dashboard']);
        },
      });
  }
}
