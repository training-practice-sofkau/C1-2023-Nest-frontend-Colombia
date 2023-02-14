import { Component } from '@angular/core';
import { newUserModel } from '../../models/new-user.model';
import { UsersService } from '../../services/users/users.service';

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
  routrHome: string[];
  constructor(private readonly user$: UsersService) {
    this.routrHome = ['../'];
    this.documentTypeId = 'adbf99cd-e973-4e2b-88e0-fab8c6ee77c8';
    this.document = '';
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.password = 'Jebkoj*7777';
  }
  senData(): void {
    const user = new newUserModel(
      this.documentTypeId,
      this.document,
      this.fullName,
      this.email,
      this.phone,
      this.password
    );
    this.user$.createUser(user).subscribe({
      next: data => {
        localStorage.setItem('id', data.id);
      },
      error: err => console.log(err),
      complete: () => console.log('complete'),
    });
  }
}
