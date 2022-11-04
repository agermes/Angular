import { userTypeNames } from 'src/app/tasks/constants/todo.constants';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() userId: number | undefined;
  @Input() id: number | undefined;
  @Input() title: string | undefined;
  @Input() completed : boolean | undefined;
  userTypeNames = userTypeNames;

  constructor() { }

  ngOnInit(): void {
    // this.getTasks();
  }
  
  // async getTasks(): Promise<void> {
  //   this.tasks = await this.todosService.getToDo();
  // }
}
