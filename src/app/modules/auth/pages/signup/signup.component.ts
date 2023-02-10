import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NewUserModel } from '../../models/new-user.model';
import { DocumentTypeEnum } from '../../../../shared/enums/document-type.enum';
import { UserInterface } from '../../interfaces/user.interface';

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

  onSubmit(): void {
    const user = <NewUserModel>this.checkoutForm.value
    switch (this.checkoutForm.value.documentTypeId) {
      case 'CC': user.documentTypeId = DocumentTypeEnum.CC;
        break;
      case 'CE': user.documentTypeId = DocumentTypeEnum.CE;
        break;
      default: user.documentTypeId = DocumentTypeEnum.CC;
    }
    if (user.avatarUrl === '') user.avatarUrl = undefined
    user.document = user.document + ''
    this.auth$.signUp(user).subscribe(
      {
        next: (data) => this.handlerSuccess(data),
        error: (err) => this.handlerError(err),
        complete: () => console.log('complente')
      }
    )
  }

  handlerSuccess(data: UserInterface): void {
    this.auth$.setAuthorizationToken(data.data.email)
  }

  handlerError(err: any): void {
    alert(err?.message)
  }
}
