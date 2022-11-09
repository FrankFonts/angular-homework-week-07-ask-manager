import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';
import { Task } from './task-interface';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  taskList: Array<Task> = this.localStorage.getLocalstorage('taskList') || [];

  taskList$ = new BehaviorSubject(this.taskList);

  constructor(private readonly localStorage: LocalStorageService) {}

  addTaskToList(task: Task) {
    this.taskList.push(task);
  }

  updateTaskStatus(taskToToggle: Task) {
    this.taskList = this.taskList.map<Task>((task) => {
      if (task === taskToToggle) {
        task.taskDone = !task.taskDone;
      }
      return task;
    });
    this.saveTaskListLocally();
    this.taskList$.next(this.taskList);
  }

  saveTaskListLocally() {
    this.localStorage.setLocalStorage('taskList', this.taskList);
  }
}
