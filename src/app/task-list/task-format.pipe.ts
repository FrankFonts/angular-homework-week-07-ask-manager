import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task-interface';

@Pipe({
  name: 'taskFormat',
})
export class TaskFormatPipe implements PipeTransform {
  transform(task: Task): string {
    return task.taskName + task.taskDescription + ` by ` + task?.createdByUser;
  }
}
