import { MessageService } from './../../services/message.service';
import { TodosService } from './../../services/todos.service';
import { userTypeNames } from 'src/app/constants/todo.constants';
import { TODOS } from './../../mock-todos';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() userId: number | undefined;

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
