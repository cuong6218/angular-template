
import { AuthService } from './../../services/auth.service';
import { IUser } from './../../interfaces/iuser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: IUser;
  keyEmail = 'email';
  keyPassword = 'password';
  submited: boolean;
  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  get email()
  {
    return this.loginForm.get('email');
  }
  get password()
  {
    return this.loginForm.get('password');
  }
  login()
  {
    const value = this.loginForm.value;
    if (this.auth.isLogin(value.email, value.password))
    {
      this.submited = true;
      
      localStorage.setItem(this.keyEmail, value.email);
      localStorage.setItem(this.keyPassword, value.password);
      this.router.navigate(['/admin/dashboard']);
      
    }
    else {
      this.submited = false;
      this.router.navigate(['/login']);
    } 
    console.log(this.submited);
  }
}
