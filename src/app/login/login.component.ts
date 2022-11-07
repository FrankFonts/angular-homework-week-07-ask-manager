import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private readonly login: LoginService) {}

  ngOnInit(): void {}

  setUser(user: string) {
    console.log(user);

    if (user.trim() === '' || user === undefined) {
      return;
    } else {
      console.log(`User is ${user}`);
      this.login.setLoggedInUser(user);
      const userList = this.login.getUsers();

      if (!userList.includes(user)) {
        userList.push(user);
        this.login.setUser(user);
      }
    }
  }
}
