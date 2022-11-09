import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  loggedInUser: string | undefined;

  constructor(private readonly login: LoginService) {}

  ngOnInit(): void {
    this.login.loggedInUser$.subscribe((user) => {
      this.loggedInUser = user;
    });
  }
}
