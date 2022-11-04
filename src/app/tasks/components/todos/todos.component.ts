import { userTypeNames } from 'src/app/tasks/constants/todo.constants';
import { ToDos } from '../../models/toDos.model';
import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from 'src/app/shared/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  toDos: ToDos[] = [];
  userTypeNames = userTypeNames;

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.getToDos();
  }

  async getToDos(): Promise<void> {
    this.toDos = await this.todosService.getToDo();
  }
}
