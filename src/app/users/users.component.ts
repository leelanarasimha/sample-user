import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: User[] | null = null;
  selectedUser: User | null = null;

  constructor() {
    this.users = [
      new User(1, 'Leela', 'Hyderabad', 'software'),
      new User(2, 'Person 1', 'Mumbai', 'Sales'),
      new User(3, 'Person 2', 'Bangalore', 'Engineer'),
      new User(4, 'Person 3', 'Chennai', 'automobile'),
      new User(5, 'Person 4', 'Delhi', 'Electrical'),
      new User(6, 'Person 5', 'Kerala'),
    ];

    console.log(this.users);
  }

  trackUser(index: number, user: User) {
    return user ? user.id : undefined;
  }

  onUserSelect(event: User) {
    this.selectedUser = event;
  }
}
