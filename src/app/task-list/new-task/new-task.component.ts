import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { Task } from '../task-interface';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
})
export class NewTaskComponent implements OnInit {
  @Input() taskList: Array<Task> = [];
  @Output() taskListEvent = new EventEmitter();

  constructor(
    private readonly login: LoginService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  addNewTask(newTaskNameValue: string, newTaskDescriptionValue: string) {
    const newTask: Task = {
      taskName: newTaskNameValue,
      taskDescription: newTaskDescriptionValue,
      createdByUser: this.login.loggedInUser,
      taskDone: false,
    };

    console.log(newTask);

    this.router.navigateByUrl('task-list');
  }

  addToTaskList() {}
}
