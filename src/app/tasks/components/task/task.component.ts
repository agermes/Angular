import { MessageService } from 'src/app/shared/services/message.service';
import { TodosService } from 'src/app/shared/services/todos.service';
import { TODOS } from 'src/app/mock-todos';
import { userTypeNames } from 'src/app/tasks/constants/todo.constants';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() userId: number | undefined;
  @Input() id: number | undefined;
  @Input() title: string;

  tasks = TODOS;
  userTypeNames = userTypeNames;

  constructor(private todosService: TodosService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  
  async getTasks(): Promise<void> {
    this.tasks = await this.todosService.getToDo();
  }
}
