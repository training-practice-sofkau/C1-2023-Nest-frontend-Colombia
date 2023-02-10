import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccountService {

  constructor(private readonly httpClient:HttpClient) { }

  getAllAccount(){
    return this.httpClient.get("http://localhost:3000/account/")
  }
}
