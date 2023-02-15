import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  frmLogin: FormGroup;
  routeRegister: string[];

  constructor() {
    this.routeRegister = ['register'];
    this.frmLogin = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
}
