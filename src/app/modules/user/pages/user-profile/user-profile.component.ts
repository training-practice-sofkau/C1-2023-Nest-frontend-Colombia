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

  ngOnInit(): void {
    this.getCustomer()
  }

  getCustomer(){
    //localStorage.getItem('token')
    const token = localStorage.getItem('token') 
    console.log('t ', token)
      const usernameFromToken
       = token ? JWTDecode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1bGlhbi5sYXNzby5zb2ZrYUBnbWFpbC5jb20iLCJpYXQiOjE2NzYzNDk3MzUsImV4cCI6MTY3NjQyMTczNX0.AZi6dMYLZPBTLMjjyScDYrmKp6xx4LnNVA2KzXmJP4o') : null

  console.log('Decoded: ', usernameFromToken);
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

