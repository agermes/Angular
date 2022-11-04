import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../tasks/models/hero.model';
import { HeroService } from '../../shared/services/hero.service';
import { MessageService } from '../../shared/services/message.service';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../tasks/models/user.model';
import { heroTypeNames } from '../../tasks/constants/hero.constants';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  name = 'hero';
  users: User[];
  newHero = new Hero();

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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  onClickAddHero() : void{
    this.add(this.newHero.name);
    this.newHero.name = '';
  }
}
