import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { ServiceUserService } from '../../../user/services/user-service/service-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string
  constructor(private readonly userService: ServiceUserService) {
    this.email = ""
    this.password = ""
  }

  ngOnInit(): void {
  }

  login() {
    const newLogin = new LoginModel(this.email, this.password)
    this.userService.login(newLogin).subscribe({
      next: (data) => { console.log(data) },
      error: (err) => { console.log(err) },
      complete: () => { console.log("complete") }
    })
  }
}
