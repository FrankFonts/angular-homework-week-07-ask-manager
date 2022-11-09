import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';
import { Task } from '../task-interface';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent implements OnInit {
  newTaskNameError: boolean = false;
  newTaskDescriptionError: boolean = false;

  constructor(
    private readonly login: LoginService,
    private readonly taskManager: TaskManagerService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  addNewTask(newTaskNameValue: string, newTaskDescriptionValue: string) {
    const inputsOK = this.checkForInputErrors(
      newTaskNameValue,
      newTaskDescriptionValue
    );

    if (inputsOK) {
      const newTask: Task = {
        taskName: newTaskNameValue,
        taskDescription: newTaskDescriptionValue,
        createdByUser: this.login.loggedInUser,
        taskDone: false,
      };

      this.taskManager.addTaskToList(newTask);
      this.taskManager.saveTaskListLocally();

      this.router.navigateByUrl('task-list');
    }
  }

  checkForInputErrors(
    newTaskNameValue: string,
    newTaskDescriptionValue: string
  ): boolean {
    if (newTaskNameValue === '' && newTaskDescriptionValue === '') {
      this.newTaskNameError = true;
      this.newTaskDescriptionError = true;
      return false;
    }
    if (newTaskNameValue === '') {
      this.newTaskNameError = true;
      this.newTaskDescriptionError = false;
      return false;
    }
    if (newTaskDescriptionValue === '') {
      this.newTaskDescriptionError = true;
      this.newTaskNameError = false;
      return false;
    }

    this.newTaskNameError = false;
    this.newTaskDescriptionError = false;
    return true;
  }
}
