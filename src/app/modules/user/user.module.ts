import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { TransferComponent } from '../transfer/pages/transfer/transfer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
