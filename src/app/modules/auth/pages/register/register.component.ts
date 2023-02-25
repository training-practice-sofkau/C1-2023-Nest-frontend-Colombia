import { Component } from '@angular/core';
import { UsersService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth/auth.service';
import { IUsers } from '../../interfaces/users.interface';

@Component({
  selector: 'sofka-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  //se de clara el formulario
  formRegister: FormGroup;
  google = true;
  googleSession = this.authService.getGoogleSubjectOut();
  constructor(
    private readonly users$: UsersService,
    private router: Router,
    private readonly authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    //se inicializa el formulario
    this.formRegister = this.formBuilder.group({
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
  auth(): void {
    this.authService.GoogleAuth().then(Response => {
      sessionStorage.setItem(
        'googleUserEmail',
        JSON.stringify(Response.additionalUserInfo?.profile)
      );
      const customerGoogle = JSON.parse(
        sessionStorage.getItem('googleUserEmail') as string
      );
      this.formRegister.get('fullName')?.setValue(customerGoogle.name);
      this.formRegister.get('email')?.setValue(customerGoogle.email);
      this.formRegister.get('email')?.disable();
      this.formRegister.get('fullName')?.disable();
      this.google = false;
    });
  }

  // sendData(): void {
  //   this.formRegister.get('email')?.addValidators(Validators.email);
  //   this.formRegister.get('email')?.updateValueAndValidity();
  //   console.log('sendData', this.formRegister);
  //   console.log(this.formRegister.getRawValue());
  //   this.users$
  //     .createUser(this.formRegister.getRawValue() as NewUserModel)
  //     .subscribe({
  //       next: token => {
  //         localStorage.setItem('token', token.access_token);
  //         localStorage.setItem('id', token.id);
  //       },
  //       error: err => console.error(err),
  //       complete: () => {
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Oops...',
  //           text: 'Something went wrong!',
  //           footer: '<a href="">Bienvenido!!!!</a>',
  //         });
  //         this.router.navigate(['dashboard']);
  //       },
  //     });
  // }
  registerUser(): void {
    if (this.google) {
      this.authService.SignUp(
        this.formRegister.get('email')?.getRawValue(),
        this.formRegister.get('password')?.getRawValue()
      );
      this.authService.isEmail(this.formRegister.get('email')?.getRawValue());
    }
    this.formRegister.get('documentTypeId');
    this.users$.createUser(this.formRegister.getRawValue()).subscribe({
      next: data => {
        this.users$.setUser(data.id);
        localStorage.setItem('id', data.id);
        localStorage.setItem('access_token', data.access_token);
      },
      error: erro => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: erro.error.message,
          showConfirmButton: false,
        });
      },
      complete: () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Inicio de sesión correcto',
          showConfirmButton: false,
        });
        this.users$.setUser(localStorage.getItem('id') as string);
        setTimeout(() => {
          this.router.navigate(['account']);
        });
      },
    });
  }
}
