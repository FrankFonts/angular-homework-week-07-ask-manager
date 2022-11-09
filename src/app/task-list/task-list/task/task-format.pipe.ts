import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../task-interface';

@Pipe({
  name: 'taskFormat',
})
export class TaskFormatPipe implements PipeTransform {
  transform(task: Task): string {
    let text = `${task.taskName} - ${task.taskDescription}`;

    if (task.createdByUser) {
      text += ` (Added by ${task.createdByUser})`;
    }

    return text;
  }
}
