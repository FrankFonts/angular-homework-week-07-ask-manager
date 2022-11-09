import { Component, Input } from '@angular/core';
import { Task } from '../task-interface';
import { TaskManagerService } from '../task-manager.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(private readonly taskManager: TaskManagerService) {}

  toggleTaskStatus() {
    this.taskManager.updateTaskStatus(this.task);

  }
}
