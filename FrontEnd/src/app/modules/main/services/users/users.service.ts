import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INewUser } from '../../interfaces/new-user.interface';
import { IUsers } from '../../interfaces/users.interface';
import { UserModel } from '../../models/new-user.model';



@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private readonly httpClient: HttpClient) {}

    createUser(user: UserModel):Observable<INewUser> {
      return this.httpClient.post<INewUser>('http://localhost:3000/security/singUp', user.getData());

    }

    getAll():Observable<IUsers[]>{
      return this.httpClient.get<IUsers[]>('http://localhost:3000/user')
    }
  }


