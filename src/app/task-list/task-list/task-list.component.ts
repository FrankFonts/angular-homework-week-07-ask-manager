import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
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
    this.taskManager.taskList$.subscribe((taskList) => {
      this.doneTaskList = taskList.filter((task) => task.taskDone);

      this.undoneTaskList = taskList.filter((task) => !task.taskDone);
    });
  }

  logout() {
    this.login.logout();
  }
}
