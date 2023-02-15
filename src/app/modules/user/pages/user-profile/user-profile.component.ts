import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/authentication/services/auth/auth.service';
import { UserService } from 'src/app/modules/authentication/services/user/user.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getUserModel } from '../../models/get-user-model';
import { MustMatch } from 'src/app/modules/authentication/components/login/help-must-match';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  routeTransfer:string[];
  routeAccount:string[];
  photo: string
  updatUser: FormGroup
  id: string 

  documentTypeList = { 
    CC: "52f0d46a-af27-451a-8021-9ab99e00ef1c",
    foreignerID: "52f0d46a-af27-451a-8021-9ab99e00ef1c"
   }

  constructor(private router: Router, private readonly user$: UserService, 
    private readonly authService: AuthService){
    this.routeTransfer = ['/transfer/t']
    this.routeAccount = ['/account']
    this.photo = ''
    this.id = ''

    this.updatUser = new FormGroup({
      documentTypeId: new FormControl('', [Validators.required]),            
      document: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(30)
      ]),
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/g)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/g)
      ]),
      avatarUrl: new FormControl('')
    },  {
      validators: MustMatch('password', 'confirmPassword')
    } 
    );
  }

  ngOnInit(): void {
    this.getCustomer()
  }

  logout(): void {
    this.authService.SignOut();
  }

  updateUser(){
    const user = {
      id: this.id,
      fullName: this.updatUser.get('fullName')?.value,
      email: this.updatUser.get('email')?.value,
      phone: this.updatUser.get('phone')?.value,
      document: this.updatUser.get('document')?.value,
      documentTypeId: this.updatUser.get('documentTypeId')?.value,
      password: this.updatUser.get('password')?.value,
      avatarUrl: this.updatUser.get('avatar')?.value
    }

    this.user$.updateUser(user).subscribe({
      next: data  => {
        if(data.status === 'success'){
          console.log('re ', data.token)
        }
      },
      error: err => console.error(err),
      complete: () => console.info('complete')
    }
    );
  }

  getCustomer(){
    console.log('entra en get')
    const id = localStorage.getItem('uid')
    if(id){
      console.log('entra en get')
      this.user$.getCustomer(id).subscribe({
        next: data  => {
          console.log('re ', data)
          //this.user = data
          this.updatUser.get('fullName')?.setValue(data.fullName)
          this.updatUser.get('email')?.setValue(data.email)
          this.updatUser.get('phone')?.setValue(data.phone)
          this.updatUser.get('document')?.setValue(data.document)
          this.updatUser.get('documentTypeId')?.setValue(data.documentType)
          this.updatUser.get('password')?.setValue(data.password)  
          this.updatUser.get('avatar')?.setValue(data.avatarUrl)                  
          this.id = data.id
          this.photo = data.avatarUrl
        },
        error: err => console.error('err', err),
        complete: () => console.info('complete')
      }
      );
    }
    //this.user$.getCustomer()
  }
  goTo(): void {
    console.log('enviar')
   this.router.navigate(['transfer', 't']);
   //this.router.navigate(['/log_in']);

  }

}
function JWTDecode(token: string) {
  throw new Error('Function not implemented.');
}



/*this.user = {
      id: '',
      state: true,
      documentType: {
      id: '',
      state: true
    },
    document: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    avatarUrl: ''
    }*/