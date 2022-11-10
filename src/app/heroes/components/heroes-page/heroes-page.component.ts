import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../../shared/services/hero.service';
import { MessageService } from '../../../shared/services/message.service';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../models/user.model';
import { FormBuilder, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss'],
  styles: [`
  :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
      position: -webkit-sticky;
      position: sticky;
      top: 0rem;
  }

  .layout-news-active :host ::ng-deep .p-datatable tr > th {
      top: 0rem;
  }
`]
})

export class HeroesComponent implements OnInit {
  @ViewChild('createHero') createHeroForm: NgForm;

  displayModal: boolean;

  showModalDialog() {
    this.displayModal = true;
    console.log(this.displayModal);

  }

  selectedHero: Hero;
  heroes: Hero[];
  name = 'hero';
  users: User[];
  newHero = new Hero();

  first = 0;
  rows = 10;

  constructor(private heroService: HeroService, private messageService: MessageService, private userService: UserService, private formBuilder: FormBuilder) {
  }

  checkoutForm = this.formBuilder.group(
    {
      name: ['', Validators.required],
    }
  );

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
  // onSubmit() : void{
  //   this.add(this.newHero.name);
  //   this.createHeroForm.reset();
  // }

  onSubmit(): void {
    if (this.checkoutForm.value.name) {
      this.add(this.checkoutForm.value.name);
      console.warn('Submitted: ', this.checkoutForm.value);
      this.checkoutForm.reset();
      this.displayModal = false;
      this.createHeroForm.resetForm();
    }
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.heroes ? this.first === (this.heroes.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.heroes ? this.first === 0 : true;
  }

}
