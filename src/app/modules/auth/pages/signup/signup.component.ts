import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NewUserModel } from '../../models/new-user.model';
import { DocumentTypeEnum } from '../../../../shared/enums/document-type.enum';
import { NgSwitchCase } from '@angular/common';

@Component({
  //standalone: true,
  selector: 'sofka-bank-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signIn!: string[];
  signUp!: string[];
  checkoutForm = this.formBuilder.group({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    documentTypeId: '',
    document: '',
    avatarUrl: '',
  });

  constructor(private readonly auth$: AuthService, private readonly formBuilder: FormBuilder,) {
    this.signIn = ['../signin'];
    this.signUp = ['../signup'];
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const user = <NewUserModel>this.checkoutForm.value
    switch (this.checkoutForm.value.documentTypeId) {
      case 'CC': user.documentTypeId = DocumentTypeEnum.CC;
        break;
      case 'CE': user.documentTypeId = DocumentTypeEnum.CE;
        break;
      default: user.documentTypeId = DocumentTypeEnum.CC;
    }
    if (user.avatarUrl === '') user.avatarUrl = undefined
    user.document = user.document+''
    this.auth$.signUp(<NewUserModel>this.checkoutForm.value).subscribe(
      {
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => console.log('complente')
      }
    )
  }

}
