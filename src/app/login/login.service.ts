import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedInUser: string | undefined = undefined;

  constructor(
    private readonly localStorage: LocalStorageService,
    private readonly router: Router
  ) {}

  getUsers(): Array<string> {
    return this.localStorage.getLocalstorage('users') ?? [];
  }

  setUser(user: string) {
    const userList = this.getUsers();

    if (!userList.includes(user)) {
      userList.push(user);
      this.localStorage.setLocalStorage('users', userList);
    }
  }

  setLoggedInUser(user: string) {
    this.loggedInUser = user;
  }

  logout() {
    this.loggedInUser = undefined;
    this.router.navigateByUrl('');
  }
}
