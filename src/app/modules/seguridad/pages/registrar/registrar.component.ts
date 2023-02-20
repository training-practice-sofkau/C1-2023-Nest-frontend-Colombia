import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'sofka-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent {
  usuarioForm: FormGroup;

  constructor(private readonly authService: AuthService){
    this.usuarioForm = new FormGroup({
      correo: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      contrasenia: new FormControl<string>('', Validators.required)
    });
  }

  registrar(){
    console.log(this.usuarioForm.get('correo')?.value)
    console.log(this.usuarioForm.get('contrasenia')?.value)
    this.authService.SignUp(this.usuarioForm.get('correo')?.value, this.usuarioForm.get('contrasenia')?.value);
  }


}
