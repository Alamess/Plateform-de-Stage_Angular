import { Injectable } from '@angular/core';
import { AuthService } from './authService/auth.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.token !== undefined && this.authService.token !== '') {
      return true;
    } else {
      
      this.router.navigate(['Sign-in']);
      return false;
    }
  }}
