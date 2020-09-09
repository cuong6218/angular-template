import { UserService } from './../../../services/user.service';
import { IUser } from './../../../interfaces/iuser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getAll();
  }

}
