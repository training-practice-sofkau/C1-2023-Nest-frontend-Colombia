import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewUserModel } from '../../models/new-user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  documentType: string;        
  document: string
  fullName: string
  email: string
  phone: string
  password: string

  routeMain: string[];
  routeSignIn: string[];
  documentTypeList: Array<string> = ['cedula', 'cedula estreangeria'];
  newUser!: FormGroup
  submitted = false;

  constructor(private formBuilder: FormBuilder, private readonly user$: UserService) {
    this.newUser = this.formBuilder.group({
      documentType: ['', Validators.required],            
      document: ['', [Validators.required]],
      fullName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.documentType = '';
    this.document = '';
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.password = ''

    this.routeMain = ['../'];
    this.routeSignIn = ['../sign_in'];
  }

  ngOnInit() {
    
}

onSubmit() {
    this.submitted = true;

    if (this.newUser.invalid) {
        return;
    }
  //const user = new NewUserModel(this.nombre, this.email, this.phone);
  const user: NewUserModel = {
    documentType: this.documentType,
    document: this.document,
    fullName: this.fullName,
    email: this.email,
    phone: this.phone,
    password: this.password
  }
  console.log('user', user)
  this.user$.createUser(user).subscribe({
    next: data => console.log(data),
    error: err => console.error(err),
    complete: () => console.info('complete')
  });
}

//get f() { return this.newUser.controls; }
get f(): { [key: string]: AbstractControl; }
{
    return this.newUser.controls;
}

}
