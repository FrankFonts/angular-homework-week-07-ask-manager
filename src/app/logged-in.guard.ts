import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate, OnInit {
  loggedInUser: string | undefined;

  constructor(private readonly login: LoginService) {}

  ngOnInit() {
    this.login.loggedInUser$.subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.login.loggedInUser !== undefined) {
      return true;
    }
    return false;
  }
}
