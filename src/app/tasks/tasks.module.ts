import { SharedModule } from './../shared/shared.module';
import { TodosComponent } from './components/todos/todos.component';
import { TaskComponent } from './components/task/task.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';


@NgModule({
  declarations: [
    TodosComponent,
    TaskComponent
  ],

  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ]
})
export class TasksModule { }
