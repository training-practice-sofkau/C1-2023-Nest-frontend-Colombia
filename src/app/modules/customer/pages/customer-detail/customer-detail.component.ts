import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { UserInterface } from '../../../auth/interfaces/user.interface';
import { DocumentTypeEnum } from '../../../../shared/enums/document-type.enum';
import { UpdateUserModel } from '../../../auth/models/update-user.model';

@Component({
  selector: 'sofka-bank-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  user!: UserInterface;
  updateUser!: UpdateUserModel;

  constructor(private readonly auth$: AuthService) { }

  ngOnInit(): void {
    this.user = {
      success: true,
      data: {
        id: 'dddd',
        documentTypeId: 'ddd',
        document: 'ddd',
        fullName: 'ddd',
        email: 'ddd',
        phone: 'ddd',
        password: 'dd',
        avatarUrl: 'ddd',
        token: 'dddd',
      }
    }
  }

  getUserInfo(): void {
    //this.user = <UserInterface>JSON.parse(localStorage.getItem('currentUser') ?? JSON.stringify(''));
  }

  onEdit(): void {
    this.updateUser = {...this.user.data}
  }

  onUpdate(user: UpdateUserModel):void{
    this.user.data = {...this.user.data, ...user, }
  }

  getPercentage(object: Object): number {
    let len = 0;
    let value = 0;
    let json = JSON.parse(JSON.stringify(object));
    for (let x in object) {
      len++
      if (json[x] !== '') { value++ }
    }
    return value / len
  }

  getKeyByValue(value: string) {
    const indexOfS = Object.values(DocumentTypeEnum).indexOf(value as unknown as DocumentTypeEnum);

    const key = Object.keys(DocumentTypeEnum)[indexOfS];

    return key;
  }
}
