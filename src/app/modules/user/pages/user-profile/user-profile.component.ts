import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private readonly user$: UserService){
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

  getCustomer(){

  }
  goTo(): void {
    console.log('enviar')
   this.router.navigate(['./../../', 'transfer', 't']);
   //this.router.navigate(['/log_in']);

  }

}
