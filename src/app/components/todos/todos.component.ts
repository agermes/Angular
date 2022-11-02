import { Component, OnInit, Input } from '@angular/core';
import { TODOS } from 'src/app/mock-todos';
import { TodosService } from 'src/app/services/todos.service';
import { MessageService } from 'src/app/services/message.service';
import { userTypeNames } from 'src/app/constants/todo.constants';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() userId: number | undefined;

  toDos = TODOS;
  userTypeNames = userTypeNames;

  constructor(private todosService: TodosService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getToDos();
  }
  
  async getToDos(): Promise<void> {
    this.toDos = await this.todosService.getToDo();
  }
}
