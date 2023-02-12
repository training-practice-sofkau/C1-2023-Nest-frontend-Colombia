import { Component } from '@angular/core';
import { NewUserModel } from '../../models/new-user-models';
import { UsersService } from '../../services/user/user.service';
import { Router } from '@angular/router';

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

  constructor(private readonly users$: UsersService, private router: Router) {
    this.documentTypeId = '';
    this.document = '';
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.password = '';
  }

  sendData(): void {
    const user = new NewUserModel(
      this.documentTypeId,
      this.document,
      this.fullName,
      this.email,
      this.phone,
      this.password
    );
    this.users$.createUser(user).subscribe({
      next: token => {
        localStorage.setItem('token', token.access_token);
      },
      error: err => console.error(err),
      complete: () => {
        this.router.navigate(['dashboard']);
      },
    });
  }
}
