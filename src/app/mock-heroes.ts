import { Hero } from './models/hero.model';
import { ToDo } from './models/toDos.model';

export const HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto', typeId: 2 },
  { id: 14, name: 'Celeritas', typeId: 3 },
  { id: 15, name: 'Magneta', typeId: 1 },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama', typeId: 3 },
  { id: 18, name: 'Dr. IQ', typeId: 1 },
  { id: 19, name: 'Magma', typeId: 2 },
  { id: 20, name: 'Tornado' },
]

export const TODOS: ToDo[] = [{
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false
},
{
  userId: 1,
  id: 2,
  title: "quis ut nam facilis et officia qui",
  completed: false
},
{
  userId: 1,
  id: 3,
  title: "fugiat veniam minus",
  completed: false
},
{
  userId: 2,
  id: 21,
  title: "suscipit repellat esse quibusdam voluptatem incidunt",
  completed: false
},
{
  userId: 2,
  id: 22,
  title: "distinctio vitae autem nihil ut molestias quo",
  completed: true
},
{
  userId: 2,
  id: 23,
  title: "et itaque necessitatibus maxime molestiae qui quas velit",
  completed: false
},
{
  userId: 3,
  id: 41,
  title: "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
  completed: false
},
{
  userId: 3,
  id: 42,
  title: "rerum perferendis error quia ut eveniet",
  completed: false
},
{
  userId: 3,
  id: 43,
  title: "tempore ut sint quis recusandae",
  completed: true
}
]