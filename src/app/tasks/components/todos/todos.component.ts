import { ToDo } from './../../../models/toDos.model';
import { Component, OnInit, Input } from '@angular/core';
import { TODOS } from 'src/app/mock-todos';
import { TodosService } from 'src/app/shared/services/todos.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { userTypeNames } from 'src/app/tasks/constants/todo.constants';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  toDo = TODOS;
  userTypeNames = userTypeNames;

  constructor(private todosService: TodosService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getToDos();
  }
  
  async getToDos(): Promise<void> {
    this.toDo = await this.todosService.getToDo();
  }
}
