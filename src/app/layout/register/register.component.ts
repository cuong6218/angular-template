import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user;
  constructor(private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.fb.group
    ({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: ['']
    })
  }
  register()
  {
    
  }
} 
