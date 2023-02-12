import { Component } from '@angular/core';
import { NewUserModel } from '../../models/new-user-models';
import { UsersService } from '../../services/user/user.service';

@Component({
  selector: 'sofka-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  documentTypeId: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;

  constructor(private readonly users$: UsersService) {
    this.documentTypeId = '';
    this.document = '';
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.password = '';
  }

  sendData(): void {
    const user = new NewUserModel(
      '7a361cba-2546-4d9b-80fe-28e07bc41e1f',
      '12345678',
      'miguel torres',
      'loco16@hotmail.com',
      '3196245555',
      '1lngldsn654*M'
      // this.documentTypeId,
      // this.document,
      // this.fullName,
      // this.email,
      // this.phone,
      // this.password
    );
    this.users$.createUser(user).subscribe({
      next: data => console.log(data),
      error: err => console.error(err),
      complete: () => console.info('complete'),
    });
  }
}
