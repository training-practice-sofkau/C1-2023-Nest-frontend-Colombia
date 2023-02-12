import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { ServiceUserService } from '../../../user/services/user-service/service-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  token: string;
  constructor(private readonly userService: ServiceUserService) {
    this.email = '';
    this.password = '';
    this.token = '';
  }

  ngOnInit(): void {}

  login() {
    const newLogin = new LoginModel(this.email, this.password);
    this.userService.login(newLogin).subscribe((res:any)=>{
      localStorage.setItem("token",res.access_token)
    });
  }
}
