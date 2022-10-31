import { Component, OnInit, Input } from '@angular/core';
import { TODOS } from 'src/app/mock-heroes';
import { ToDo } from 'src/app/models/toDos.model';
import { TodosService } from 'src/app/Services/todos.service';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  toDos = TODOS;

  constructor(private todoService: TodosService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.gettoDos();
  }
  
  gettoDos(): void {
    this.todoService.gettoDo().subscribe(toDos => this.toDos = toDos);
    return;
  }
}
