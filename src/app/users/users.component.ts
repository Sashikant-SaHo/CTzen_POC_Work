import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: any;
  constructor() {}

  ngOnInit(): void {
    this.users = [
      { Name: 'Mahesh', age: 25, display: true },
      { Name: 'Shakti', age: 23, display: true },
      { Name: 'Krishna', age: 23, display: true },
      { Name: 'Radha', age: 21, display: true },
    ];
  }
  discardRow(index) {
    this.users[index].display = false;
  }
}
