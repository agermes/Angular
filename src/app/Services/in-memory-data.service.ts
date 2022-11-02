import { TODOS } from 'src/app/mock-todos';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto', typeId: 2 },
      { id: 14, name: 'Celeritas', typeId: 3 },
      { id: 15, name: 'Magneta', typeId: 1 },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama', typeId: 3 },
      { id: 18, name: 'Dr. IQ', typeId: 1 },
      { id: 19, name: 'Magma', typeId: 2 },
      { id: 20, name: 'Tornado' },
    ];

    const users = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto', typeId: 2 },
      { id: 14, name: 'Celeritas', typeId: 3 },
      { id: 15, name: 'Magneta', typeId: 1 },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama', typeId: 3 },
      { id: 18, name: 'Dr. IQ', typeId: 1 },
      { id: 19, name: 'Magma', typeId: 2 },
      { id: 20, name: 'Tornado' },
    ];

    const toDos = TODOS;

    return {
      heroes,
      users,
      toDos
    }
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}