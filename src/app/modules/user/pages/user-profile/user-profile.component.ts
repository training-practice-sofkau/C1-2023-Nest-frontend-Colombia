import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/authentication/services/auth/auth.service';
import { UserService } from 'src/app/modules/authentication/services/user/user.service';
import { getUserModel } from '../../models/get-user-model';
//import { t } from '../../../transfer/transfer-routing.module'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  routeTransfer:string[];
  user: getUserModel

  constructor(private router: Router, private readonly user$: UserService, 
    private readonly authService: AuthService){
    this.routeTransfer = ['../../../transfer/t']

    this.user = {
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
    password: ''
    }
  }

  ngOnInit(): void {
    this.getCustomer()
  }

  logout(): void {
    this.authService.SignOut();
  }

  getCustomer(){
    const id = localStorage.getItem('id')
    if(id){
      this.user$.getCustomer(id).subscribe({
        next: data  => {
          console.log('re ', data)
          this.user = data
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
   this.router.navigate(['./../../', 'transfer', 't']);
   //this.router.navigate(['/log_in']);

  }

}
function JWTDecode(token: string) {
  throw new Error('Function not implemented.');
}

