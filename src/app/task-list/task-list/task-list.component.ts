import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Task } from '../task-interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  taskList: Array<Task> = [
    {
      taskName: 'wash up',
      taskDescription: 'do the washup, will ya',
      createdByUser: 'John Doe',
    },
  ];

  constructor(private readonly login: LoginService, private router: Router) {}

  ngOnInit(): void {
    // if (this.login.loggedInUser === undefined) {
    //   this.router.navigate(['']);
    // }
    console.log(`The logged in user is ${this.login.loggedInUser}`);
  }
}
