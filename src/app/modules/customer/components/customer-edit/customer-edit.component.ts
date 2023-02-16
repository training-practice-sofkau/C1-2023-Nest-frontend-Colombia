import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UpdateUserModel } from '../../../auth/models/update-user.model';

@Component({
  selector: 'sofka-bank-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  @Input () userData!: UpdateUserModel;
  @Output () editUser = new EventEmitter<UpdateUserModel>();
  checkoutForm!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,) {
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
    this.checkoutForm = this.formBuilder.group({
      email: [this.userData.email, [
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

  changeProfile(){
    this.userData = {...this.checkoutForm.getRawValue()}
    this.editUser.emit(this.userData);
  }
  onSubmit(): void {
    
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

}
