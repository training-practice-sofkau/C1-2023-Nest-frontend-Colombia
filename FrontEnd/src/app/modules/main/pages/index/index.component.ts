import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment.prod';
import { AuthService } from '../../services/auth/auth.service';
import * as auth from 'firebase/auth';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  
routeRegister: string [];
routeUser: string[];

frmFormularyLogin: FormGroup;

  constructor(private readonly authService: AuthService) {
    this.routeRegister = ['register']
    this.routeUser = ['user']
  
    this.frmFormularyLogin = new FormGroup({
        userName : new FormControl("", [Validators.required ,Validators.minLength(6), Validators.maxLength(80)]),
        password: new FormControl("", [Validators.required , Validators.minLength(8), Validators.pattern(new RegExp (environment.regexPassword))]),
    })
  }

  auth(): void {
      this.authService.GoogleAuth();
  }

  sendDataFormulary(): void {
    console.log('endDataFormulary' , this.frmFormularyLogin)
    console.log(this.frmFormularyLogin.getRawValue())
  }
}
