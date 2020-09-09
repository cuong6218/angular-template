import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.router.navigate(['/login']);
  }
}
