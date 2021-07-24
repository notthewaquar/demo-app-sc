import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  userMode: string = '';
  title: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userTitle = this.router.url;
    if (userTitle === '/users_se/create_se') {
      this.userMode = 'se';
      this.title = 'SALES EXECUTIVE';
    } else if (userTitle === '/users_dl/create_dl') {
      this.userMode = 'dl';
      this.title = 'DEALER';
    } else if (userTitle === '/users_dt/create_dt') {
      this.userMode = 'dt';
      this.title = 'DISTRIBUTER';
    } else if (userTitle === '/users_ld/create_ld') {
      this.userMode = 'ld';
      this.title = 'LEAD';
    }
  }
}
