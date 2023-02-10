import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { t } from '../../../transfer/transfer-routing.module'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  routeTransfer:string[];

  constructor(private router: Router){
    this.routeTransfer = ['../../../transfer/t']
  }

  goTo(): void {
    console.log('enviar')
   this.router.navigate(['./../../', 'transfer', 't']);
   //this.router.navigate(['/log_in']);

  }

}
