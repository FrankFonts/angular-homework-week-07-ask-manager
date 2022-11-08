import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { Task } from '../task-interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  taskList: Array<Task> = [
    {
      taskName: 'test task',
      taskDescription: 'do the washup, will ya',
      createdByUser: 'John Doe',
      taskDone: false,
    },
  ];

  constructor(private router: Router, private readonly login: LoginService) {}

  ngOnInit(): void {
    console.log(`The logged in user is ${this.login.loggedInUser}`);
  }
}
