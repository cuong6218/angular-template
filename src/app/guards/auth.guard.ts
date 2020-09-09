import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLogin = false;
  constructor(private router: Router,
              private auth: AuthService,
              private userService: UserService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let users = this.userService.getAll();
      for(let i = 0; i< users.length; i++)
      {
        if(localStorage.getItem('email')== users[i].email && localStorage.getItem('password')==users[i].password)
      { 
        return true;
      } else 
      {
        this.router.navigate(['/login']);
        return false;
      }
      }
      
  }
  
}
