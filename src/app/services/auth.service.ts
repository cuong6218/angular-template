import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClientModule,
              private router: Router,
              private userService: UserService) { }
  isLogin(email: string, password: string)
  {
    let users = this.userService.getAll();
    for(let i = 0; i < users.length; i++)
    {
      if(email == users[i].email && password == users[i].password)
    {
      return true;
    } else
    {
      return false;
    } 
    }
    
  }
}
