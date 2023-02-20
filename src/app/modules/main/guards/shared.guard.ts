import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedGuard implements CanActivate, CanLoad {
  constructor(
    private readonly router: Router,
  ) { }
  canActivate(): Observable<boolean> | boolean {
    const access_token = localStorage.getItem('access_token')
    if (access_token) {
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
  canLoad(): Observable<boolean> | boolean {
    const access_token = localStorage.getItem('access_token')
    if (access_token) {
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}
