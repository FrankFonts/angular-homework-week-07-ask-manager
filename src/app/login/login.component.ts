import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  inputError: boolean = false;

  constructor(
    private readonly login: LoginService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  setUserAndLogin(user: string) {
    const userSet = this.setUser(user);

    if (userSet) {
      this.router.navigateByUrl('/task-list');
    }
  }

  setUser(user: string): boolean {
    if (user.trim() === '' || user === undefined) {
      this.inputError = true;
      return false;
    } else {
      this.inputError = false;
      this.login.setLoggedInUser(user);
      const userList = this.login.getUsers();

      if (!userList.includes(user)) {
        userList.push(user);
        this.login.setUser(user);
      }
      return true;
    }
  }
}
