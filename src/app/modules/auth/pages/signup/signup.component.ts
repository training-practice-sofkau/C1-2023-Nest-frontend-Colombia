// Libraries
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { AuthService } from '../../services/auth.service';

// Models and interfaces
import { NewUserModel } from '../../models/new-user.model';
import { UserInterface } from '../../interfaces/user.interface';

import { DocumentTypeEnum } from '../../../../shared/enums/document-type.enum';
import { environment } from 'src/environments/environment';

@Component({
  //standalone: true,
  selector: 'sofka-bank-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signIn!: string[];
  signUp!: string[];
  checkoutForm!: FormGroup;

  constructor(
    private readonly auth$: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {
    this.signIn = ['../signin'];
    this.signUp = ['../signup'];
    this.checkoutForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern(new RegExp(environment.regexEmail))
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(new RegExp(environment.regexPassword)),
      ]],
      fullName: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500)
      ]],
      phone: ['', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(10),
        Validators.pattern(new RegExp('^[0-9]+$'))
      ]],
      documentTypeId: ['CC', Validators.required],
      document: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        Validators.pattern(new RegExp('^[0-9]+$'))
      ]],
      avatarUrl: ['', [
      ]],
    });
  }

  ngOnInit(): void {
    this.random_bg_color();
    const user = <UserInterface>JSON.parse(localStorage.getItem('currentUser') ?? JSON.stringify(''));
    if(user) this.router.navigate(['dashboard']);
  }

  onSubmit(): void {
    const user = <NewUserModel>this.checkoutForm.value
    switch (this.checkoutForm.value.documentTypeId) {
      case 'CC': user.documentTypeId = DocumentTypeEnum.CC;
        break;
      case 'CE': user.documentTypeId = DocumentTypeEnum.CE;
        break;
      default: user.documentTypeId = DocumentTypeEnum.CC;
    }
    if (user.avatarUrl === '') user.avatarUrl = undefined;
    this.checkoutForm.markAllAsTouched();
    if (this.checkoutForm.valid) {
      this.auth$.signUp(user).subscribe(
        {
          next: (data) => this.handlerSuccess(data),
          error: (err) => this.handlerError(err),
          complete: () => console.log('complente')
        }
      )
    }
  }

  handlerSuccess(data: UserInterface): void {
    localStorage.setItem('currentUser', JSON.stringify(data));
    this.router.navigate(['dashboard']);
  }

  handlerError(err: any): void {
    console.log(err)
    alert(err?.message)
  }

  clear() {
    this.checkoutForm.reset();
    this.checkoutForm.get('documentTypeId')?.setValue('CC')
  }

  handlerValidators(param: 'email' | 'password' | 'fullName' | 'phone' | 'document' | 'documentTypeId' | 'avatarUrl'): string {
    return this.checkoutForm.controls[param].errors && this.checkoutForm.controls[param].touched ? 'is-invalid' : ''
  }

  handlerMessage(param: 'email' | 'password' | 'fullName' | 'phone' | 'document' | 'documentTypeId' | 'avatarUrl'): string {
    const messages = {
      pattern: `Please provide a valid ${param}`,
      required: `Enter ${param} here`,
      minlength: ` chars minimum`,
      maxlength: ` chars maximum`,
    }
    let message = '';
    const errorValue = (Object.values(this.checkoutForm.controls[param].errors ?? {})[0])
    const errorKey = (Object.keys(this.checkoutForm.controls[param].errors ?? {}))[0]
    switch (errorKey) {
      case 'required': message = messages.required
        break
      case 'pattern': message = messages.pattern//+param==='email'?'. The password must be at least 8 characters and contain at least 1 lowercase, 1 uppercase, and 1 number.':''
        break
      case 'minlength': message = errorValue?.requiredLength + messages.minlength
        break
      case 'maxlength': message = errorValue?.requiredLength + messages.maxlength
        break
    }
    return message;
  }

  private random_bg_color() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.background = bgColor;
  }
}
