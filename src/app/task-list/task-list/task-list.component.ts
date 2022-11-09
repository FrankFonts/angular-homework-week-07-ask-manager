import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Task } from '../task-interface';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  doneTaskList: Array<Task> = [];
  undoneTaskList: Array<Task> = [];

  constructor(
    private readonly login: LoginService,
    private readonly taskManager: TaskManagerService
  ) {}

  ngOnInit(): void {
    console.log(this.login.loggedInUser);

    this.taskManager.taskList$.subscribe((taskList) => {
      this.doneTaskList = taskList.filter((task) => task.taskDone);

      this.undoneTaskList = taskList.filter((task) => !task.taskDone);
    });
  }

  logout() {
    this.login.logout();
  }
}
