import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task-list/task/task.component';
import { TaskListRoutingModule } from './task-list-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormatPipe } from './task-list/task/task-format.pipe';
import { TaskManagerService } from './task-manager.service';
import { LocalStorageService } from '../local-storage.service';

@NgModule({
  declarations: [
    TaskListComponent,
    NewTaskComponent,
    TaskComponent,
    TaskFormatPipe,
  ],
  imports: [CommonModule, TaskListRoutingModule],
  providers: [TaskManagerService, LocalStorageService],
})
export class TaskListModule {}
