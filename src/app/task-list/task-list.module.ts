import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [TaskListComponent, NewTaskComponent, TaskComponent],
  imports: [CommonModule, TaskListRoutingModule],
})
export class TaskListModule {}
