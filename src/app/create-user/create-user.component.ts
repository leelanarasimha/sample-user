import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  userName: string = '';

  @ViewChild('user', { read: ElementRef }) users!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddUser() {
    console.log(this.users);
  }
}
