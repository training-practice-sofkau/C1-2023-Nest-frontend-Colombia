import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/modules/auth/services/user/user.service';
import Swal from 'sweetalert2';
import { StateService } from '../../services/state/state.service';

@Component({
  selector: 'sofka-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  id: string | null;
  documentTypeId: string;
  email: string;
  password: string;
  estado: boolean;
  formUser: FormGroup;
  constructor(
    private readonly userService: UsersService,
    private router: Router,
    private readonly stateService: StateService
  ) {
    this.id = '';
    this.documentTypeId = '';
    this.email = '';
    this.password = '';
    this.estado = this.stateService.state;
    this.formUser = new FormGroup({
      document: new FormControl(null, [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    const idStorage = localStorage.getItem('id');
    console.log(localStorage.getItem('token'));
    this.id = idStorage !== null ? idStorage : 'default';
    this.userService.getUserById(this.id).subscribe({
      next: data => {
        console.log(data);
        this.formUser.setValue({
          document: data.document,
          fullName: data.fullName,
          phone: data.phone,
        });
        this.email = data.email;
        this.documentTypeId = data.documentType.id;
        this.password = data.password;
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

  updateUser(): void {
    const updateUser = {
      documentTypeId: this.documentTypeId,
      document: String(this.formUser.get('document')?.value),
      fullName: String(this.formUser.get('fullName')?.value),
      email: this.email,
      phone: String(this.formUser.get('phone')?.value),
      password: this.password,
    };
    this.userService
      .updateUser(localStorage.getItem('id') ?? '', updateUser)
      .subscribe({
        next: data => {
          this.formUser.get('document')?.setValue(data.document);
          this.formUser.get('fullName')?.setValue(data.fullName);
          this.formUser.get('phone')?.setValue(data.phone);
        },
        error: err => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: err.error.message,
            showConfirmButton: false,
          });
        },
        complete: () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Actualizado correctamente',
            showConfirmButton: false,
          });
        },
      });
  }
}
///crea el emisor
