import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User[]>(url);
  };

  //   // Evitar then
  // getUsersPromise() {
  //   const url = 'https://jsonplaceholder.typicode.com/users';
  //   this.http.get(url).toPromise().then(data => {
  //     this.users = data;
  //   })
  // }

  getUsersPromise(): Promise<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return firstValueFrom(this.http.get<User[]>(`$(url)/api/myAPI`));
  }



  //  // Async (Para coger el error hacer un try catch)
  //  async getUsersPromiseAsync() {
  //     const url = 'https://jsonplaceholder.typicode.com/users';
  //     this.users = await this.http.get(url).toPromise();
  //   }

  getUsersPromiseAsync(): Promise<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return firstValueFrom(this.http.get<User[]>(`$(url)/api/myAPI`));
  }
}
