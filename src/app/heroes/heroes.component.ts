import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../Services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[] = [];

  name = 'hero';
  users: User[];

  constructor(private heroService: HeroService, private messageService: MessageService, private userService: UserService) {

  }

  ngOnInit(): void {
    this.getHeroes();
     this.getUsers();
    this.getUsersPromise();
    this.getUsersPromiseAsync();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  // Evitar then
  // getUsersPromise() {
  //   const url = 'https://jsonplaceholder.typicode.com/users';
  //   this.http.get(url).toPromise().then(data => {
  //     this.users = data;
  //   })
  // }

  getUsersPromise(): void {
    this.userService.getUsersPromise().then(data => {
      this.users = data;
    });
  }

  //  // Async (Para coger el error hacer un try catch)
  //  async getUsersPromiseAsync() {
  //     const url = 'https://jsonplaceholder.typicode.com/users';
  //     this.users = await this.http.get(url).toPromise();
  //   }

  async getUsersPromiseAsync(): Promise<void> {
   this.users = await this.userService.getUsersPromiseAsync();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
