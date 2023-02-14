import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { ServiceUserService } from '../../../user/services/user-service/service-user.service';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  token: string;
  constructor(private readonly userService: ServiceUserService,
    private readonly route: Router) {
    this.email = '';
    this.password = '';
    this.token = '';
  }

  ngOnInit(): void { }

  login() {
    const newLogin = new LoginModel(this.email, this.password);
    this.userService.login(newLogin).subscribe({
      next: (data) => {
        localStorage.setItem("token", data.access_token)
        localStorage.setItem("id", data.id)
        this.goToHomeUser()
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.message
        })
      },
      complete: () => {
        console.log("complete")
      }
    })
  }

  goToHomeUser() {
    this.route.navigate(["./customer/home"])
  }
}
