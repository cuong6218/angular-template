import { IUser } from './../interfaces/iuser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      id: 0,
      firstName: 'Duong',
      lastName: 'Cuong',
      email: 'cuong@gmail.com',
      password: '12'
    },
    {
      id: 1,
      firstName: 'Duong',
      lastName: 'manh',
      email: 'manh@gmail.com',
      password: '13'
    },
    {
      id: 2,
      firstName: 'Duong',
      lastName: 'Duong',
      email: 'duong@gmail.com',
      password: '14'
    },
    {
      id: 3,
      firstName: 'Duong',
      lastName: 'Quang',
      email: 'quang@gmail.com',
      password: '15'
    },
    {
      id: 4,
      firstName: 'Duong',
      lastName: 'Tung',
      email: 'tung@gmail.com',
      password: '16'
    },
  ];
  constructor() { }
  getAll()
  {
    return this.users;
  }
  register(user:IUser)
  {
    this.users.push(user);
  }
}
