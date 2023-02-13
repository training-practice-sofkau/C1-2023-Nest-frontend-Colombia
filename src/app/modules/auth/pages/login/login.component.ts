import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'sofka-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // tipo FormGrupo creamos una instancia vacia
  formLogin: FormGroup = new FormGroup({});

  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {
    this.htmlformulario();
  }

  htmlformulario(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  //envio de datos
  sendLogin() {
    const { email, password } = this.formLogin.value;
    this.loginService.sendLogin(email, password).subscribe(
      token => {
        localStorage.setItem('token', token.access_token);
        localStorage.setItem('id', token.id);
        this.router.navigate(['dashboard']);
      },
      error => {
        console.log('no entro.');
      }
    );
  }
}
