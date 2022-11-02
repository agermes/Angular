import { ToDo } from '../models/toDos.model';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, of } from 'rxjs';
import { MessageService } from './message.service'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // Log a HeroService message with the Message Service
  private log(message: string) {
    this.messageService.add(`ToDosService: ${message}`);
  }

  private todosUrl = 'api/toDos';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);  // log to the console

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep runnig by returning an empty result
      return of(result as T);
    };
  }

  getToDo(): Promise<ToDo[]> {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return firstValueFrom(this.http.get<ToDo[]>(`$(url)/api/myAPI`));
  }
}