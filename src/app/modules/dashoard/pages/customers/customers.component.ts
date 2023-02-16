import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/modules/auth/services/user/user.service';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'sofka-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  id: string | null;
  documentTypeId: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  estado: boolean;
  constructor(
    private readonly userService: UsersService,
    private router: Router,
    private readonly stateService: StateService
  ) {
    this.id = '';
    this.documentTypeId = '';
    this.document = '';
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.password = '';
    this.estado = this.stateService.state;
  }

  ngOnInit(): void {
    const idStorage = localStorage.getItem('id');
    console.log(localStorage.getItem('token'));
    this.id = idStorage !== null ? idStorage : 'default';
    this.userService.getUserById(this.id).subscribe({
      next: data => {
        this.document = data.document;
        this.fullName = data.fullName;
        this.email = data.email;
        this.phone = data.phone;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  cambiarEstado(): void {
    this.stateService.state = !this.estado;
    this.estado = this.stateService.state;
  }
}
///crea el emisor
