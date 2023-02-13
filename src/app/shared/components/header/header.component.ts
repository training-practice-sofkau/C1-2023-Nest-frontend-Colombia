import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'bank-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  localstorage(): boolean {
    if (localStorage.getItem('id')) return true;
    return false;
  }
  clearSesion() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Sesión cerrada correctamente',
      showConfirmButton: false,
      timer: 1500,
    });
    localStorage.clear();
  }
  ngOnInit(): void {}
}
