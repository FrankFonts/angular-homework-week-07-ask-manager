import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task-interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  constructor() {}

  ngOnInit(): void {}

  toggleTaskStatus() {
    this.task.taskDone = !this.task.taskDone;
  }
}
